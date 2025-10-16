import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { cn } from '../../libs/utils';

// Componente simple de gráfico placeholder
// En producción, aquí integrarías Chart.js, Recharts, o similar
const Chart = ({ 
  title, 
  data = [], 
  type = 'line',
  className,
  ...props 
}) => {
  // Datos de ejemplo para el placeholder
  const sampleData = data.length > 0 ? data : [
    { label: 'Ene', value: 400 },
    { label: 'Feb', value: 300 },
    { label: 'Mar', value: 200 },
    { label: 'Abr', value: 278 },
    { label: 'May', value: 189 },
    { label: 'Jun', value: 239 },
  ];

  const maxValue = Math.max(...sampleData.map(d => d.value));

  return (
    <Card className={cn("", className)} {...props}>
      {title && (
        <CardHeader>
          <CardTitle>{title}</CardTitle>
        </CardHeader>
      )}
      <CardContent>
        <div className="h-[300px] w-full">
          {type === 'line' && (
            <div className="relative h-full w-full">
              <svg className="h-full w-full" viewBox="0 0 400 300">
                <polyline
                  fill="none"
                  stroke="#00BFA5"
                  strokeWidth="2"
                  points={sampleData.map((d, i) => 
                    `${(i * 400) / (sampleData.length - 1)},${300 - (d.value / maxValue) * 250}`
                  ).join(' ')}
                />
                {sampleData.map((d, i) => (
                  <circle
                    key={i}
                    cx={(i * 400) / (sampleData.length - 1)}
                    cy={300 - (d.value / maxValue) * 250}
                    r="4"
                    fill="#00BFA5"
                  />
                ))}
              </svg>
              <div className="absolute bottom-0 left-0 right-0 flex justify-between text-xs text-gray-500">
                {sampleData.map((d, i) => (
                  <span key={i}>{d.label}</span>
                ))}
              </div>
            </div>
          )}
          {type === 'bar' && (
            <div className="flex h-full items-end justify-between space-x-2">
              {sampleData.map((d, i) => (
                <div key={i} className="flex flex-col items-center space-y-2">
                  <div
                    className="w-8 bg-primary-500 rounded-t"
                    style={{ height: `${(d.value / maxValue) * 200}px` }}
                  />
                  <span className="text-xs text-gray-500">{d.label}</span>
                </div>
              ))}
            </div>
          )}
          {type === 'doughnut' && (
            <div className="flex h-full items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-500">
                  {sampleData.reduce((sum, d) => sum + d.value, 0)}
                </div>
                <div className="text-sm text-gray-500">Total</div>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export { Chart };
