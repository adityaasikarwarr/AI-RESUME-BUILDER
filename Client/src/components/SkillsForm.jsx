import { Plus, Sparkles, X } from "lucide-react";
import React, { useState } from "react";

const SkillsForm = ({ data = [], onChange }) => {
  const [newSkill, setNewSkill] = useState("");

  const addSkill = () => {
    if (newSkill.trim() && !data.includes(newSkill.trim())) {
      onChange([...data, newSkill.trim()]);
      setNewSkill("");
    }
  };

  const removeSkill = (indexToRemove) => {
    onChange(data.filter((_, index) => index !== indexToRemove));
  };

  const handleKeyPress = (e) => {
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
          Add Your Technical And Soft Skills
        </p>
      </div>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Enter a Skill"
          className="flex-1 px-3 py-2 text-sm border border-gray-200 rounded-xl hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/20 focus:border-blue-500 transition-all duration-200"
          onChange={(e) => setNewSkill(e.target.value)}
          value={newSkill}
          onKeyDown={handleKeyPress}
        />
        <button
          type="button"
          onClick={addSkill}
          disabled={!newSkill.trim}
          className="flex items-center gap-2 px-4 py-2 text-sm bg-linear-to-br from-green-100 to-green-200 ring-green-300 text-green-600 ring hover:ring-green-400 transition-all rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Plus size-4 /> Add
        </button>
      </div>

      {data.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {data.map((skill, index) => (
            <span
              key={index}
              className="flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
            >
              {skill}
              <button
                onClick={() => removeSkill(index)}
                className="ml-1 hover:bg-blue-200 rounded-full p-0.5 transition-colors"
              >
                <X className="w-3 h-3" />
              </button>
            </span>
          ))}
        </div>
      ) : (
        <div className="text-center py-6 text-gray-500">
          <Sparkles className="w-10 h-10 mx-auto mb-2 text-gray-300" />
          <p>No Skills added yet</p>
          <p className="text-sm">Add your technical and soft skills above.</p>
        </div>
      )}

      <div className="bg-blue-50 p-3 rounded-lg">
        <p className="text-sm text-blue-800">
          <strong>Tip: </strong>
          Add 8-12 relevant skills. Include both technical and soft
          skills.(programming languages, frameworks, tools) and soft skills
          (leadership, communication, teamwork).
        </p>
      </div>
    </div>
  );
};

export default SkillsForm;
