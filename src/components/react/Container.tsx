import React from "react";
import cn from "classnames";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

const Container = ({
  className,
  children,
}: ContainerProps): React.ReactElement => {
  const containerClasses = cn("container mx-auto max-w-7xl", {
    [className as string]: !!className,
  });

  return <div className={containerClasses}>{children}</div>;
};

export default Container;
