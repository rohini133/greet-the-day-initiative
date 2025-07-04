
import { Link } from "react-router-dom";

export function HeaderLogo() {
  return (
    <Link to="/" className="flex items-center ml-2">
      <img 
        src="/lovable-uploads/2476bb26-0e27-4636-9c00-c933b231c9c3.png" 
        alt="Gurukul Code" 
        className="h-20 w-auto"
      />
    </Link>
  );
}
