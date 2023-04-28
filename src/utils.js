export const jobData = [
  {
    id: 1,
    role: "senior dev",
    category: "Software Developer",
    deadline: "1st May, 2023",
    workExperiance: "not required",
    educationalExperiance: "not required",
  },
  {
    id: 2,
    role: "Digital Marketing",
    category: "Marketing",
    deadline: "1st May, 2023",
    workExperiance: "not required",
    educationalExperiance:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores a voluptate porro animi, quisquam aut, minima",
  },
  {
    id: 3,
    role: "senior dev",
    category: "Software Developer",
    deadline: "1st May, 2023",
    workExperiance: "not required",
    educationalExperiance: "not required",
  },
  {
    id: 4,
    role: "senior dev",
    category: "Software Developer",
    deadline: "1st May, 2023",
    workExperiance: "not required",
    educationalExperiance: "not required",
  },
];

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

export const categories = [
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
