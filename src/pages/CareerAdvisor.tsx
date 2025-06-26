
import { AIAgentPlaceholder } from "@/components/ai/AIAgentPlaceholder";
import { Briefcase } from "lucide-react";

export default function CareerAdvisor() {
  return (
    <AIAgentPlaceholder
      title="Career Advisor Agent"
      description="Get career guidance, job search assistance, resume tips, interview preparation, and professional development advice."
      icon={<Briefcase className="h-10 w-10 text-primary" />}
    />
  );
}
