import { Button } from "@/components/ui/button";
import { Menu, X, Shield } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { supabase } from '../supabaseClient';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState<any>(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
    });

    // Check initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user || null);
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, []);

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error('Error logging out:', error.message);
    } else {
      navigate('/'); // Redirect to home page after logout
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Link to="/" className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-primary">Breaking Circuits</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/" 
              className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`transition-colors ${location.pathname === '/services' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Services
            </Link>
            <Link 
              to="/about" 
              className={`transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              About
            </Link>
            <Link 
              to="/blog" 
              className={`transition-colors ${location.pathname === '/blog' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Blog
            </Link>
            <Link 
              to="/contact" 
              className={`transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
            >
              Contact
            </Link>
            {user ? (
              <Button variant="ghost" onClick={handleLogout} className="text-foreground hover:text-primary">
                Logout
              </Button>
            ) : (
              <Link to="/contact">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Emergency Response
                </Button>
              </Link>
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="flex flex-col space-y-4">
              <Link 
                to="/" 
                className={`transition-colors ${location.pathname === '/' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services" 
                className={`transition-colors ${location.pathname === '/services' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about" 
                className={`transition-colors ${location.pathname === '/about' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/blog" 
                className={`transition-colors ${location.pathname === '/blog' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                to="/contact" 
                className={`transition-colors ${location.pathname === '/contact' ? 'text-primary' : 'text-foreground hover:text-primary'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              {user ? (
                <Button variant="ghost" onClick={handleLogout} className="text-foreground hover:text-primary w-full">
                  Logout
                </Button>
              ) : (
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
                    Emergency Response
                  </Button>
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;