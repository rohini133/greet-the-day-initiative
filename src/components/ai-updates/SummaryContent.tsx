
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Calendar, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { NewsItem } from "@/types/aiUpdates";
import { Separator } from "@/components/ui/separator";

interface SummaryContentProps {
  newsItems?: Array<NewsItem> | null;
}

export function SummaryContent({ newsItems = [] }: SummaryContentProps) {
  if (!newsItems?.length) {
    return null;
  }

  // Format the summary text by replacing markdown elements with HTML
  const formatSummary = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // Bold text
      .replace(/\*(.*?)\*/g, '<em>$1</em>')             // Italic text
      .replace(/\n\n/g, '<br/><br/>')                   // Paragraphs
      .replace(/\n(\d+\. )/g, '<br/>$1')                // Numbered lists
      .split('\n');
  };

  return (
    <div className="space-y-8 font-sans mt-32 ">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2 text-primary
         " >
  AI Daily Update
</h1>

        {newsItems[0]?.date && (
          <div className="flex items-center justify-center gap-2">
            <Calendar className="h-4 w-4 text-muted-foreground" />
            <span className="text-lg text-muted-foreground">
              {newsItems[0].date}
            </span>
          </div>
        )}
      </div>
      
      <div className="grid grid-cols-1 gap-10">
        {newsItems.map((item, index) => {
          const formattedSummary = formatSummary(item.summary);
          
          return (
            <Card key={index} className="bg-card shadow-md border-t-4 border-t-primary hover:shadow-lg transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start gap-2">
                  <CardTitle className="text-xl leading-tight">
                    {item.title || `AI News Update`}
                  </CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="prose prose-sm max-w-none">
                  {formattedSummary.map((paragraph, i) => {
                    // Make the first paragraph (title) bold and larger
                    if (i === 0) {
                      return (
                        <div 
                          key={i} 
                          className="text-lg font-bold text-foreground mb-4"
                          dangerouslySetInnerHTML={{ __html: paragraph }}
                        />
                      );
                    }
                    
                    // Display the last paragraph with a "Read more" link
                    if (i === formattedSummary.length - 1) {
                      return (
                        <div key={i} className="mt-4">
                          <div 
                            className="text-sm text-foreground mb-3"
                            dangerouslySetInnerHTML={{ __html: paragraph }}
                          />
                          <div className="flex justify-end mt-2">
                            <a 
                              href="#" 
                              className="flex items-center gap-1 text-sm text-primary hover:underline"
                              onClick={(e) => e.preventDefault()}
                            >
                              Read more <ExternalLink size={14} />
                            </a>
                          </div>
                        </div>
                      );
                    }
                    
                    // Regular paragraphs
                    return (
                      <div 
                        key={i} 
                        className="text-sm text-foreground mb-3"
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    );
                  })}
                </div>
                
                {/* Add separator between items if not the last item */}
                {index < newsItems.length - 1 && (
                  <div className="mt-6">
                    <Separator className="w-full opacity-50" />
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
