import React from "react";
import JobCard from "./JobCard";
import JobCategoryList from "./JobCategoryList";

const CareerJobList = () => {
  const jobCategory = [
    {
      all: [
        "Senior Developer",
        "Mid Fullstack Developer",
        "Graphic Designer",
        "Degital Marketing",
        "Procurment Officer",
        "Accountant",
      ],
    },
    {
      "Software Developer": ["Senior Developer", "Mid Fullstack Developer"],
    },
    { marketing: ["Degital marketing"] },
    { mesearcher: [] },
    { intern: ["Junior Developer"] },
  ];
  return (
    <div className="lg:px-52 md:px-14 px-5 py-24 h-full">
      <div className="container text-white lg:flex  gap-x-6">
        <div className="lg:w-[33%] w-full order-2 p-4">
          <div className="w-full mb-10">
            <form action="#">
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  name="search"
                  placeholder="search job"
                  className="w-[80%] py-3 px-3 text-black outline-none bg-gray-200"
                />
                <button className="w-[20%] bg-blue-500 py-3">
                  <i>search</i>
                </button>
              </div>
            </form>
          </div>
          <div>
            <h3 className="py-3 font-semibolds">Job Categories</h3>

            <JobCategoryList />
          </div>
        </div>
        <div className="lg:w-2/3 w-full border bg-white p-4">
          <div className="flex flex-col space-y-3">
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
            <JobCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerJobList;
