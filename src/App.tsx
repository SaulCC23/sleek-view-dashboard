
import React from "react";
import { Toaster } from "@/components/ui/toast"; // Changed from @/components/ui/toaster
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FlotillaDetail from "./pages/FlotillaDetail";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Index />} />
          <Route path="/reports" element={<FlotillaDetail title="Flotilla 1" />} />
          <Route path="/users" element={<FlotillaDetail title="Flotilla 2" />} />
          <Route path="/statistics" element={<FlotillaDetail title="Flotilla 3" />} />
          <Route path="/settings" element={<FlotillaDetail title="Flotilla 4" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
