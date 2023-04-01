import React from "react";
import { Link } from "react-router-dom";

const QuickLink = ({ to, section }) => {
  return (
    <div className="pb-2 text-sm lg:text-base hover:text-red-600">
      <Link to={to}>{section}</Link>
    </div>
  );
};

export default QuickLink;
