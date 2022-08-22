import React from "react";
import cn from "classnames";

interface ContainerProps {
  containerClassName?: string;
  children: React.ReactNode;
}

const Container = ({
  containerClassName,
  children,
}: ContainerProps): React.ReactElement => {
  const containerClasses = cn("container mx-auto max-w-7xl", {
    [containerClassName as string]: !!containerClassName,
  });

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
