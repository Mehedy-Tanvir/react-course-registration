const Cart = () => {
  return (
    <div className=" bg-white p-[24px] h-full rounded-lg">
      <p className="text-[#2F80ED] text-[18px] font-bold">
        Credit Hour Remaining 7 hr
      </p>
      <hr className="border border-[#1C1B1B33] w-full h-[1px] mx-auto mt-[16px]" />
      <h1 className="text-[#1C1B1B] font-bold text-[20px] mt-[16px]">
        Course Name
      </h1>
      <ul className="mt-[21px]"></ul>
      <hr className="border border-[#1C1B1B33] w-full h-[1px] mx-auto mt-[24px]" />
      <p className="text-[#1C1B1BCC] font-medium text-[16px] mt-[16px]">
        Total Credit Hour : 13
      </p>
      <hr className="border border-[#1C1B1B33] w-full h-[1px] mx-auto mt-[16px]" />
      <p className="text-[#1C1B1BCC] font-semibold text-[16px] mt-[16px]">
        Total Price : 48000 USD
      </p>
    </div>
  );
};

export default Cart;
