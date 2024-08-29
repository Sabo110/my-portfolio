import { FaRegTrashCan } from "react-icons/fa6";
import React, { forwardRef } from 'react';

const TrashIcon = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>((props, ref) => {
  return (
    <span ref={ref} {...props}>
      <FaRegTrashCan />
    </span>
  );
});

export default TrashIcon;