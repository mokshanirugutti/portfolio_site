import { CheckIcon, ChevronRightIcon } from "lucide-react";

import { AnimatedSubscribeButton } from "@/components/ui/animated-subscribe-button";

// Define the props interface
interface SendEmailButtonProps {
  status: "idle" | "sending" | "sent" | "failed"; // Define possible status values
  onClick: () => void; // Define onClick as a function
}

export function SendEmailButton({ status, onClick }: SendEmailButtonProps) { // Use the defined props interface
  const getButtonText = () => {
    switch (status) {
      case "sending":
        return "Sending...";
      case "sent":
        return (
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 size-4" />
            Email Sent
          </span>
        );
      case "failed":
        return "Failed to Send";
      default:
        return (
          <span className="group inline-flex items-center">
            Send Email{" "}
            <ChevronRightIcon className="ml-1 size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        );
    }
  };

  return (
    <AnimatedSubscribeButton
      buttonColor="#000000"
      buttonTextColor="#ffffff"
      subscribeStatus={status === "sent"}
      initialText={getButtonText()} // Use dynamic text for initial state
      changeText="Resend Email" // Add change text for when the email is sent
      onClick={onClick} // Attach click handler
    />
  );
}
