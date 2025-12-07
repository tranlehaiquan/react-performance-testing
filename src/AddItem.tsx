import { useState } from "react";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";

export function AddItem({
  handleClickAdd,
}: {
  handleClickAdd: (n: number) => void;
}) {
  const [value, setValue] = useState(0);

  const presetValues = [
    { amount: 1, label: "Add 1" },
    { amount: 10, label: "Add 10" },
    { amount: 100, label: "Add 100" },
    { amount: 1000, label: "Add 1,000" },
    { amount: 10000, label: "Add 10,000" },
    { amount: 100000, label: "Add 100,000" },
    { amount: 1000000, label: "Add 1,000,000" },
    { amount: 10000000, label: "Add 10,000,000" },
  ];

  return (
    <div className="flex flex-col gap-1 mb-4">
      <div className="flex gap-2 w-full">
        <Input
          value={value}
          onChange={(e) => setValue(Number(e.target.value))}
          type="number"
          className="flex-1"
        />
        <Button
          onClick={() => {
            handleClickAdd(value);
          }}
        >
          Add
        </Button>
      </div>

      <div className="flex flex-wrap gap-1 mt-1">
        {presetValues.map((preset) => (
          <Button
            key={preset.amount}
            variant="outline"
            size="sm"
            onClick={() => handleClickAdd(preset.amount)}
          >
            {preset.label}
          </Button>
        ))}
      </div>
    </div>
  );
}
