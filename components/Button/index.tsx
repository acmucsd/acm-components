import * as React from "react";
import classnames from 'classnames';

import "./styles.less";

type ButtonProps = {
  className?: string,
  type?: string,
  size?: string,
  children: React.ReactNode
}

/* Default Button is medium sized */
export const Button = ({ className, type, size, children }: ButtonProps) => {
  let classes = classnames("acm-btn", 
    {
      "acm-btn-primary": type === "primary",
      "acm-btn-outline": type === "outline",
      "acm-btn-small": size === "small",
      "acm-btn-medium": size === "medium",
      "acm-btn-large": size === "large"
    }
  );
  if (className) {
    classes = classnames(classes, ...className.split(" "));
  }
  return (
    <button className={classes}>
      <span>{children}</span>
    </button>
  );
};