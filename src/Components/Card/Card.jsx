import PropTypes from "prop-types";

const Card = ({ course, handleSelect }) => {
  return (
    <div className="self-center p-4 h-[450px] bg-white card rounded-xl justify-self-center flex flex-col">
      <figure className="h-[144px]">
        <img
          src={course.image}
          alt="Course Image"
          className="w-[280px] h-[144px] mx-auto"
        />
      </figure>
      <div className="mt-[16px] w-[280px] mx-auto flex-grow flex flex-col justify-between mb-[16px]">
        <div>
          <h2 className="text-[#1C1B1B] text-[18px] font-semibold">
            {course.title}
          </h2>
          <p className="text-[#1C1B1B99] font-normal text-[14px] mt-[12px]">
            {course.details}
          </p>
        </div>

        <div className="mt-[19px] flex justify-between">
          <div className="flex gap-[8px]">
            <img src="./dollar-sign.svg" alt="" />
            <p className="text-[#1C1B1B99] font-medium text-[16px]">
              Price : {course.price}
            </p>
          </div>
          <div className="flex gap-[12px]">
            <img src="./Frame.png" alt="" />
            <p className="text-[#1C1B1B99] font-medium text-[16px]">
              Credit : {course.credit}hr
            </p>
          </div>
        </div>
      </div>
      <div className="card-actions">
        <button
          className="w-full normal-case btn btn-primary font-inter bg-[#2F80ED] text-[18px] font-semibold text-white rounded-lg"
          onClick={() => handleSelect(course)}
        >
          Select
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  course: PropTypes.object.isRequired,
  handleSelect: PropTypes.func.isRequired,
};

export default Card;
