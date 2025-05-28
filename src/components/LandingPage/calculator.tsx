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
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { PlusCircle, X, DollarSign, TrendingUp } from "lucide-react";

// TypeScript interfaces
interface UpsellTier {
  id: string;
  name: string;
  price: number;
  conversionRate: number;
  eligibilityRate: number;
}

interface RevenueCalculation {
  baseRevenue: number;
  totalUpsellRevenue: number;
  totalRevenue: number;
  enrollments: number;
  upsellBreakdown: {
    tier: UpsellTier;
    eligibleCustomers: number;
    conversions: number;
    revenue: number;
  }[];
}

const CourseRevenueCalculator: React.FC = () => {
  const [coursePrice, setCoursePrice] = useState<number>(97);
  const [enrollments, setEnrollments] = useState<number>(100);
  const [upsellTiers, setUpsellTiers] = useState<UpsellTier[]>([
    {
      id: "1",
      name: "Premium Package",
      price: 297,
      conversionRate: 27,
      eligibilityRate: 40,
    },
  ]);

  const [calculation, setCalculation] = useState<RevenueCalculation | null>(
    null
  );

  // Calculate revenue in real-time
  useEffect(() => {
    const baseRevenue = coursePrice * enrollments;
    let totalUpsellRevenue = 0;
    const upsellBreakdown: RevenueCalculation["upsellBreakdown"] = [];

    upsellTiers.forEach((tier) => {
      const eligibleCustomers = Math.floor(
        enrollments * (tier.eligibilityRate / 100)
      );
      const conversions = Math.floor(
        eligibleCustomers * (tier.conversionRate / 100)
      );
      const revenue = conversions * tier.price;

      totalUpsellRevenue += revenue;
      upsellBreakdown.push({
        tier,
        eligibleCustomers,
        conversions,
        revenue,
      });
    });

    setCalculation({
      baseRevenue,
      totalUpsellRevenue,
      totalRevenue: baseRevenue + totalUpsellRevenue,
      enrollments,
      upsellBreakdown,
    });
  }, [coursePrice, enrollments, upsellTiers]);

  const addUpsellTier = () => {
    const newTier: UpsellTier = {
      id: Date.now().toString(),
      name: `Upsell ${upsellTiers.length + 1}`,
      price: 197,
      conversionRate: 15,
      eligibilityRate: 30,
    };
    setUpsellTiers([...upsellTiers, newTier]);
  };

  const removeUpsellTier = (id: string) => {
    setUpsellTiers(upsellTiers.filter((tier) => tier.id !== id));
  };

  const updateUpsellTier = (
    id: string,
    field: keyof UpsellTier,
    value: string | number
  ) => {
    setUpsellTiers(
      upsellTiers.map((tier) =>
        tier.id === id ? { ...tier, [field]: value } : tier
      )
    );
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className="min-h-screen pt-20 p-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Course Revenue Calculator
          </h1>
          <p className="text-lg text-gray-300">
            Calculate your potential revenue with pricing strategies and upsells
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Input Controls */}
          <div className="lg:col-span-2 space-y-6">
            {/* Base Course Settings */}
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-white">
                  <DollarSign className="w-5 h-5 text-blue-400" />
                  Course Pricing
                </CardTitle>
                <CardDescription className="text-gray-400">
                  Set your main course price and enrollment projections
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="course-price" className="text-gray-200">
                      Course Price ($)
                    </Label>
                    <Input
                      id="course-price"
                      type="number"
                      value={coursePrice}
                      onChange={(e) => setCoursePrice(Number(e.target.value))}
                      className="text-lg font-semibold bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                    />
                    <div className="px-3">
                      <Slider
                        value={[coursePrice]}
                        onValueChange={(value) => setCoursePrice(value[0])}
                        max={1000}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                    </div>
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
                    <div className="px-3">
                      <Slider
                        value={[enrollments]}
                        onValueChange={(value) => setEnrollments(value[0])}
                        max={1000}
                        min={10}
                        step={5}
                        className="w-full"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Upsell Configuration */}
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2 text-white">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                      Upsell Configuration
                    </CardTitle>
                    <CardDescription className="text-gray-400">
                      Configure your upsell products and conversion rates
                    </CardDescription>
                  </div>
                  <Button
                    onClick={addUpsellTier}
                    variant="outline"
                    size="sm"
                    className="border-gray-600 text-gray-200 hover:bg-gray-700"
                  >
                    <PlusCircle className="w-4 h-4 mr-2" />
                    Add Upsell
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                {upsellTiers.map((tier, index) => (
                  <div
                    key={tier.id}
                    className="p-4 border border-gray-600 rounded-lg bg-gray-700/50 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <Badge
                        variant="secondary"
                        className="bg-gray-600 text-gray-200"
                      >
                        Tier {index + 1}
                      </Badge>
                      {upsellTiers.length > 1 && (
                        <Button
                          onClick={() => removeUpsellTier(tier.id)}
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-red-400 hover:bg-gray-700"
                        >
                          <X className="w-4 h-4" />
                        </Button>
                      )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-200">Product Name</Label>
                        <Input
                          value={tier.name}
                          onChange={(e) =>
                            updateUpsellTier(tier.id, "name", e.target.value)
                          }
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-200">Price ($)</Label>
                        <Input
                          type="number"
                          value={tier.price}
                          onChange={(e) =>
                            updateUpsellTier(
                              tier.id,
                              "price",
                              Number(e.target.value)
                            )
                          }
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label className="text-gray-200">
                          Eligibility Rate (%)
                        </Label>
                        <Input
                          type="number"
                          value={tier.eligibilityRate}
                          onChange={(e) =>
                            updateUpsellTier(
                              tier.id,
                              "eligibilityRate",
                              Number(e.target.value)
                            )
                          }
                          max="100"
                          min="1"
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                        />
                        <p className="text-xs text-gray-400">
                          Percentage of customers who see this offer
                        </p>
                      </div>
                      <div className="space-y-2">
                        <Label className="text-gray-200">
                          Conversion Rate (%)
                        </Label>
                        <Input
                          type="number"
                          value={tier.conversionRate}
                          onChange={(e) =>
                            updateUpsellTier(
                              tier.id,
                              "conversionRate",
                              Number(e.target.value)
                            )
                          }
                          max="100"
                          min="1"
                          className="bg-gray-700 border-gray-600 text-white focus:border-blue-400"
                        />
                        <p className="text-xs text-gray-400">
                          Percentage of eligible customers who purchase
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Revenue Display */}
          <div className="space-y-6">
            {/* Total Revenue Card */}
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Total Revenue</CardTitle>
                <CardDescription className="text-blue-100">
                  Your projected earnings
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-bold mb-2">
                  {calculation
                    ? formatCurrency(calculation.totalRevenue)
                    : "$0"}
                </div>
                <div className="text-sm text-blue-100">
                  Based on {enrollments} enrollments
                </div>
              </CardContent>
            </Card>

            {/* Revenue Breakdown */}
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Revenue Breakdown</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {calculation && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Base Course Revenue</span>
                      <span className="font-semibold text-white">
                        {formatCurrency(calculation.baseRevenue)}
                      </span>
                    </div>

                    <Separator className="bg-gray-600" />

                    {calculation.upsellBreakdown.map((upsell, index) => (
                      <div key={upsell.tier.id} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-300">
                            {upsell.tier.name}
                          </span>
                          <span className="font-semibold text-white">
                            {formatCurrency(upsell.revenue)}
                          </span>
                        </div>
                        <div className="text-xs text-gray-400 grid grid-cols-2 gap-2">
                          <span>{upsell.eligibleCustomers} eligible</span>
                          <span>{upsell.conversions} conversions</span>
                        </div>
                        {index < calculation.upsellBreakdown.length - 1 && (
                          <Separator className="bg-gray-600" />
                        )}
                      </div>
                    ))}

                    <Separator className="bg-gray-600" />

                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Total Upsell Revenue
                      </span>
                      <span className="font-semibold text-green-400">
                        {formatCurrency(calculation.totalUpsellRevenue)}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>

            {/* Key Metrics */}
            <Card className="border-0 shadow-2xl bg-gray-800/90 backdrop-blur border-gray-700">
              <CardHeader>
                <CardTitle className="text-white">Key Metrics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {calculation && (
                  <>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Revenue per Customer
                      </span>
                      <span className="font-semibold text-white">
                        {formatCurrency(
                          calculation.totalRevenue / calculation.enrollments
                        )}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Upsell Revenue %</span>
                      <span className="font-semibold text-white">
                        {(
                          (calculation.totalUpsellRevenue /
                            calculation.totalRevenue) *
                          100
                        ).toFixed(1)}
                        %
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">
                        Total Upsell Conversions
                      </span>
                      <span className="font-semibold text-white">
                        {calculation.upsellBreakdown.reduce(
                          (sum, upsell) => sum + upsell.conversions,
                          0
                        )}
                      </span>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseRevenueCalculator;
