import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomeSection from "./components/HomeSection";
import AboutSectionPage from "./components/AboutSectionPage";
import ContactSection from "./components/ContactSection";
import CrewSection from "./components/CrewSection";
import EventsSectionWrapper from "./components/EventsSectionWrapper";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomeSection />} />
            <Route path="/about" element={<AboutSectionPage />} />
            <Route path="/events" element={<EventsSectionWrapper isActive={true} />} />
            <Route path="/crew" element={<CrewSection />} />
            <Route path="/contact" element={<ContactSection />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
