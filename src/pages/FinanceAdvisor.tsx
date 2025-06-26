
import { AIAgentPlaceholder } from "@/components/ai/AIAgentPlaceholder";
import { LineChart } from "lucide-react";

export default function FinanceAdvisor() {
  return (
    <AIAgentPlaceholder
      title="Finance Advisor Agent"
      description="Receive financial advice, market analysis, investment strategies, and personal finance management tips."
      icon={<LineChart className="h-10 w-10 text-primary" />}
    />
  );
}
