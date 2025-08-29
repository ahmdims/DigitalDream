import React from "react";

// Tidak perlu langsung membungkus dengan memo
const PoinsType = () => {
  return (
    <div className="flex justify-center items-center gap-[0.5rem] lg:hidden">
      <i className="bi bi-check-circle text-primary text-[1rem]"></i>
      <p className="text-[1rem] text-[#676767] text-center">
        Unlimited design requests & revisions
      </p>
    </div>
  );
};

// Bungkus memo saat ekspor
export default React.memo(PoinsType);
