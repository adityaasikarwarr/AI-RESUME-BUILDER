import { Plus } from "lucide-react";
import React from "react";

const SkillsForm = ({ data, onChange }) => {
  const [newSkill, setNewSkill] = React.useState("");

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }

    const removeSkill = (indexToRemove) => {
      onChange(data.filter((_, index) => index !== indexToRemove));
    };

    const handelKeyPress = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        addSkill();
      }
    };
    return (
      <div className="space-y-4">
        <div>
          <h3 className=" flex items-center gap-2 text-lg font-semibold">
            Skills
          </h3>
          <p className="text-sm text-gray-500">
            Add Your Technical and Soft Skills
          </p>
        </div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Enter a Skill"
            className="flex-1 px-3 py-2 text-sm"
            onChange={(e) => setNewSkill(e.target.value)}
            value={newSkill}
            onKeyDown={handelKeyPress}
          />
          <button className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
            <Plus size-4 className="" /> Add
          </button>
        </div>
      </div>
    );
  };
};
export default SkillsForm;
