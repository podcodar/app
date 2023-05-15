"use client";
import { useState } from "react";
import { ChevronDownIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";

interface AccordionItem {
  id: string;
  label: string;
  content: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

//This TS use is correct?

function Accordion({ items }: AccordionProps) {
  const [expandedIndex, setExpandedIndex] = useState(0);

  const handleClick = (nextIndex: number) => {
    setExpandedIndex(nextIndex);
  };

  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex; //Index means expandedIndex
    const icon = (
      <span className="block h-6 w-6">
        {isExpanded ? <ChevronDownIcon /> : <ChevronLeftIcon />}
      </span>
    );

    console.log(isExpanded);
    return (
      <div key={item.id}>
        <div
          className="p-3 flex justify-between bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>
        {isExpanded && <div className="border-b p-5">{item.content}</div>}
      </div>
    );
  });
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;

//L42. Conditional Rendering. If isExpanded is true it will show tem content, otherwise will be collapsed, not rendered.
//L37. Everytime the user clicks on the label the state is updated, setting the new state as the argument passed. Index, turns to nextIndex  at L20,21 for escope questions.
//Console is showind true and false
