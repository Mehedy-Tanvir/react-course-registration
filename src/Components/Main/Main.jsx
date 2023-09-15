import { useState } from "react";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
const Main = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  console.log(courses);

  return (
    <div className="mt-[32px] flex flex-col md:flex-row justify-center gap-[16px]">
      <Cards courses={courses}></Cards>
      <Cart></Cart>
    </div>
  );
};

export default Main;
