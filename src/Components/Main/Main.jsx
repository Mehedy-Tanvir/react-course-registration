import { useState } from "react";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelect = (course) => {
    if (!selectedCourses.includes(course)) {
      const newSelectedCourses = [...selectedCourses, course];
      setSelectedCourses(newSelectedCourses);
    } else {
      toast("You have already selected this course.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-[32px] flex flex-col md:flex-row justify-center gap-[16px]">
        <Cards courses={courses} handleSelect={handleSelect}></Cards>
        <Cart selectedCourses={selectedCourses}></Cart>
      </div>
    </>
  );
};

export default Main;
