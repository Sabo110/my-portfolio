import React, { forwardRef } from 'react';
import { IoMdAddCircleOutline } from "react-icons/io";

const AddIcon = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>((props, ref) => {
  return (
    <span ref={ref} {...props}>
      <IoMdAddCircleOutline />
    </span>
  );
});

export default AddIcon;


