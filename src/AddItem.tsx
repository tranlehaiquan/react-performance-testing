import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export function AddItem({ handleClickAdd }: { handleClickAdd: (n: number) => void }) {
  const [value, setValue] = useState(0);

  return (
    <div className="flex gap-2 mb-4">
      <Input value={value} onChange={(e) => setValue(Number(e.target.value))} />
      <Button
        onClick={() => {
          handleClickAdd(value);
        }}
      >
        Add
      </Button>
    </div>
  );
}
