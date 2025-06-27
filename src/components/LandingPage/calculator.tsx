"use client";

import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";
import { DollarSign, TrendingUp } from "lucide-react";

const CourseRevenueCalculator: React.FC = () => {
  const [coursePrice, setCoursePrice] = useState<number>(97);
  const [enrollments, setEnrollments] = useState<number>(100);
  const [upsellPrice, setUpsellPrice] = useState<number>(297);
  const [upsellRate, setUpsellRate] = useState<number>(25);

  const [results, setResults] = useState({
    baseRevenue: 0,
    upsellRevenue: 0,
    totalRevenue: 0,
    upsellConversions: 0,
  });

  useEffect(() => {
    const baseRevenue = coursePrice * enrollments;
    const upsellConversions = Math.floor(enrollments * (upsellRate / 100));
    const upsellRevenue = upsellConversions * upsellPrice;
    const totalRevenue = baseRevenue + upsellRevenue;

    setResults({
      baseRevenue,
      upsellRevenue,
      totalRevenue,
      upsellConversions,
    });
  }, [coursePrice, enrollments, upsellPrice, upsellRate]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // Custom slider styles
  const sliderStyles =
    "[&>span:first-child]:bg-gray-200 [&>span:first-child>span]:bg-black [&_[role=slider]]:bg-black [&_[role=slider]]:border-black [&_[role=slider]]:shadow-md";

  return (
    <div className="min-h-[80vh] p-4 py-20 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Course Revenue Calculator
          </h1>
          <p className="text-gray-600">Simple calculator for course creators</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
          {/* Input Section */}
          <div className="flex flex-col space-y-8">
            <Card className="border shadow-lg bg-white border-gray-200 flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <DollarSign className="w-5 h-5 text-blue-600" />
                  Course Settings
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Configure your course pricing and projections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="course-price" className="text-gray-700">
                      Course Price
                    </Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-500">$</span>
                      <Input
                        id="course-price"
                        type="number"
                        value={coursePrice}
                        onChange={(e) => setCoursePrice(Number(e.target.value))}
                        className="text-lg font-semibold bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                      />
                    </div>
                    <Slider
                      value={[coursePrice]}
                      onValueChange={(value) => setCoursePrice(value[0])}
                      max={500}
                      min={10}
                      step={5}
                      className={`w-full ${sliderStyles}`}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enrollments" className="text-gray-700">
                      Expected Enrollments
                    </Label>
                    <Input
                      id="enrollments"
                      type="number"
                      value={enrollments}
                      onChange={(e) => setEnrollments(Number(e.target.value))}
                      className="text-lg font-semibold bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    />
                    <Slider
                      value={[enrollments]}
                      onValueChange={(value) => setEnrollments(value[0])}
                      max={500}
                      min={10}
                      step={5}
                      className={`w-full ${sliderStyles}`}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border shadow-lg bg-white border-gray-200 flex-1">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-gray-900">
                  <TrendingUp className="w-5 h-5 text-green-600" />
                  Upsell Settings
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Add an upsell to increase revenue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="upsell-price" className="text-gray-700">
                    Upsell Price
                  </Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-500">$</span>
                    <Input
                      id="upsell-price"
                      type="number"
                      value={upsellPrice}
                      onChange={(e) => setUpsellPrice(Number(e.target.value))}
                      className="bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upsell-rate" className="text-gray-700">
                    Conversion Rate (%)
                  </Label>
                  <Input
                    id="upsell-rate"
                    type="number"
                    value={upsellRate}
                    onChange={(e) => setUpsellRate(Number(e.target.value))}
                    max="100"
                    min="1"
                    className="bg-white border-gray-300 text-gray-900 focus:border-blue-500"
                  />
                  <Slider
                    value={[upsellRate]}
                    onValueChange={(value) => setUpsellRate(value[0])}
                    max={50}
                    min={5}
                    step={1}
                    className={`w-full ${sliderStyles}`}
                  />
                  <p className="text-xs text-gray-500">
                    Percentage of customers who buy the upsell
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="flex flex-col space-y-8">
            {/* Total Revenue */}
            <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-500 via-purple-500 to-indigo-600 text-white flex-1">
              <CardHeader>
                <CardTitle className="text-2xl">Total Revenue</CardTitle>
                <CardDescription className="text-blue-100">
                  Your projected earnings
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col justify-center h-full">
                <div className="text-5xl font-bold mb-4">
                  {formatCurrency(results.totalRevenue)}
                </div>
                <div className="text-blue-100">From {enrollments} students</div>
              </CardContent>
            </Card>

            {/* Revenue Breakdown */}
            <Card className="border shadow-lg bg-white border-gray-200 flex-1">
              <CardHeader>
                <CardTitle className="text-gray-900">
                  Revenue Breakdown
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Course Sales</span>
                  <span className="font-semibold text-gray-900">
                    {formatCurrency(results.baseRevenue)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {enrollments} students × {formatCurrency(coursePrice)}
                  </span>
                </div>

                <Separator className="bg-gray-200" />

                <div className="flex justify-between items-center">
                  <span className="text-gray-700">Upsell Revenue</span>
                  <span className="font-semibold text-green-600">
                    {formatCurrency(results.upsellRevenue)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>
                    {results.upsellConversions} conversions ×{" "}
                    {formatCurrency(upsellPrice)}
                  </span>
                </div>

                <Separator className="bg-gray-200" />

                <div className="flex justify-between items-center text-lg">
                  <span className="text-gray-900 font-semibold">
                    Total Revenue
                  </span>
                  <span className="font-bold text-gray-900">
                    {formatCurrency(results.totalRevenue)}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRevenueCalculator;
