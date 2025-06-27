import { Button } from "@/components/ui/button";
import { Play, Video, Menu, X } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 nav-glass">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-primary via-purple-500 to-accent rounded-2xl flex items-center justify-center shadow-xl border-2 border-white/20">
              <Video className="w-6 h-6 text-white" />
            </div>
            <div className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
              QuikTale
            </div>
          </div>
          
          <div className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a href="#features" className="text-slate-700 hover:text-primary-contrast transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-50">
              Features
            </a>
            <a href="#templates" className="text-slate-700 hover:text-primary-contrast transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-50">
              Templates
            </a>
            <a href="#pricing" className="text-slate-700 hover:text-primary-contrast transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-slate-50">
              Pricing
            </a>
            <button className="text-slate-700 hover:text-primary-contrast transition-colors duration-200 flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-50">
              <Play className="w-4 h-4" />
              Demo
            </button>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button className="btn-primary text-white font-semibold px-8 h-12 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all duration-300">
            Start Creating
          </Button>
          
          <button 
            className="lg:hidden p-2 text-slate-700 hover:text-primary-contrast transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-slate-200 shadow-lg">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a href="#features" className="block text-slate-700 hover:text-primary-contrast transition-colors py-2">
              Features
            </a>
            <a href="#templates" className="block text-slate-700 hover:text-primary-contrast transition-colors py-2">
              Templates
            </a>
            <a href="#pricing" className="block text-slate-700 hover:text-primary-contrast transition-colors py-2">
              Pricing
            </a>
            <button className="flex items-center gap-2 text-slate-700 hover:text-primary-contrast transition-colors py-2">
              <Play className="w-4 h-4" />
              Demo
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};