import { useEffect, useState } from "react";
import { AIUpdatesHeader } from "@/components/ai-updates/AIUpdatesHeader";
import { FetchSummaryButton } from "@/components/ai-updates/FetchSummaryButton";
import { SummaryContent } from "@/components/ai-updates/SummaryContent";
import { LoadingState } from "@/components/ai-updates/LoadingState";
import { ErrorState } from "@/components/ai-updates/ErrorState";
import { EmptyState } from "@/components/ai-updates/EmptyState";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { sampleNewsItems } from "@/config/aiUpdates";
import { fetchNewsFromFirebase } from "@/services/firebaseService";
import { NewsItem } from "@/types/aiUpdates";

export default function AIUpdates() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [newsItems, setNewsItems] = useState<NewsItem[] | null>(null);
  const [useSampleData, setUseSampleData] = useState<boolean>(false);
  const { toast } = useToast();

  const fetchNews = async () => {
    setLoading(true);
    setError(null);
    setUseSampleData(false);
    
    try {
      const news = await fetchNewsFromFirebase();
      setNewsItems(news);
      
      if (news.length === 0) {
        toast({
          title: "No News Found",
          description: "No AI news found in the database. Try adding some data or using sample data.",
        });
      } else {
        toast({
          title: "News Updated",
          description: `Successfully loaded ${news.length} AI news items from Firebase.`,
        });
      }
    } catch (err) {
      console.error("Firebase fetch error:", err);
      const errorMessage = err instanceof Error ? err.message : "An unknown error occurred";
      
      setError(errorMessage);
      
      toast({
        title: "Error",
        description: `Failed to fetch AI updates: ${errorMessage}`,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
    
    toast({
      title: "Fetching AI News",
      description: "Loading the latest AI updates from Firebase...",
    });
  }, []);

  const handleShowSampleData = () => {
    setUseSampleData(true);
    setError(null);
    
    toast({
      title: "Sample Data Loaded",
      description: "Showing sample AI news for demonstration purposes.",
    });
  };

  return (
    <div className="bg-[#0F1026] min-h-screen py-12">
      <div className="container mx-auto px-4">
        {/* <AIUpdatesHeader /> */}

        <div className="flex justify-between mb-6">
          <div>
            {(error || (newsItems && newsItems.length === 0)) && !useSampleData && (
              <Button
                variant="secondary"
                onClick={handleShowSampleData}
                className="mr-2 bg-[#F57E20] hover:bg-[#e76c0f] text-white"
              >
                Show Sample Data
              </Button>
            )}
          </div>
          {/* <FetchSummaryButton loading={loading} onFetch={fetchNews} /> */}
        </div>

        <div className="space-y-8">
          {loading ? (
            <LoadingState />
          ) : error && !useSampleData ? (
            <ErrorState error={error} onRetry={fetchNews} />
          ) : (useSampleData ? sampleNewsItems : newsItems && newsItems.length > 0) ? (
            <SummaryContent newsItems={useSampleData ? sampleNewsItems : newsItems} />
          ) : (
            <EmptyState onRefresh={fetchNews} />
          )}
        </div>
      </div>
    </div>
  );
}
