import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Globe, Target } from "lucide-react";

export const EnhancedStatsDisplay = () => {
  const metrics = [
    {
      title: "Course Production",
      value: "100+",
      change: "+25%",
      changeType: "increase",
      icon: TrendingUp,
      description: "Professional courses created",
      color: "from-blue-500 to-blue-600",
    },
    {
      title: "Student Community",
      value: "112,000+",
      change: "+45%",
      changeType: "increase",
      icon: Users,
      description: "Active enrolled students",
      color: "from-green-500 to-green-600",
    },
    {
      title: "Global Reach",
      value: "168",
      change: "+12%",
      changeType: "increase",
      icon: Globe,
      description: "Countries worldwide",
      color: "from-purple-500 to-purple-600",
    },
    {
      title: "Subject Diversity",
      value: "23",
      change: "+8%",
      changeType: "increase",
      icon: Target,
      description: "Different learning niches",
      color: "from-orange-500 to-orange-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 max-w-7xl mx-auto">
      {metrics.map((metric, index) => (
        <Card
          key={index}
          className="relative overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-2xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
        >
          <div
            className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${metric.color}`}
          ></div>
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div
                  className={`p-2 rounded-lg bg-gradient-to-r ${metric.color} text-white`}
                >
                  <metric.icon className="h-5 w-5" />
                </div>
                <CardTitle className="text-lg font-semibold">
                  {metric.title}
                </CardTitle>
              </div>
              <div className="flex items-center space-x-1 text-green-600">
                <TrendingUp className="h-4 w-4" />
                <span className="text-sm font-medium">{metric.change}</span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-4xl font-bold text-gray-900 dark:text-white">
                {metric.value}
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {metric.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
