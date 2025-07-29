import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);

      if (!user) {
        navigate('/login', { replace: true });
      }
    };

    checkUser();

    const { data: authListener } = supabase.auth.onAuthStateChange((_, session) => {
      setUser(session?.user || null);
      if (!session?.user) {
        navigate('/login', { replace: true });
      }
    });

    return () => {
      authListener?.unsubscribe();
    };
  }, [navigate]);

  if (loading) {
    // You can render a loading spinner or a placeholder here
    return <div>Loading...</div>;
  }

  return user ? children : null;
};

export default ProtectedRoute;