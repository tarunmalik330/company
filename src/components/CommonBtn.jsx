import React from "react";

const CommonBtn = (props) => {
  return (
    <div>
      <button className=" common_btn lh_148 text-uppercase fs_4sm fw-bold text-nowrap">
        {props.buttonName}
      </button>
    </div>
  );
};

export default CommonBtn;
