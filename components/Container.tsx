import { cn } from "@/lib/utils";
import React, { Children } from "react";

const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: String; // means that you can or you cant passt in the parameters "?"
}) => {
  return (
    <div className={cn("max-w-screen-xl mx-auto", className)}>{children}</div>
  );
};

export default Container;
