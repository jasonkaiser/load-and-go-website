import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const RouteTransitionLoader = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    setLoading(true);


    const timeout = setTimeout(() => {
      setLoading(false);
    }, 400);


    return () => clearTimeout(timeout);
  }, [location.pathname]);

  if (!loading) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      style={{ backgroundColor: "white", opacity: 0.95 }}
    >
   
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );
};

export default RouteTransitionLoader;
