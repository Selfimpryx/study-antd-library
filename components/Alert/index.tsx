import React, { ReactNode } from "react";
import classNames from "classnames";
import MyIcon from "../Icon";

/**
 * massage: string 警告提示内容  非必填
 * type : success | info | warning | error 提示的央视 默认是info 非必填
 * onClose:(e)=>void 关闭时的回调函数
 * closable:boolean 是否显示关闭按钮 默认是false 不显示
 * description: string 警告提示的辅助文字
 */

export interface IAlertProps {
  type?: "success" | "info" | "warning" | "error";
  showIcon?: boolean; //显示辅助图标
  message?: string;
  closeText?: ReactNode; //替换右上角的差号
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  closable?: boolean;
  description?: string;
  className?: string;
  style?: React.CSSProperties;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const iconMap = {
  success: <MyIcon type={"icon-chenggong"}></MyIcon>,
  info: <MyIcon type={"icon-chanpinxinxi"}></MyIcon>,
  warning: <MyIcon type={"icon-jinggao"}></MyIcon>,
  error: <MyIcon type={"icon-icon-test"}></MyIcon>,
};

const Alert: React.FC<IAlertProps> = ({
  type = "info",
  message,
  onClose,
  closable = false, //m默认不显示
  closeText,
  description,
  className = "",
  showIcon = false,
}) => {
  // 点击右上角关闭按钮
  const handleClose = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClose?.(e);
  };

  // 右上角按钮
  const renderClosebtn = () => {
    if (!closable) {
      return null;
    }
    return (
      <button type={"button"} onClick={handleClose} className={"alert-close"}>
        {closeText ? (
          <span className={"alert-close-text"}>{closeText}</span>
        ) : (
          <MyIcon type={"icon-error"}></MyIcon>
        )}
      </button>
    );
  };
  // icon
  const renderIcon = () => {
    const iconType = iconMap[type];
    // 克隆生成一个新的组件
    return React.cloneElement(iconType, { className: "alert-icon" });
  };

  const alertClassName = classNames(
    'alert-box',
    `alert-${type}`,
    {
      "alert-description": !!description,
    },
    className
  );
  return (
    <div className={alertClassName}>
      {showIcon ? renderIcon() : null}
      <div className={"alert-content"}>
        <div className={"alert-message"}>{message}</div>
        <div className={"alert-description"}>{description}</div>
      </div>
      {renderClosebtn()}
    </div>
  );
};

export default Alert;
