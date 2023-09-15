import { useState } from "react";
import Cards from "../Cards/Cards";
import { useEffect } from "react";
import Cart from "../Cart/Cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Main = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);
  const handleSelect = (course) => {
    let credit = course.credit;
    if (!selectedCourses.includes(course)) {
      const newSelectedCourses = [...selectedCourses, course];
      selectedCourses.forEach((course) => (credit = credit + course.credit));
      if (credit > 20) {
        toast("You can not take more than 20 credits.");
      } else {
        setSelectedCourses(newSelectedCourses);
        setTotalCredit(credit);
      }
    } else {
      toast("You have already selected this course.");
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="mt-[32px] flex flex-col md:flex-row justify-center gap-[16px]">
        <Cards courses={courses} handleSelect={handleSelect}></Cards>
        <Cart
          selectedCourses={selectedCourses}
          totalCredit={totalCredit}
        ></Cart>
      </div>
    </>
  );
};

export default Main;
