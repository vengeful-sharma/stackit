import { Search, Bell, User, Home, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-primary">StackIt</h1>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                placeholder="Search questions..."
                className="pl-10 w-full"
              />
            </div>
          </div>

          {/* Navigation & User Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex">
              <Home className="h-4 w-4 mr-2" />
              Home
            </Button>
            
            <Button variant="default" size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Ask Question
            </Button>

            <Button variant="ghost" size="icon">
              <Bell className="h-4 w-4" />
            </Button>

            <Button variant="ghost" size="icon">
              <User className="h-4 w-4" />
            </Button>

            <Button variant="outline" size="sm">
              Login
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;