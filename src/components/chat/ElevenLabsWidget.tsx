import React, { useEffect, useState, useCallback, useRef } from "react";
import { VoiceAnimation } from "./VoiceAnimation";
import { Loader2 } from "lucide-react";
import { WidgetLoader } from "./WidgetLoader";
import { WidgetError } from "./WidgetError";
import { SpeakingIndicator } from "./SpeakingIndicator";
import { Conversation } from "@11labs/client"; // Import the Conversation class
import { PostCallEngagement } from "./PostCallEngagement"; // Import PostCallEngagement
import { FaPhone, FaPhoneSlash } from "react-icons/fa"; // Import icons

// Local JSX type declaration
declare module "react" {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
    }
  }
}

interface ElevenLabsWidgetProps {
  skipPaywall?: boolean;
}

export function ElevenLabsWidget({ skipPaywall = false }: ElevenLabsWidgetProps) {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [connectionStatus, setConnectionStatus] = useState("Disconnected");
  const [agentStatus, setAgentStatus] = useState("Idle");
  const [showPostCall, setShowPostCall] = useState(false); // State to control PostCallEngagement visibility

  const conversationRef = useRef<Conversation | null>(null); // Ref for the conversation instance

  const loadScript = useCallback(() => {
    if (customElements.get("elevenlabs-convai")) {
      // Custom element already defined, skip loading script
      setIsLoading(false);
      setError(null);
      return null;
    }

    const existingScript = document.querySelector(
      'script[src="https://elevenlabs.io/convai-widget/index.js"]'
    );
    if (existingScript) {
      document.body.removeChild(existingScript);
    }

    const script = document.createElement("script");
    script.src = "https://elevenlabs.io/convai-widget/index.js";
    script.async = true;

    script.onload = () => {
      setIsLoading(false);
      setError(null);
    };

    script.onerror = () => {
      setIsLoading(false);
      setError("Failed to load Santa's communication module. Please try refreshing the page.");
    };

    document.body.appendChild(script);
    return script;
  }, []);

  const startConversation = async () => {
    try {
      // Request microphone permission
      await navigator.mediaDevices.getUserMedia({ audio: true });

      console.log("Attempting to start the conversation...");

      // Start the conversation
      const conversation = await Conversation.startSession({
        agentId: "HIKMybnhQi2KD0DfCTQs", // Replace with your agent ID
        onConnect: () => {
          console.log("Conversation started.");
          setConnectionStatus("Connected");
          setShowPostCall(false); // Hide PostCallEngagement when a new conversation starts
        },
        onDisconnect: () => {
          console.log("Conversation stopped.");
          setConnectionStatus("Disconnected");
          setShowPostCall(true); // Show PostCallEngagement when the conversation stops
        },
        onError: (error) => {
          console.error("Error:", error);
        },
        onModeChange: (mode) => {
          console.log(`Agent is now ${mode.mode === "speaking" ? "Speaking" : "Listening"}`);
          setAgentStatus(mode.mode === "speaking" ? "Speaking" : "Listening");
        },
      });

      conversationRef.current = conversation;
    } catch (error) {
      console.error("Failed to start conversation:", error);
    }
  };

  const stopConversation = async () => {
    if (conversationRef.current) {
      console.log("Stopping the conversation...");
      await conversationRef.current.endSession();
      conversationRef.current = null;
      setConnectionStatus("Disconnected");
      setAgentStatus("Idle");
      setShowPostCall(true); // Show PostCallEngagement when manually stopped
    }
  };

  const toggleConversation = async () => {
    if (connectionStatus === "Disconnected") {
      await startConversation();
    } else {
      await stopConversation();
    }
  };

  useEffect(() => {
    const script = loadScript();

    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [loadScript]);

  return (
    <div className="relative h-full  flex items-center justify-center" role="region" aria-label="Santa's Chat Interface">
      <VoiceAnimation isActive={isSpeaking} />
  
      <div
        className="relative w-full h-full min-h-[400px]  flex items-center justify-center rounded-xl overflow-hidden bg-white/5 border-2 border-red-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/30"
        role="application"
        aria-busy={isLoading}
      >
        {isLoading && <WidgetLoader />}
        {error && <WidgetError error={error} onRetry={loadScript} />}
        {isSpeaking && <SpeakingIndicator />}
        {showPostCall && <PostCallEngagement onClose={() => setShowPostCall(false)} />}
  
        <div className="mt-4 flex flex-col items-center">
          <div
            className="relative flex items-center p-4 rounded-full bg-white shadow-md"
            style={{
              width: "300px",
              background: "linear-gradient(to right, #ffffff, #f0f0f0)",
              boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
            }}
          >
            <img
              src="src/assets/image-3_720.jpg" // Updated image path
              alt="Santa"
              className="w-20 h-20 rounded-full mr-4"
            />
            <div className="flex flex-col items-start">
              <p className="text-sm text-gray-600">
                {connectionStatus === "Disconnected" ? "Incoming Call: North Pole" : "Talk to interrupt"}
              </p>
              <button
                onClick={toggleConversation}
                className={`mt-1 px-4 py-2 rounded-full ${
                  connectionStatus === "Disconnected"
                    ? "bg-black text-white" // For "Ring, Ring. It's Santa!"
                    : "bg-white border border-gray-300 text-black" // For "Bye Santa!"
                }`}
                style={{
                  fontSize: "14px",
                  fontWeight: "bold",
                }}
              >
                {connectionStatus === "Disconnected" ? (
                  <>
                    <FaPhone className="inline mr-2" />
                    Ring, Ring. It's Santa!
                  </>
                ) : (
                  <>
                    <FaPhoneSlash className="inline mr-2" />
                    Bye Santa!
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}