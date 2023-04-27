import React from "react";

const JobCategoryList = ({ name, number }) => {
  const categories = [
    {
      name: "All",
      number: 10,
    },
    {
      name: "Software Developer",
      number: 3,
    },
    {
      name: "Accountant",
      number: 4,
    },
    {
      name: "Graphic Designer",
      number: 1,
    },
    {
      name: "Marketing",
      number: 1,
    },
    {
      name: "InternShip",
      number: 1,
    },
  ];
  return (
    <ul className="text-black space-y-3">
      {categories.map(({ name, number }) => (
        <li key={name}>
          <a href="#" className="w-full flex justify-between items-center">
            <span>{name}</span> <span className="text-right">({number})</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default JobCategoryList;
