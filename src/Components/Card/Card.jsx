const Card = () => {
  return (
    <div className="p-4 card w-[312px] bg-white rounded-xl">
      <figure>
        <img
          src="https://i.ibb.co/yRC1ss8/Rectangle-2-2.png"
          alt="Course Image"
        />
      </figure>
      <div className="mt-[16px]">
        <h2 className="text-[#1C1B1B] text-[18px] font-semibold">
          Introduction to C Programming
        </h2>
        <p className="text-[#1C1B1B99] font-normal text-[14px] mt-[12px]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="mt-[19px] flex gap-[16px]">
          <div className="flex gap-[12px]">
            <img src="./dollar-sign.svg" alt="" />
            <p className="text-[#1C1B1B99] font-medium text-[16px]">
              Price : 15000
            </p>
          </div>
          <div className="flex gap-[12px]">
            <img src="./Frame.png" alt="" />
            <p className="text-[#1C1B1B99] font-medium text-[16px]">
              Credit : 1hr
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

export default Card;
