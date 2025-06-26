
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebase";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Firebase Sign In
      await signInWithEmailAndPassword(auth, email, password);

      toast({
        title: "Login successful",
        description: "Welcome back!",
      });

      // Reset form and loading
      setEmail("");
      setPassword("");
      setIsLoading(false);
      
      // Force navigation to home page
      window.location.href = "/";
    } catch (error: unknown) {
      setIsLoading(false);
      let errorMessage = "An unexpected error occurred.";

      if (error instanceof Error) {
        errorMessage = error.message; // Get error message safely
      }

      toast({
        title: "Login failed",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };

  return (
    <div className="flex min-h-[calc(100vh-12rem)] items-center justify-center px-4 pt-32 py-12">
      <div className="w-full max-w-md">
        <Button variant="ghost" className="mb-6 items-center justify-center"  onClick={() => navigate("/")}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
        </Button>

        <Card className="border-border/40 shadow-lg">
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-bold">Welcome back</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>

          <form onSubmit={handleSubmit}>
            <CardContent className="space-y-4">
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
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
            </CardContent>

            <CardFooter className="flex flex-col space-y-4">
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign in"}
              </Button>

              <div className="text-center text-sm">
                Don't have an account?{" "}
                <a
                  onClick={() => navigate("/signup")}
                  className="font-medium text-primary underline-offset-4 hover:underline cursor-pointer"
                >
                  Sign up
                </a>
              </div>
            </CardFooter>
          </form>
        </Card>
      </div>
    </div>
  );
}
