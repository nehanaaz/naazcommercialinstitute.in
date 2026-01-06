import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { useCallback } from "react";

interface BlogShareProps {
  title: string;
  description: string;
}

export function BlogShare({ title, description }: BlogShareProps) {
  const onShare = useCallback(async () => {
    if (!navigator.share) {
      console.log("Web Share API not supported");
      return;
    }

    const share = {
      title,
      text: description,
      url: window.location.href,
    };
    try {
      await navigator.share(share);
    } catch (exception) {
      console.log("Share API Error", exception);
    }
  }, []);
  return (
    <Button
      variant="outline"
      size="sm"
      className="cursor-pointer gap-2 bg-transparent"
      onClick={onShare}
    >
      <Share2 className="size-4" />
      Share
    </Button>
  );
}
