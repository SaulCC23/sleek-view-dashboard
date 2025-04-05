
import React from "react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  return (
    <footer className={cn("w-full py-8 px-6 bg-gray-50 border-t border-gray-100", className)}>
      <div className="container mx-auto">
        <div className="h-16 flex items-center justify-center">
          {/* Espacio para futuro logo con parallax */}
          <div className="relative w-full h-full">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-sm font-medium text-gray-400">Espacio para logo con parallax</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
