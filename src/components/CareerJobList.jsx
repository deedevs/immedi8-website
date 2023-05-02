import React, { useEffect, useState } from "react";
import JobCard from "./JobCard";
// import JobCategoryList from "./JobCategoryList";
import { jobData, categories } from "../utils";

const CareerJobList = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [newData, setNewData] = useState("");
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search) {
      const filteredJobs = newData.filter(
        (data) => data.role.toLowerCase() == search.toLowerCase()
      );
      setNewData(filteredJobs);
    }
  };

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    if (!activeCategory || activeCategory === "All") {
      setNewData(jobData);
    } else {
      const filteredData = jobData.filter(
        (data) => activeCategory === data.category
      );
      setNewData(filteredData);
    }
  }, [activeCategory]);

  return (
    <div className="lg:px-52 md:px-14 px-5 py-24 h-full">
      <div className="container text-white lg:flex  gap-x-6">
        <div className="lg:w-[33%] w-full p-4">
          <div className="w-full mb-10">
            <form action="#" onSubmit={handleSubmit}>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  name="search"
                  placeholder="search job"
                  className="w-[80%] py-3 px-3 text-black outline-none bg-gray-200"
                  onChange={handleChange}
                />
                <button className="w-[20%] bg-blue-500 py-3" type="submit">
                  <i>search</i>
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="py-3 font-semibolds">Job Categories</h3>
            <ul className="text-black space-y-3">
              {categories.map(({ name, number }) => (
                <li key={name}>
                  <button
                    className="w-full flex justify-between items-center"
                    onClick={() => {
                      setActiveCategory(name);
                    }}
                  >
                    <span>{name}</span>{" "}
                    <span className="text-right">{number}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="lg:w-2/3 w-full border bg-white p-4">
          <div className="flex flex-col space-y-3">
            {newData &&
              newData.map((job) => <JobCard key={job.id} data={job} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerJobList;
