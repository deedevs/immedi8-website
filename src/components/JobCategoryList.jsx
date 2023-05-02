import React from "react";
import { jobData } from "../utils";

const JobCategoryList = ({ setActiveCategory }) => {
  const getTotal = function () {
    let total = jobData.length;
    return total;
  };

  const getCategoryTotal = function (name, data) {
    let total = 0;
    data.forEach((element) => {
      element.category == name ? (total += 1) : 0;
    });
    return total;
  };

  const categories = [
    {
      name: "All",
      number: getTotal(),
    },
    {
      name: "Software Developer",
      number: getCategoryTotal("Software Developer", jobData),
    },
    {
      name: "Accountant",
      number: getCategoryTotal("Accountant", jobData),
    },
    {
      name: "Graphic Designer",
      number: getCategoryTotal("Graphic Designer", jobData),
    },
    {
      name: "Marketing",
      number: getCategoryTotal("Marketing", jobData),
    },
    {
      name: "InternShip",
      number: getCategoryTotal("InternShip", jobData),
    },
  ];
  return (
    <ul className="text-black space-y-3">
      {categories.map(({ name, number }) => (
        <li key={name}>
          <button
            className="w-full flex justify-between items-center"
            onClick={setActiveCategory(name)}
          >
            <span>{name}</span> <span className="text-right">{number}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default JobCategoryList;
