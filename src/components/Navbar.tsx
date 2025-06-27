
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="text-2xl font-bold text-foreground tracking-tight">
            QuikTale
          </div>
          
          <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </a>
            <a href="#templates" className="text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </a>
            <button className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
              <Play className="w-3 h-3" />
              Demo
            </button>
          </div>
        </div>
        
        <Button className="btn-primary text-white font-medium px-6 h-9 rounded-lg">
          Start Creating
        </Button>
      </div>
    </nav>
  );
};
