
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useChatBot } from "@/hooks/use-chatbot";

export function ChatButton() {
  const { openChat } = useChatBot();

  return (
    <Button
      onClick={openChat}
      className="fixed bottom-6 right-6 rounded-full w-14 h-14 p-0 shadow-lg"
      size="icon"
    >
      <Bot className="h-6 w-6" />
      <span className="sr-only">Open chat</span>
    </Button>
  );
}
