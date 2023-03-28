import React from "react";

const InternetPrivacyList = () => {
  const items = [
    "To assist us in providing services to you",
    "To allow you to change web pages during your visit without having to re-enter your password",
    "To store your preferences and other information and to track activity on our website",
    "To better understand the effectiveness of our promotional campaigns",
    "To determine whether you came to our site from a banner ad or an affiliate Web site",
    "To deliver Information specific to your interests on additional web sites",
    "To determine whether you’ve acted on our promotional messages",
  ];
  return (
    <ul>
      {items.map((item, index) => {
        <li key={index}>{item}</li>;
      })}
    </ul>
  );
};

export default InternetPrivacyList;
