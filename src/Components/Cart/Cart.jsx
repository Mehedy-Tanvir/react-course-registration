import PropTypes from "prop-types";
const Cart = ({ selectedCourses, totalCredit, totalPrice }) => {
  return (
    <div className=" bg-white p-[24px] h-full rounded-lg">
      <p className="text-[#2F80ED] text-[18px] font-bold">
        Credit Hour Remaining {20 - totalCredit} hr
      </p>
      <hr className="border border-[#1C1B1B33] w-full h-[1px] mx-auto mt-[16px]" />
      <h1 className="text-[#1C1B1B] font-bold text-[20px] mt-[16px]">
        Course Name
      </h1>
      <ul className="mt-[21px]">
        {selectedCourses.map((selectedCourse, idx) => (
          <li
            key={idx}
            className="text-[#1C1B1B99] font-normal text-[16px] mt-[16px]"
          >
            {idx + 1} {selectedCourse.title}
          </li>
        ))}
      </ul>
      <hr className="border border-[#1C1B1B33] w-full h-[1px] mx-auto mt-[24px]" />
      <p className="text-[#1C1B1BCC] font-medium text-[16px] mt-[16px]">
        Total Credit Hour : {totalCredit}
      </p>
      <hr className="border border-[#1C1B1B33] w-full h-[1px] mx-auto mt-[16px]" />
      <p className="text-[#1C1B1BCC] font-semibold text-[16px] mt-[16px]">
        Total Price : {totalPrice} USD
      </p>
    </div>
  );
};
Cart.propTypes = {
  selectedCourses: PropTypes.array.isRequired,
  totalCredit: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
};
export default Cart;
