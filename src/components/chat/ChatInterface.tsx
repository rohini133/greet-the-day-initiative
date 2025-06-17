
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useChatBot } from "@/hooks/use-chatbot";
import { X, Send } from "lucide-react";

type Message = {
  id: string;
  content: string;
  isBot: boolean;
};

const botResponses = [
  "Welcome to Gurukul Code! How can I assist you today?",
  "We offer personalized career guidance and AI-driven insights.",
  "Our platform combines traditional mentorship with modern learning methods.",
  "You can explore our Career Awareness and Career Path Exploration services.",
  "We have experts available for personalized mentorship sessions.",
  "Would you like to know more about our AI Assessment tools?",
  "Our Career Preparation resources can help you develop practical skills.",
  "Feel free to ask any questions about our services!",
];

export function ChatInterface() {
  const { isOpen, closeChat } = useChatBot();
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! How can I help you with your career journey?",
      isBot: true,
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = {
      id: Date.now().toString(),
      content: input,
      isBot: false,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate bot response after a delay
    setTimeout(() => {
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      const botMessage = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        isBot: true,
      };

      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 w-80 md:w-96 bg-background rounded-lg shadow-xl border z-50 flex flex-col h-[500px] max-h-[80vh]">
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Gurukul Assistant</h3>
        <Button variant="ghost" size="icon" onClick={closeChat}>
          <X className="h-4 w-4" />
        </Button>
      </div>

      <ScrollArea className="flex-grow p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-2 rounded-lg ${
                  message.isBot
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-primary text-primary-foreground"
                }`}
              >
                {message.content}
              </div>
            </div>
          ))}
          {isTyping && (
            <div className="flex justify-start">
              <div className="max-w-[80%] px-4 py-2 rounded-lg bg-secondary text-secondary-foreground">
                <span className="inline-block animate-pulse">...</span>
              </div>
            </div>
          )}
          <div ref={bottomRef} />
        </div>
      </ScrollArea>

      <div className="p-4 border-t">
        <div className="flex gap-2">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type your message..."
            className="flex-grow"
          />
          <Button size="icon" onClick={handleSendMessage} disabled={!input.trim()}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
