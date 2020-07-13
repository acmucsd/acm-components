import * as React from "react";
import classnames from 'classnames';

import "./styles.less";

type ButtonProps = {
  className?: string,
  type?: string,
  size?: string,
}

/* Default Button is medium sized */
export const Button: React.FunctionComponent<ButtonProps> = ({ className, type, children }) => {
  let classes = classnames("acm-btn", {"acm-btn-primary": type === "primary"});
  if (className) {
    classes = classnames(classes, ...className.split(" "));
  }
  console.log(classes);
  return (
    <button className={classes}>
      <span>{children}</span>
    </button>
  );
};