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
import { Button } from "@/components/ui/button";
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

  return (
    <div className="min-h-[80vh]  p-4 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">
            Course Revenue Calculator
          </h1>
          <p className="text-gray-300">Simple calculator for course creators</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Input Section */}
          <div className="space-y-6">
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                  Course Settings
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Configure your course pricing and projections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="course-price" className="text-gray-200">
                      Course Price
                    </Label>
                    <div className="flex items-center space-x-2">
                      <span className="text-gray-400">$</span>
                      <Input
                        id="course-price"
                        type="number"
                        value={coursePrice}
                        onChange={(e) => setCoursePrice(Number(e.target.value))}
                        className="text-lg font-semibold bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                      />
                    </div>
                    <Slider
                      value={[coursePrice]}
                      onValueChange={(value) => setCoursePrice(value[0])}
                      max={500}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="enrollments" className="text-gray-200">
                      Expected Enrollments
                    </Label>
                    <Input
                      id="enrollments"
                      type="number"
                      value={enrollments}
                      onChange={(e) => setEnrollments(Number(e.target.value))}
                      className="text-lg font-semibold bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                    />
                    <Slider
                      value={[enrollments]}
                      onValueChange={(value) => setEnrollments(value[0])}
                      max={500}
                      min={10}
                      step={5}
                      className="w-full"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  Upsell Settings
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Add an upsell to increase revenue
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="upsell-price" className="text-gray-200">
                    Upsell Price
                  </Label>
                  <div className="flex items-center space-x-2">
                    <span className="text-gray-400">$</span>
                    <Input
                      id="upsell-price"
                      type="number"
                      value={upsellPrice}
                      onChange={(e) => setUpsellPrice(Number(e.target.value))}
                      className="bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="upsell-rate" className="text-gray-200">
                    Conversion Rate (%)
                  </Label>
                  <Input
                    id="upsell-rate"
                    type="number"
                    value={upsellRate}
                    onChange={(e) => setUpsellRate(Number(e.target.value))}
                    max="100"
                    min="1"
                    className="bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                  />
                  <Slider
                    value={[upsellRate]}
                    onValueChange={(value) => setUpsellRate(value[0])}
                    max={50}
                    min={5}
                    step={1}
                    className="w-full"
                  />
                  <p className="text-xs text-gray-400">
                    Percentage of customers who buy the upsell
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Results Section */}
          <div className="space-y-6">
            {/* Total Revenue */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
              <CardHeader>
                <CardTitle className="text-2xl">Total Revenue</CardTitle>
                <CardDescription className="text-blue-100">
                  Your projected earnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-5xl font-bold mb-4">
                  {formatCurrency(results.totalRevenue)}
                </div>
                <div className="text-blue-100">From {enrollments} students</div>
              </CardContent>
            </Card>

            {/* Revenue Breakdown */}
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Course Sales</span>
                  <span className="font-semibold text-white">
                    {formatCurrency(results.baseRevenue)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>
                    {enrollments} students × {formatCurrency(coursePrice)}
                  </span>
                </div>

                <Separator className="bg-gray-600" />

                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Upsell Revenue</span>
                  <span className="font-semibold text-green-400">
                    {formatCurrency(results.upsellRevenue)}
                  </span>
                </div>

                <div className="flex justify-between items-center text-sm text-gray-400">
                  <span>
                    {results.upsellConversions} conversions ×{" "}
                    {formatCurrency(upsellPrice)}
                  </span>
                </div>

                <Separator className="bg-gray-600" />

                <div className="flex justify-between items-center text-lg">
                  <span className="text-white font-semibold">
                    Total Revenue
                  </span>
                  <span className="font-bold text-white">
                    {formatCurrency(results.totalRevenue)}
                  </span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardContent className="pt-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">
                      {formatCurrency(results.totalRevenue / enrollments)}
                    </div>
                    <div className="text-sm text-gray-400">
                      Revenue per Student
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">
                      {(
                        (results.upsellRevenue / results.totalRevenue) *
                        100
                      ).toFixed(0)}
                      %
                    </div>
                    <div className="text-sm text-gray-400">From Upsells</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Export Button */}
        <div className="mt-8 text-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Export Results
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseRevenueCalculator;
