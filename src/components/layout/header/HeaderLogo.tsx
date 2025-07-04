
import { Link } from "react-router-dom";

export function HeaderLogo() {
  return (
    <Link to="/" className="flex items-center ml-2">
      <img 
        src="/lovable-uploads/c5f11254-60e9-415a-9b65-d1a086e6be9d.png" 
        alt="Gurukul Code" 
        className="h-20 w-auto"
      />
    </Link>
  );
}
