import React from "react";
import classNames from "classnames";
import "./icon.scss";

interface IconBaseProps {
  className?: string;
  type: string;
}

type IconProps = Partial<React.SVGAttributes<SVGElement> & IconBaseProps>;

const MyIcon: React.FC<IconProps> = ({ className, type, ...restProps }) => {
  const classes = classNames("sel-icon", className);
  return (
    <svg className={classes} {...restProps} aira-hidden="true">
      <use xlinkHref={`#${type}`} />
    </svg>
  );
};

export default MyIcon;
