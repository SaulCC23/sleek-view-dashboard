
import React from "react";
import { LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Aquí iría la lógica de cierre de sesión
    console.log("Cerrando sesión...");
    navigate("/");
  };
  
  return (
    <nav className={cn("w-full py-4 px-6 flex items-center justify-between bg-white shadow-sm", className)}>
      <div className="w-24">
        {/* Spacer para mantener el logo centrado */}
      </div>
      
      <div className="flex items-center justify-center">
        <div className="h-10 w-40 bg-gray-100 rounded flex items-center justify-center transition-all duration-300 hover:bg-gray-200">
          <span className="font-medium text-gray-700">LOGO</span>
        </div>
      </div>
      
      <div className="w-24 flex justify-end">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={handleLogout}
          className="hover:bg-gray-100 transition-colors duration-300 rounded-full"
        >
          <LogOut className="h-5 w-5 text-gray-700" />
          <span className="sr-only">Salir</span>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
