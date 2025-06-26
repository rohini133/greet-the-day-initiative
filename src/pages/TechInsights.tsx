
import { AIAgentPlaceholder } from "@/components/ai/AIAgentPlaceholder";
import { Code } from "lucide-react";

export default function TechInsights() {
  return (
    <AIAgentPlaceholder
      title="Tech Insights Agent"
      description="Get expert insights on technology trends, programming languages, software development, and tech industry news."
      icon={<Code className="h-10 w-10 text-primary" />}
    />
  );
}
