import { Terminal } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { memo } from "react";

export function AlertDemo({ content }: { content: string }) {
  return (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>{content}</AlertDescription>
    </Alert>
  );
}

export default memo(AlertDemo);
