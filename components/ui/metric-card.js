"use client";

import React from 'react';
import { Card, CardContent } from './card';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '../../libs/utils';

const MetricCard = ({ 
  title, 
  value, 
  change, 
  changeType = 'neutral', 
  icon,
  className,
  color = "primary",
  description,
  ...props 
}) => {
  const getChangeIcon = () => {
    switch (changeType) {
      case 'increase':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'decrease':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getChangeColor = () => {
    switch (changeType) {
      case 'increase':
        return 'text-green-600 dark:text-green-400';
      case 'decrease':
        return 'text-red-600 dark:text-red-400';
      default:
        return 'text-gray-500 dark:text-gray-400';
    }
  };

  const colorClasses = {
    primary: {
      bg: "from-primary-500/10 to-primary-600/10",
      iconBg: "from-primary-500 to-primary-600",
      text: "text-primary-600 dark:text-primary-400"
    },
    success: {
      bg: "from-green-500/10 to-green-600/10",
      iconBg: "from-green-500 to-green-600",
      text: "text-green-600 dark:text-green-400"
    },
    warning: {
      bg: "from-yellow-500/10 to-yellow-600/10",
      iconBg: "from-yellow-500 to-yellow-600",
      text: "text-yellow-600 dark:text-yellow-400"
    },
    danger: {
      bg: "from-red-500/10 to-red-600/10",
      iconBg: "from-red-500 to-red-600",
      text: "text-red-600 dark:text-red-400"
    }
  };

  const colors = colorClasses[color] || colorClasses.primary;

  return (
    <Card className={cn(
      "group border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900",
      className
    )} {...props}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            {icon && (
              <div className={`bg-gradient-to-r ${colors.iconBg} p-2 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300`}>
                {icon}
              </div>
            )}
            <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
              {title}
            </h3>
          </div>
          
          {/* Background decoration */}
          <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${colors.bg} rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity`}></div>
        </div>
        
        <div className={`text-3xl font-bold ${colors.text} mb-3`}>
          {value}
        </div>
        
        {change && (
          <div className={cn("flex items-center text-sm mb-2", getChangeColor())}>
            {getChangeIcon()}
            <span className="ml-1 font-medium">{change}</span>
          </div>
        )}
        
        {description && (
          <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export { MetricCard };