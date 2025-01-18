import { Switch, Route, Router as BaseRouter } from "wouter";
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

// Use a constant for the base URL
const BASE_URL = '/web';

// Custom router for handling the base path
function Router() {
  return (
    <BaseRouter base={BASE_URL}>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/what-i-treat" component={WhatITreat} />
            <Route path="/faq" component={FAQ} />
            <Route path="/blog" component={Blog} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BaseRouter>
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