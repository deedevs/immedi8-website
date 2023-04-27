import React from "react";

const JobCard = ({ role, deadline, workExperiance, educationalExperiance }) => {
  return (
    <div className=" shadow-md shadow-[#1e2c4a] text-black p-3 w-full rounded bg-[#1e2c4a] hover:shadow-none">
      <h3 className="py-2 lg:text-2xl md:text-xl text-lg font-semibold text-red-600">
        something here
      </h3>
      <p className="text-white">
        <strong>icon Deadline:</strong>
        {deadline}
      </p>
      <p className="text-white">
        <strong>icon Work Experiance:</strong> {workExperiance}
      </p>
      <p className="text-white">
        <strong>icon Educational Experiance:</strong> {educationalExperiance}
      </p>
    </div>
  );
};

export default JobCard;
