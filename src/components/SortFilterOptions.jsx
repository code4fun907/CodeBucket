import Card from "./ui/Card";
import AddList from "./ui/AddList";
import { RadioGroup } from "@headlessui/react";
import { useState } from "react";

const RadioItem = ({ value, text, ...props }) => (
  <RadioGroup.Option value={value}>
    {({ checked }) => (
      <div className="flex items-center mb-4">
        <div
          className={`w-8 h-8 cursor-pointer rounded border border-gray-200 ${
            checked ? "bg-green-300 border-green-100" : "bg-white"
          }`}
        />
        <p className="ml-4 text-gray-500">{text}</p>
      </div>
    )}
  </RadioGroup.Option>
);

const SortFilterOptions = () => {
  const [selected, setSelected] = useState("recent");

  return (
    <Card className="hidden w-1/3 h-full p-4 ml-8 bg-white md:block">
      <h1 className="text-xl text-blue-600">Sort question by</h1>
      <RadioGroup value={selected} onChange={setSelected} className="mt-4">
        <RadioItem value="recent" text="most recent" />
        <RadioItem value="likes" text="most popular (likes)" />
        <RadioItem value="comments" text="most popular (comments)" />
      </RadioGroup>
      <h1 className="text-xl text-blue-600">Filter questions by</h1>
      <AddList name="Tags" className="mt-4" max={5} />
    </Card>
  );
};

export default SortFilterOptions;
