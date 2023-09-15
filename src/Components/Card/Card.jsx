import PropTypes from "prop-types";
const Card = ({ course }) => {
  return (
    <div className="p-4 card w-[320px] bg-white rounded-xl justify-self-center self-center">
      <figure>
        <img
          src={course.image}
          alt="Course Image"
          className="w-[280px] h-[140px] mx-auto"
        />
      </figure>
      <div className="mt-[16px] w-[280px] mx-auto">
        <h2 className="text-[#1C1B1B] text-[18px] font-semibold">
          {course.title}
        </h2>
        <p className="text-[#1C1B1B99] font-normal text-[14px] mt-[12px]">
          {course.details}
        </p>
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
        <div className="justify-end card-actions mt-[26px]">
          <button className="w-full normal-case btn btn-primary font-inter bg-[#2F80ED] text-[18px] font-semibold text-white rounded-lg">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
Card.propTypes = {
  course: PropTypes.object.isRequired,
};
export default Card;
