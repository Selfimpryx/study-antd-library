import React from "react";
import classNames from "classnames";
import "./icon.scss";

interface IconProps {
  className?:string;
  type:string;
  [key:string]:any
}

const MyIcon:React.FC<IconProps> = ({ className, type, ...restProps }) => {
  const classes = classNames("sel-icon", className);
  return (
    <svg className={classes} {...restProps} aira-hidden="true">
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

export default MyIcon;
