import { useState } from "react";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
const Main = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);

  return (
    <div className="mt-[32px]">
      <Cards courses={courses}></Cards>
    </div>
  );
};

export default Main;
