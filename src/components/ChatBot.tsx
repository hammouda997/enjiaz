
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  content: string;
  type: 'user' | 'bot';
}

export const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([{
    type: 'bot',
    content: 'Hello! I\'m here to help you learn more about our services. How can I assist you today?'
  }]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;
    
    setMessages(prev => [...prev, { type: 'user', content: input }]);
    setInput('');
    setIsLoading(true);
    
    // Simulate bot response - Replace with actual chatbot integration
    setTimeout(() => {
      setMessages(prev => [...prev, {
        type: 'bot',
        content: "Thank you for your message. One of our representatives will get back to you shortly. In the meantime, feel free to check our services or contact us directly at info@enjaz-ds.com"
      }]);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 right-4 rounded-full h-12 w-12 p-0"
        >
          <MessageCircle size={24} />
        </Button>
      )}

      <div className={cn(
        "fixed bottom-4 right-4 w-[380px] bg-white rounded-lg shadow-lg transition-all duration-200 ease-in-out",
        isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      )}>
        <div className="p-4 border-b flex justify-between items-center">
          <h3 className="font-semibold">Enjaz Assistant</h3>
          <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)}>
            <X size={18} />
          </Button>
        </div>

        <ScrollArea className="h-[400px] p-4">
          <div className="space-y-4">
            {messages.map((message, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[80%] p-3 rounded-lg",
                  message.type === 'user' 
                    ? "bg-enjaz text-white ml-auto" 
                    : "bg-gray-100 text-gray-800"
                )}
              >
                {message.content}
              </div>
            ))}
            {isLoading && (
              <div className="bg-gray-100 text-gray-800 max-w-[80%] p-3 rounded-lg">
                <Loader2 className="h-4 w-4 animate-spin" />
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex gap-2"
          >
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" size="icon">
              <Send size={18} />
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
