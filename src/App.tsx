import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import Index from "./pages/Index";

const Consultar = lazy(() => import("./pages/Consultar"));
const Consulta = lazy(() => import("./pages/Resultado"));
const Relatorio = lazy(() => import("./pages/Relatorio"));
const RemocaoDeDados = lazy(() => import("./pages/RemocaoDeDados"));
const Termos = lazy(() => import("./pages/Termos"));
const Privacidade = lazy(() => import("./pages/Privacidade"));
const SobreNos = lazy(() => import("./pages/SobreNos"));
const Reembolso = lazy(() => import("./pages/Reembolso"));
const Contato = lazy(() => import("./pages/Contato"));
const FAQPage = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const LogoPreview = lazy(() => import("./pages/LogoPreview"));
const Mockups = lazy(() => import("./pages/Mockups"));
const MockupsV2 = lazy(() => import("./pages/MockupsV2"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const RouteFallback = () => (
  <div className="flex-1 min-h-[calc(100vh-200px)] flex items-center justify-center" />
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <Suspense fallback={<RouteFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/consultar" element={<Consultar />} />
              <Route path="/consulta" element={<Consulta />} />
              <Route path="/relatorio" element={<Relatorio />} />
              <Route path="/remocao-de-dados" element={<RemocaoDeDados />} />
              <Route path="/termos-de-uso" element={<Termos />} />
              <Route path="/politica-de-privacidade" element={<Privacidade />} />
              <Route path="/politica-de-reembolso" element={<Reembolso />} />
              <Route path="/sobre" element={<SobreNos />} />
              <Route path="/contato" element={<Contato />} />
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/logo-preview" element={<LogoPreview />} />
              <Route path="/mockups" element={<Mockups />} />
              <Route path="/mockups-v2" element={<MockupsV2 />} />

              {/* Redirects 301 das rotas antigas */}
              <Route path="/termos" element={<Navigate to="/termos-de-uso" replace />} />
              <Route path="/privacidade" element={<Navigate to="/politica-de-privacidade" replace />} />
              <Route path="/reembolso" element={<Navigate to="/politica-de-reembolso" replace />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
