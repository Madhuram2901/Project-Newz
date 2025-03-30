
import React from 'react';
import { IndianState, indianStates } from '@/data/statesList';
import { Check } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';

type StateSelectorProps = {
  selectedState: string;
  onStateChange: (stateId: string) => void;
};

const StateSelector: React.FC<StateSelectorProps> = ({ selectedState, onStateChange }) => {
  const selectedStateName = indianStates.find(state => state.id === selectedState)?.name || "Select State";

  return (
    <div className="w-full md:w-72">
      <Select value={selectedState} onValueChange={onStateChange}>
        <SelectTrigger className="w-full bg-white border border-gray-300 focus:ring-indian-navy">
          <SelectValue placeholder="Select State" />
        </SelectTrigger>
        <SelectContent>
          <ScrollArea className="h-72">
            {indianStates.map((state) => (
              <SelectItem key={state.id} value={state.id} className="cursor-pointer">
                <div className="flex items-center justify-between">
                  <span>{state.name}</span>
                  {selectedState === state.id && (
                    <Check className="h-4 w-4 text-indian-green" />
                  )}
                </div>
              </SelectItem>
            ))}
          </ScrollArea>
        </SelectContent>
      </Select>
    </div>
  );
};

export default StateSelector;
