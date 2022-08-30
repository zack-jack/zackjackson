import React from "react";
import cn from "classnames";

interface ContainerProps {
  className?: string;
  children: React.ReactNode;
}

export default function Container({
  className,
  children,
}: ContainerProps): React.ReactElement {
  const containerClasses = cn("container mx-auto max-w-7xl", {
    [className as string]: !!className,
  });

  return <div className={containerClasses}>{children}</div>;
}
