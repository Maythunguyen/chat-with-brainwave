
const baseURL = import.meta.env.VITE_API_URL; 

export async function sendMessage(message) {
    const response = await fetch(`${baseURL}/api/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    });
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
        
    return response.json();
  }