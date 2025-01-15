import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Home from "@/pages/Home";
import WhatITreat from "@/pages/WhatITreat";
import FAQ from "@/pages/FAQ";
import Blog from "@/pages/Blog";
import NotFound from "@/pages/not-found";

// For GitHub Pages deployment
const base = import.meta.env.BASE_URL;

function Router() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path={`${base}`} component={Home} />
          <Route path={`${base}what-i-treat`} component={WhatITreat} />
          <Route path={`${base}faq`} component={FAQ} />
          <Route path={`${base}blog`} component={Blog} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;