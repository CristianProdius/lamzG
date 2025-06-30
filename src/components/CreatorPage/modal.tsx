"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

const VSL_PAGE_URL = "https://lamzcoursecreation.com/vsl";
const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycby250Xjp4ZEUMuXAugsRugBm51HrfNvtxElQgsHJLumAynangO0qhAcoEsNuyXEyqbxyg/exec";

interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
}

interface ValidationErrors {
  fullName?: string;
  email?: string;
  general?: string;
}

// Common disposable email domains
const DISPOSABLE_DOMAINS = [
  "tempmail.com",
  "throwaway.email",
  "guerrillamail.com",
  "mailinator.com",
  "10minutemail.com",
  "trashmail.com",
  "yopmail.com",
  "getnada.com",
  "fakeinbox.com",
  "dispostable.com",
  "temporarymail.com",
  "throwawaymail.com",
  "maildrop.cc",
  "minuteinbox.com",
  "temp-mail.org",
  "temporaryemail.net",
  "spamgourmet.com",
  "sharklasers.com",
  "grr.la",
  "guerrillamail.biz",
  "guerrillamail.net",
  "guerrillamail.org",
  "guerrillamailblock.com",
  "pokemail.net",
  "spam4.me",
  "tempemail.net",
  "jetable.org",
];

// Common fake patterns
const FAKE_PATTERNS = [
  /^test\d*@/i,
  /^fake\d*@/i,
  /^dummy\d*@/i,
  /^example\d*@/i,
  /^sample\d*@/i,
  /^demo\d*@/i,
  /^user\d*@/i,
  /^email\d*@/i,
  /^mail\d*@/i,
  /^asdf+@/i,
  /^qwerty+@/i,
  /^abc+@/i,
  /^xyz+@/i,
  /^admin\d*@/i,
  /^info\d*@/i,
  /^\d+@/i, // Only numbers before @
];

// Check for repeated characters
const hasExcessiveRepeatedChars = (str: string): boolean => {
  return /(.)\1{4,}/.test(str); // 5 or more repeated characters
};

// Check for keyboard patterns
const hasKeyboardPattern = (str: string): boolean => {
  const patterns = ["qwer", "asdf", "zxcv", "1234", "0987"];
  const lowerStr = str.toLowerCase();
  return patterns.some((pattern) => lowerStr.includes(pattern));
};

const Modal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phoneNumber: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const validateEmail = (email: string): string | null => {
    const trimmedEmail = email.trim().toLowerCase();

    if (!trimmedEmail) {
      return "Email is required";
    }

    if (trimmedEmail.length > 254) {
      return "Email is too long";
    }

    // Basic format validation
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(trimmedEmail)) {
      return "Please enter a valid email address";
    }

    const [localPart, domain] = trimmedEmail.split("@");

    // Check for disposable email domains
    if (DISPOSABLE_DOMAINS.includes(domain)) {
      return "Please use a permanent email address";
    }

    // Check for fake patterns
    if (FAKE_PATTERNS.some((pattern) => pattern.test(trimmedEmail))) {
      return "Please enter a real email address";
    }

    // Check for excessive repeated characters
    if (hasExcessiveRepeatedChars(localPart)) {
      return "Please enter a valid email address";
    }

    // Check for keyboard patterns
    if (hasKeyboardPattern(localPart)) {
      return "Please enter a real email address";
    }

    // Check for minimum reasonable length
    if (localPart.length < 3) {
      return "Email address seems too short";
    }

    // Check for common typos in domains
    const domainTypos: { [key: string]: string } = {
      "gmai.com": "gmail.com",
      "gmial.com": "gmail.com",
      "gmail.co": "gmail.com",
      "gmil.com": "gmail.com",
      "gmal.com": "gmail.com",
      "yahooo.com": "yahoo.com",
      "yaho.com": "yahoo.com",
      "yahou.com": "yahoo.com",
      "outlok.com": "outlook.com",
      "outook.com": "outlook.com",
      "hotmial.com": "hotmail.com",
      "hotmal.com": "hotmail.com",
      "hotmil.com": "hotmail.com",
    };

    if (domainTypos[domain]) {
      return `Did you mean ${localPart}@${domainTypos[domain]}?`;
    }

    // Check for missing TLD
    if (!domain.includes(".")) {
      return "Email domain seems incomplete";
    }

    // Check for suspicious TLDs
    const suspiciousTLDs = [".tk", ".ml", ".ga", ".cf"];
    if (suspiciousTLDs.some((tld) => domain.endsWith(tld))) {
      return "Please use a business or personal email";
    }

    return null;
  };

  const validateFullName = (name: string): string | null => {
    const trimmedName = name.trim();

    if (!trimmedName) {
      return "Full name is required";
    }

    if (trimmedName.length < 3) {
      return "Please enter your full name";
    }

    // Check if it contains at least two parts (first and last name)
    if (!trimmedName.includes(" ")) {
      return "Please enter both first and last name";
    }

    // Check for fake patterns in names
    if (/^(test|fake|dummy|asdf|qwerty)/i.test(trimmedName)) {
      return "Please enter your real name";
    }

    // Check for repeated characters
    if (hasExcessiveRepeatedChars(trimmedName)) {
      return "Please enter a valid name";
    }

    // Check for numbers in name (some names have numbers, but it's rare)
    if (/\d/.test(trimmedName)) {
      return "Names typically don't contain numbers";
    }

    return null;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Real-time validation
    if (touched[name]) {
      const newErrors = { ...errors };

      if (name === "email") {
        const emailError = validateEmail(value);
        if (emailError) {
          newErrors.email = emailError;
        } else {
          delete newErrors.email;
        }
      }

      if (name === "fullName") {
        const nameError = validateFullName(value);
        if (nameError) {
          newErrors.fullName = nameError;
        } else {
          delete newErrors.fullName;
        }
      }

      setErrors(newErrors);
    }
  };

  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));

    const newErrors = { ...errors };

    if (field === "email") {
      const emailError = validateEmail(formData.email);
      if (emailError) {
        newErrors.email = emailError;
      } else {
        delete newErrors.email;
      }
    }

    if (field === "fullName") {
      const nameError = validateFullName(formData.fullName);
      if (nameError) {
        newErrors.fullName = nameError;
      } else {
        delete newErrors.fullName;
      }
    }

    setErrors(newErrors);
  };

  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};

    const nameError = validateFullName(formData.fullName);
    if (nameError) {
      newErrors.fullName = nameError;
    }

    const emailError = validateEmail(formData.email);
    if (emailError) {
      newErrors.email = emailError;
    }

    setErrors(newErrors);
    setTouched({ fullName: true, email: true });

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;

      setIsLoading(true);
      setErrors({});

      const formPayload = {
        timestamp: new Date().toISOString(),
        fullName: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phoneNumber: formData.phoneNumber,
      };

      await fetch(GOOGLE_SHEET_WEBHOOK, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      setFormData({ fullName: "", email: "", phoneNumber: "" });
      setTouched({});
      setErrors({});
      onClose();
      window.location.href = VSL_PAGE_URL;
    } catch (err) {
      setErrors({ general: "Form submission failed. Please try again." });
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const isEmailValid = formData.email && !errors.email && touched.email;
  const isNameValid = formData.fullName && !errors.fullName && touched.fullName;

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] transition-opacity duration-300 ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-[450px] z-[101] transition-all duration-300 ${
          showModal ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 z-10 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
              />
            </svg>
          </button>

          <div className="p-8 lg:p-10">
            {/* Header */}
            <div className="text-center mb-6">
              <div className="inline-flex items-center bg-purple-100 border border-purple-200 rounded-full px-4 py-1.5 mb-4">
                <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">
                  Free Training
                </span>
              </div>

              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
                The No-BS Online Business Model That Turns Your Passion Into{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800">
                  Profit
                </span>
              </h2>
              <p className="text-gray-600 mt-2">Without ads or any followers</p>
            </div>

            {/* Image */}
            <div className="aspect-video bg-gradient-to-br from-purple-100 to-purple-50 rounded-2xl mb-8 overflow-hidden shadow-lg">
              <Image
                width={600}
                height={400}
                src="/image.webp"
                alt="Business Model Training"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Form */}
            <div className="space-y-4">
              {/* Full Name Input */}
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("fullName")}
                    placeholder="Your Full Name*"
                    className={`w-full px-4 py-4 rounded-xl border-2 text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${
                      errors.fullName && touched.fullName
                        ? "border-red-300 focus:border-red-500 bg-red-50"
                        : isNameValid
                        ? "border-green-300 focus:border-green-500 bg-green-50"
                        : "border-gray-200 focus:border-purple-500 bg-white"
                    }`}
                  />
                  {isNameValid && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.fullName && touched.fullName && (
                  <p className="text-red-600 text-sm mt-1.5 ml-1">
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Email Input */}
              <div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onBlur={() => handleBlur("email")}
                    placeholder="Your Email*"
                    className={`w-full px-4 py-4 rounded-xl border-2 text-gray-900 placeholder-gray-400 focus:outline-none transition-all ${
                      errors.email && touched.email
                        ? "border-red-300 focus:border-red-500 bg-red-50"
                        : isEmailValid
                        ? "border-green-300 focus:border-green-500 bg-green-50"
                        : "border-gray-200 focus:border-purple-500 bg-white"
                    }`}
                  />
                  {isEmailValid && (
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2">
                      <svg
                        className="w-5 h-5 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  )}
                </div>
                {errors.email && touched.email && (
                  <p className="text-red-600 text-sm mt-1.5 ml-1">
                    {errors.email}
                  </p>
                )}
              </div>

              {/* Phone Input */}
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                placeholder="Phone Number (Optional)"
                className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-purple-500 transition-all bg-white"
              />

              {/* Error message */}
              {errors.general && (
                <p className="text-red-600 text-sm text-center">
                  {errors.general}
                </p>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={isLoading || !isEmailValid || !isNameValid}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                  isLoading || !isEmailValid || !isNameValid
                    ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-purple-600 to-purple-700 text-white hover:from-purple-700 hover:to-purple-800 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    PROCESSING...
                  </span>
                ) : (
                  "WATCH FREE TRAINING →"
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-6 text-center">
              <p className="text-gray-500 text-sm">
                🔒 Your information is 100% secure
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Limited spots available. This training closes soon.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
