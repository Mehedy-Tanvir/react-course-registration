import Card from "../Card/Card";
import PropTypes from "prop-types";

const Cards = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
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
