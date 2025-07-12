
import { useState, useRef, useEffect } from "react";
import { sendMessage } from "../api/chatApi";
import { PlaceholdersAndVanishInput } from "../components/ui/PlaceholdersAndVanishInput";

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const chatContainerRef = useRef(null);

  const placeholders = [
    "What's in your mind today?",
    "Feel free to share your thoughts",
    "How's it going mate?",
    "What are you curious about?",
    "Need help with something?",
    "Ask me anything!",
  ];

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const value = e.target.querySelector("input")?.value?.trim();
    if (!value) return;
  
    // 1. Show user's message immediately
    setMessages((prev) => [...prev, { role: "user", content: value }]);
  
    try {
      // 2. Send the message to the API
      const response = await sendMessage(value);
  
      // 3. Then append the AI's response
      setMessages((prev) => [...prev, { role: "assistant", content: response.reply }]);
    } catch (err) {
      console.error("Error sending message", err);
      setMessages((prev) => [...prev, { role: "assistant", content: "⚠️ Failed to get response." }]);
    }
  };

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);
  return (
    <div className="relative min-h-screen flex flex-col bg-black-100 text-white">
      <div className="flex-1 overflow-y-auto px-6 pt-6 pb-32" ref={chatContainerRef}>
        <h2 className="mb-10 sm:mb-20 text-xl text-center sm:text-5xl">Ask <span className="text-fuchsia-600">BrainWave </span> Anything</h2>
        <div className="space-y-2 max-w-2xl mx-auto">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg backdrop-blur-md ${
                msg.role === "user"
                  ? "bg-white/10 border border-neutral-600 text-right"
                  : "bg-white/10 border border-neutral-600 text-left"
              }`}
            >
              <p>{msg.content}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Fixed input bar at bottom */}
      <div className="fixed bottom-0 left-0 w-full bg-black/80 backdrop-blur z-50 px-4 py-4">
        <div className="max-w-2xl mx-auto">
          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={handleSubmit}
          />
        </div>
      </div>
    </div>

    
  );
};

export default ChatPage;
