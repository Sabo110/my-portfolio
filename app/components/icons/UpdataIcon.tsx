import { VscDiffModified } from "react-icons/vsc";
import React, { forwardRef } from 'react';

const UpdataIcon = forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>((props, ref) => {
  return (
    <span ref={ref} {...props}>
      <VscDiffModified />
    </span>
  );
});

export default UpdataIcon;
