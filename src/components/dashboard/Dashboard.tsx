
import React from "react";
import { Car } from "lucide-react";
import DashboardCard from "./DashboardCard";

interface DashboardProps {
  className?: string;
}

const Dashboard: React.FC<DashboardProps> = ({ className }) => {
  const cardData = [
    {
      title: "flotilla 1",
      description: "Visualiza informes y estadísticas detalladas de la flotilla 1",
      icon: <Car className="h-6 w-6 text-white" />, 
      color: "bg-blue-500",
      route: "/reports"
    },
    {
      title: "flotilla 2",
      description: "Visualiza informes y estadísticas detalladas de la flotilla 2", 
      icon: <Car className="h-6 w-6 text-white" />,
      color: "bg-green-500",
      route: "/users"
    },
    {
      title: "flotilla 3",
      description: "Visualiza informes y estadísticas detalladas de la flotilla 3",
      icon: <Car className="h-6 w-6 text-white" />,
      color: "bg-purple-500",
      route: "/statistics"
    },
    {
      title: "flotilla 4",
      description: "Visualiza informes y estadísticas detalladas de la flotilla 4",
      icon: <Car className="h-6 w-6 text-white" />,
      color: "bg-orange-500",
      route: "/settings"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
      {cardData.map((card, index) => (
        <DashboardCard 
          key={card.title}
          title={card.title}
          description={card.description}
          icon={card.icon}
          color={card.color}
          route={card.route}
          className="animate-fade-in opacity-0"
          style={{ 
            animationDelay: `${index * 100}ms`, 
            animationFillMode: 'forwards'
          }}
        />
      ))}
    </div>
  );
};

export default Dashboard;
