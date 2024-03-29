import React from "react";
import { createTuple } from "../../util/type";
import classNames from "classnames";

/**
 *  danger 设置危险按钮
 *  disabled  按钮失效状态
 *  href
 *  size large middle small undefined
 *  type 按钮类型 primary dashed link  text default
 *  onClick
 *  className
 */

type ButtonSize = "large" | "middle" | "small" | undefined;

const ButtonTypes = createTuple("primary", "dashed", "link", "default");
type ButtonType = typeof ButtonTypes[number];
// button的type属性
const ButtonHTMLTypes = createTuple("submit","button","reset")
type ButtonHTMLType = typeof ButtonHTMLTypes[number]

// link 为a链接 按钮 否则为普通按钮
interface baseButtonProps {
  size: ButtonSize;
  type: ButtonType;
  className: string;
  children: React.ReactNode;
}

// 组合按钮属性类型  link + onClick + target +  baseButtonProps + htmL a标签的所有属性
type AnchorButtonProps = {
  href: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & baseButtonProps &
  Omit<React.AnchorHTMLAttributes<any>, "type" | "onClick">; //将a标签的内 跟我们定义的属性重名的属性移除

//   按钮属性一样
type NativeButtonProps = {
  htmlType?:ButtonHTMLType;
  onClick?: React.MouseEventHandler<HTMLElement>;
} & baseButtonProps &
  Omit<React.ButtonHTMLAttributes<any>, "type" | "onClick">;

// 把所有的属性都变成可选的
export type ButtonProps = Partial<AnchorButtonProps & NativeButtonProps>;

const Button: React.FC<ButtonProps> = (props) => {
  // 将可能影响样式的属性获取出来 通过这些属性来设置样式
  const {
    type,
    size,
    className,
    children,
    htmlType = "button" as ButtonProps["htmlType"],
    ...restProps
  } = props;

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement, MouseEvent>
  ) => {
    const { onClick, disabled } = props;

    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  const classes = classNames(
    "btn",
    {
      [`btn-${type}`]: type,
      [`btn-${size}`]: size,
    },
    className
  );

  if (type === "link") {
    return (
      <a {...restProps} className={classes} onClick={handleClick}>
        {children}
      </a>
    );
  }

  return (
    <button
      {...restProps}
      type={htmlType}
      className={classes}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
