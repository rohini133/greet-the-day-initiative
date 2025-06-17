
import { Link } from "react-router-dom";

export function HeaderLogo() {
  return (
    <Link to="/" className="flex items-center ml-2">
      <img 
        src="/lovable-uploads/Logos-05-removebg-preview.png" 
        alt="Gurukul Code" 
        className="h-20 w-auto"
      />
    </Link>
  );
}
