import { RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FetchSummaryButtonProps {
  loading: boolean;
  onFetch: () => void;
}

export function FetchSummaryButton({ loading, onFetch }: FetchSummaryButtonProps) {
  return (
    <Button
      onClick={onFetch}
      disabled={loading}
      className="gap-2 bg-[#F57E20] hover:bg-[#e76c0f] text-white"
    >
      <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} />
      {loading ? "Loading..." : "Refresh Updates"}
    </Button>
  );
}
