
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface DashboardCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  route: string;
  className?: string;
  style?: React.CSSProperties;
}

const DashboardCard: React.FC<DashboardCardProps> = ({
  title,
  description,
  icon,
  color,
  route,
  className,
  style,
}) => {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    navigate(route);
  };

  return (
    <div 
      className={cn(
        "bg-white rounded-xl shadow-sm border border-gray-100 p-6 transition-all duration-300",
        "hover:shadow-md hover:border-gray-200 hover:translate-y-[-2px]",
        className
      )}
      style={style}
    >
      <div className="flex flex-col h-full">
        <div className={cn("w-12 h-12 rounded-full flex items-center justify-center mb-4", color)}>
          {icon}
        </div>
        
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 flex-grow">{description}</p>
        
        <Button 
          onClick={handleCardClick}
          variant="outline"
          className="w-full mt-2 transition-all duration-300 hover:bg-gray-50 group"
        >
          ingresar 
          <ArrowRight className="ml-2 h-4 w-4 transition-all duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
    </div>
  );
};

export default DashboardCard;
