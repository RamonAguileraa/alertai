import React from 'react';
import { AlertTriangle, CheckCircle, Info, XCircle, X } from 'lucide-react';
import { cn } from '../../libs/utils';

const AlertBanner = ({ 
  type = 'info',
  title,
  message,
  onClose,
  className,
  ...props 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertTriangle className="h-5 w-5 text-yellow-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      default:
        return <Info className="h-5 w-5 text-blue-600" />;
    }
  };

  const getStyles = () => {
    switch (type) {
      case 'success':
        return 'bg-green-50 border-green-200 text-green-800';
      case 'warning':
        return 'bg-yellow-50 border-yellow-200 text-yellow-800';
      case 'error':
        return 'bg-red-50 border-red-200 text-red-800';
      default:
        return 'bg-blue-50 border-blue-200 text-blue-800';
    }
  };

  return (
    <div
      className={cn(
        "flex items-start space-x-3 rounded-lg border p-4",
        getStyles(),
        className
      )}
      {...props}
    >
      {getIcon()}
      <div className="flex-1">
        {title && (
          <h3 className="text-sm font-medium mb-1">{title}</h3>
        )}
        <p className="text-sm">{message}</p>
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 text-gray-400 hover:text-gray-600"
        >
          <X className="h-4 w-4" />
        </button>
      )}
    </div>
  );
};

export { AlertBanner };
