
import { Button } from "@/components/ui/button";
import { Play, Menu } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav animate-fade-in">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-dark tracking-tight animate-scale-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              QuikTale
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
            <a 
              href="#features" 
              className="text-medium hover:text-primary transition-all duration-300 hover:scale-105 animate-slide-up stagger-1"
            >
              Features
            </a>
            <a 
              href="#templates" 
              className="text-medium hover:text-primary transition-all duration-300 hover:scale-105 animate-slide-up stagger-2"
            >
              Templates
            </a>
            <a 
              href="#pricing" 
              className="text-medium hover:text-primary transition-all duration-300 hover:scale-105 animate-slide-up stagger-3"
            >
              Pricing
            </a>
            <button className="text-medium hover:text-primary transition-all duration-300 flex items-center gap-2 hover:scale-105 animate-slide-up stagger-4">
              <Play className="w-3 h-3" />
              Demo
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button className="btn-primary text-white font-semibold px-6 h-10 rounded-xl animate-pulse-glow">
            Start Creating
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon"
            className="md:hidden text-dark hover:bg-primary/10 rounded-xl"
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </nav>
  );
};
