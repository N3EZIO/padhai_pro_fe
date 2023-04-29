import React, { useState } from "react";
import "./Dropdown.css";

const Dropdown = ({ onSelect }) => {
  const [option, setOption] = useState("");
  const [subOption, setSubOption] = useState("");

  const handleOptionChange = (event) => {
    setOption(event.target.value);
    setSubOption("");
    onSelect(event.target.value, "");
  };

  const handleSubOptionChange = (event) => {
    setSubOption(event.target.value);
    onSelect(option, event.target.value);
  };

  const options = [
    {
      label: "P",
      subOptions: [
        { label: "Heat and thermodynamics", value: "Heat and thermodynamics" },
        { label: "SHM", value: "SHM" },
        { label: "Fluid Mechanics", value: "Fluid Mechanics" },
        { label: "Gravitation", value: "Gravitation" },
      ],
    },
    {
      label: "C",
      subOptions: [
        { label: "Grp 1A", value: "Grp 1A" },
        { label: "metal complexes", value: "metal complexes" },
        { label: "Chemical Bonding", value: "Chemical Bonding" },
        { label: "S block", value: "S block" },
        { label: "Atomic structure", value: "Atomic structure" },
      ],
    },
    {
      label: "M",
      subOptions: [
        { label: "Vector & 3D", value: "Vector & 3D" },
        { label: "Parabola", value: "Parabola" },
      ],
    },
  ];

  return (
    <div className="dropdown">
      <label className="my-label" htmlFor="options">
        Options:
      </label>
      <select id="options" value={option} onChange={handleOptionChange}>
        <option value="">Full Syllabus</option>
        {options.map((opt) => (
          <option key={opt.label} value={opt.label}>
            {opt.label}
          </option>
        ))}
      </select>
      {option && (
        <div>
          <label className="my-label" htmlFor="subOptions">
            Suboptions:
          </label>
          <select
            id="subOptions"
            value={subOption}
            onChange={handleSubOptionChange}
          >
            <option value="">Select a suboption</option>
            {options
              .find((opt) => opt.label === option)
              .subOptions.map((subOpt) => (
                <option key={subOpt.label} value={subOpt.value}>
                  {subOpt.label}
                </option>
              ))}
          </select>
        </div>
      )}
      {option && subOption && (
        <div className="selected">
          {option} - {subOption}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
