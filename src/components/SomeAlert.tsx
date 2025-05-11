import { Terminal, PencilIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { memo, useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "./ui/input";

type Props = {
  id: number;
  content: string;
  title?: string;
  onUpdate?: ({
    id,
    content,
    title,
  }: {
    id?: number;
    content: string;
    title: string;
  }) => void;
};

function UpdateDialog({
  isOpen,
  onOpenChange,
  initialData,
  onSubmit,
}: {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
  initialData: { title: string; content: string };
  onSubmit: (data: { title: string; content: string }) => void;
}) {
  const [formData, setFormData] = useState(initialData);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Alert</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="title" className="text-sm font-medium">
              Title
            </label>
            <Input
              id="title"
              value={formData.title}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, title: e.target.value }))
              }
              placeholder="Enter title"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="content" className="text-sm font-medium">
              Content
            </label>
            <Input
              id="content"
              value={formData.content}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, content: e.target.value }))
              }
              placeholder="Enter content"
              required
            />
          </div>
          <DialogFooter>
            <Button type="submit">Update</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function AlertDemo({ content, title, id, onUpdate }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleUpdate = (data: { title: string; content: string }) => {
    onUpdate?.({
      id,
      content: data.content,
      title: data.title || "Item",
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>{title || "Item"}</AlertTitle>
        <AlertDescription>{content}</AlertDescription>
        {onUpdate && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={() => setIsOpen(true)}
          >
            <PencilIcon className="h-4 w-4" />
          </Button>
        )}
      </Alert>

      <UpdateDialog
        isOpen={isOpen}
        onOpenChange={setIsOpen}
        initialData={{
          title: title || "",
          content: content,
        }}
        onSubmit={handleUpdate}
      />
    </div>
  );
}

export default memo(AlertDemo);
