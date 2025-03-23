import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { memo } from "react";

export function AlertDemo({ content, title }: { content: string, title?: string }) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>{title || 'Item'}</AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
}

export default memo(AlertDemo);
