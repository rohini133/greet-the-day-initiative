
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase"; 
import { setDoc, doc, getDoc } from "firebase/firestore";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isOffline, setIsOffline] = useState(!navigator.onLine);
  const { toast } = useToast();
  const navigate = useNavigate();

  // Check online status
  useEffect(() => {
    const handleOnlineStatusChange = () => {
      setIsOffline(!navigator.onLine);
    };

    window.addEventListener('online', handleOnlineStatusChange);
    window.addEventListener('offline', handleOnlineStatusChange);

    return () => {
      window.removeEventListener('online', handleOnlineStatusChange);
      window.removeEventListener('offline', handleOnlineStatusChange);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if offline
    if (isOffline) {
      toast({
        title: "No internet connection",
        description: "Please check your internet connection and try again.",
        variant: "destructive",
      });
      return;
    }
    
    setIsLoading(true);

    try {
      // Check if email already exists in Firestore
      const userQuery = await getDoc(doc(db, "users", `email_${email.toLowerCase()}`));
      
      if (userQuery.exists()) {
        toast({
          title: "Email already in use",
          description: "Please use a different email address.",
          variant: "destructive",
        });
        setIsLoading(false);
        return;
      }

      // Create user with Firebase Authentication
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        email,
        uid: user.uid,
        createdAt: new Date().toISOString(),
      });

      // Also create an email reference document to check for duplicate emails
      await setDoc(doc(db, "users", `email_${email.toLowerCase()}`), {
        uid: user.uid,
        email: email.toLowerCase(),
      });

      toast({
        title: "Account created",
        description: "Welcome to Gurukul Code!",
      });

      // Clear form
      setName("");
      setEmail("");
      setPassword("");
      
      // Reset loading state before navigating
      setIsLoading(false);
      
      // Force navigation to home page
      window.location.href = "/";
    } catch (error: any) {
      console.error("Signup Error:", error);
      
      // Handle Firebase auth errors
      let errorMessage = error.message;
      if (error.code === "auth/email-already-in-use") {
        errorMessage = "This email is already in use. Please try another one.";
      }
      
      toast({
        title: "Signup failed",
        description: errorMessage,
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Button 
          variant="ghost" 
          className="mb-6" 
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Button>
        
        <Card className="border-border/40 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
            <CardDescription>
              Enter your information to create your Gurukul Code account
            </CardDescription>
          </CardHeader>
          
          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
              {isOffline && (
                <div className="bg-destructive/15 text-destructive p-3 rounded-md text-sm mb-4">
                  You appear to be offline. Please check your internet connection to create an account.
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  minLength={6}
                />
              </div>
            </CardContent>
            
            <CardFooter className="flex flex-col space-y-4">
              <Button 
                type="submit" 
                className="w-full" 
                disabled={isLoading || isOffline}
              >
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
              
              <div className="text-center text-sm">
                Already have an account?{" "}
                <a
                  onClick={() => navigate("/login")}
                  className="font-medium text-primary underline-offset-4 hover:underline cursor-pointer"
                >
                  Sign in
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
