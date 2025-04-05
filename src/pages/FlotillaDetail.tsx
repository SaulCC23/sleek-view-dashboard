
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { BarChart3 } from "lucide-react";

interface FlotillaDetailProps {
  title: string;
}

const FlotillaDetail: React.FC<FlotillaDetailProps> = ({ title }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2 animate-fade-in" 
              style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
            {title}
          </h1>
          <p className="text-gray-500 mb-6 animate-fade-in opacity-0"
             style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
            Visualiza informes y estadísticas detalladas de la flotilla
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Primera fila de gráficas (2x3) */}
          {[...Array(6)].map((_, index) => (
            <Card key={index} className="shadow-sm animate-fade-in opacity-0"
                  style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-500" />
                  Gráfica {index + 1}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <AspectRatio ratio={16/10} className="bg-gray-100 rounded-md flex items-center justify-center">
                  <div className="text-gray-400 text-sm flex flex-col items-center">
                    <BarChart3 className="h-8 w-8 mb-2 text-gray-300" />
                    <p>Gráfica generada por Python</p>
                    <p className="text-xs">Espacio reservado</p>
                  </div>
                </AspectRatio>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Gráfica grande inferior */}
        <Card className="shadow-sm mb-8 animate-fade-in opacity-0"
              style={{ animationDelay: '900ms', animationFillMode: 'forwards' }}>
          <CardHeader className="pb-2">
            <CardTitle className="text-xl font-medium flex items-center gap-2">
              <BarChart3 className="h-5 w-5 text-blue-500" />
              Gráfica Principal
            </CardTitle>
          </CardHeader>
          <CardContent>
            <AspectRatio ratio={21/9} className="bg-gray-100 rounded-md flex items-center justify-center">
              <div className="text-gray-400 text-sm flex flex-col items-center">
                <BarChart3 className="h-12 w-12 mb-3 text-gray-300" />
                <p>Gráfica principal generada por Python</p>
                <p className="text-xs">Espacio reservado</p>
              </div>
            </AspectRatio>
          </CardContent>
        </Card>
      </main>
      
      <Footer />
    </div>
  );
};

export default FlotillaDetail;
