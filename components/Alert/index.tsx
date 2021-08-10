import React from "react";
import { createTuple } from "util/type";
import classNames from "classnames";

/**
 * massage: string 警告提示内容  非必填
 * type : success | info | warning | error 提示的央视 默认是info 非必填
 * onClose:(e)=>void 关闭时的回调函数
 * closable:boolean 是否显示关闭按钮 默认是false 不显示
 * description: string 警告提示的辅助文字
 */

export interface IAlertProps {
  type?: "success" | "info" | "warning" | "error";
  massage?:string;
  onClose?:(e:React.MouseEvent<HTMLElement>) => void;
  closable:boolean;
  description:string
}


