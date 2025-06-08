"use client";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import { useState } from "react";
import "react-phone-number-input/style.css";

const VSL_PAGE_URL = "https://lamzcoursecreation.com//vsl"; // Replace with your VSL page URL
const GOOGLE_SHEET_WEBHOOK =
  "https://script.google.com/macros/s/AKfycby250Xjp4ZEUMuXAugsRugBm51HrfNvtxElQgsHJLumAynangO0qhAcoEsNuyXEyqbxyg/exec"; // You'll need to replace this

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

  // Enhanced email validation regex
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  const validateEmail = (email: string): string | null => {
    if (!email.trim()) {
      return "Email is required";
    }

    if (email.length > 254) {
      return "Email is too long";
    }

    if (!emailRegex.test(email)) {
      return "Please enter a valid email address";
    }

    // Check for common typos in domains
    const commonDomains = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "icloud.com",
    ];
    const domain = email.split("@")[1]?.toLowerCase();

    if (domain) {
      // Check for common typos
      const typos: { [key: string]: string } = {
        "gmai.com": "gmail.com",
        "gmial.com": "gmail.com",
        "gmail.co": "gmail.com",
        "yahooo.com": "yahoo.com",
        "yaho.com": "yahoo.com",
        "outlok.com": "outlook.com",
        "hotmial.com": "hotmail.com",
      };

      if (typos[domain]) {
        return `Did you mean ${email.split("@")[0]}@${typos[domain]}?`;
      }
    }

    return null;
  };

  const validateFullName = (name: string): string | null => {
    if (!name.trim()) {
      return "Full name is required";
    }

    if (name.trim().length < 2) {
      return "Please enter your full name";
    }

    // Check if it contains at least one space (first and last name)
    if (!name.trim().includes(" ")) {
      return "Please enter your first and last name";
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

  const isEmailValid = formData.email && !errors.email;
  const isNameValid = formData.fullName && !errors.fullName;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100]"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            animate={{ opacity: 1, scale: 1, y: "-50%", x: "-50%" }}
            exit={{ opacity: 0, scale: 0.95, y: "-50%", x: "-50%" }}
            className="fixed left-1/2 top-1/2 w-[90%] max-w-[400px] z-[101]"
          >
            <div className="bg-[#0A0A0A] rounded-2xl overflow-hidden">
              <button
                onClick={onClose}
                className="absolute right-3 top-3 text-white/60 hover:text-white z-10"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  />
                </svg>
              </button>

              <div className="p-8">
                <p className="text-gray-400 text-sm font-medium text-center mb-2">
                  FREE TRAINING
                </p>

                <h2 className="text-2xl font-bold text-center text-white mb-6 leading-tight">
                  The No-BS online business model that turns your passion and
                  expertise into profit without ads or any followers
                </h2>

                <div className="aspect-video bg-orange-900/20 rounded-lg mb-8 overflow-hidden w-full">
                  <Image
                    src="/image.webp"
                    alt="Business Model"
                    layout="responsive"
                    width={700}
                    height={475}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("fullName")}
                        placeholder="Your Full Name*"
                        className={`w-full px-4 py-3.5 rounded-lg bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.fullName
                            ? "ring-1 ring-red-500 focus:ring-red-500"
                            : isNameValid
                            ? "ring-1 ring-green-500 focus:ring-green-500"
                            : "focus:ring-blue-500"
                        }`}
                      />
                      {isNameValid && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg
                            className="w-5 h-5 text-green-500"
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
                    {errors.fullName && (
                      <p className="text-red-400 text-sm mt-1 ml-1">
                        {errors.fullName}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onBlur={() => handleBlur("email")}
                        placeholder="Your Email*"
                        className={`w-full px-4 py-3.5 rounded-lg bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:ring-1 transition-all ${
                          errors.email
                            ? "ring-1 ring-red-500 focus:ring-red-500"
                            : isEmailValid
                            ? "ring-1 ring-green-500 focus:ring-green-500"
                            : "focus:ring-blue-500"
                        }`}
                      />
                      {isEmailValid && (
                        <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                          <svg
                            className="w-5 h-5 text-green-500"
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
                    {errors.email && (
                      <p className="text-red-400 text-sm mt-1 ml-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    placeholder="Phone Number (Optional)"
                    className="w-full px-4 py-3.5 rounded-lg bg-[#1A1A1A] text-white placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />

                  {errors.general && (
                    <p className="text-red-400 text-sm text-center">
                      {errors.general}
                    </p>
                  )}

                  <button
                    onClick={handleSubmit}
                    disabled={isLoading || !isEmailValid || !isNameValid}
                    className="w-full py-4 bg-[#0037FF] hover:bg-[#0037FF]/90 text-white rounded-lg font-bold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isLoading ? "PROCESSING..." : "WATCH FREE TRAINING"}
                  </button>
                </div>

                <p className="text-gray-500 text-xs text-center mt-4">
                  This demo is closing soon. Save your spot now.
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
