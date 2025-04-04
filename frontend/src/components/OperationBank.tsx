import { Button } from "@/components/ui/button";
import { Operation } from "../types";
import { cn } from "@/lib/utils"; //this enables conditional tailwind class rendering

interface OperationBankProps {
  onAdd: (operation: Operation) => void;
}

const operations: Operation[] = [
  { label: "Add", symbol: "+", operation: "add" },
  { label: "Subtract", symbol: "−", operation: "subtract" },
  { label: "Multiply", symbol: "×", operation: "multiply" },
  { label: "Divide", symbol: "÷", operation: "divide" },
];

const OperationBank = ({ onAdd }: OperationBankProps) => (
  <div className={cn("flex flex-col gap-2")}>
    {operations.map((op: Operation) => (
      <Button
        key={op.label}
        variant="outline"
        className="w-full px-6 py-8 justify-between items-center hover:bg-green-100/50"
        onClick={() => onAdd(op)}
      >
        <div className="text-left">
          <p className="font-medium">{op.label}</p>
        </div>
        <span className="text-xl font-bold">{op.symbol}</span>
      </Button>
    ))}
  </div>
);

export default OperationBank;
