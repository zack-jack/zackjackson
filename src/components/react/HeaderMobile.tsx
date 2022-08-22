import React from "react";
import cn from "classnames";

const HeaderMobile = (): React.ReactElement => {
  const containerClasses = cn("flex items-center justify-end", "md:hidden");

  return (
    <div className={containerClasses}>
      <p>Mobile Menu placeholder</p>
    </div>
  );
};

export default HeaderMobile;
