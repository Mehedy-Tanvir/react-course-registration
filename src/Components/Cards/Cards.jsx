import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-[16px]">
      {courses.map((course) => (
        <Card key={course.id} course={course}></Card>
      ))}
    </div>
  );
};
Cards.propTypes = {
  courses: PropTypes.array.isRequired,
};

export default Cards;
