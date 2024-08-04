"use client"
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';

interface MultiSelectProps {
  id?: string;
  className?: string;
  inputClassName?: string;
  onChange: (items: string[]) => void;
  value:string[];
}

const MultiSelect = ({id,className,inputClassName,onChange,value}:MultiSelectProps) => {
  const [selectedItems, setSelectedItems] = useState<string[]>(value);
  const [inputValue, setInputValue] = useState('');

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && inputValue.trim()) {
      event.preventDefault();
      if (!selectedItems.includes(inputValue.trim())) {
        const newItems = [...selectedItems, inputValue.trim()];
        setSelectedItems(newItems);
        onChange(newItems);
      }
      setInputValue('');
    }
  };

  const handleRemoveItem = (item: string) => {
    const newItems = selectedItems.filter(i => i !== item);
    setSelectedItems(newItems);
    onChange(newItems);
  };

  return (
    <div className="w-full mx-auto">
      <div className={`border rounded p-2 flex flex-wrap ${className}`}>
        <Input
          id={id||"multiInput"}
          type="text"
          className={`flex-grow p-1 m-1 focus:outline-none ${inputClassName}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        {selectedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center bg-gold-100 text-black rounded-full px-3 py-1 m-1"
          >
            <span>{item}</span>
            <button
              type="button"
              className="ml-2 bg-gold-300 rounded-full py-1 w-5 h-5 flex items-center justify-center text-xs"
              onClick={() => handleRemoveItem(item)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MultiSelect;
