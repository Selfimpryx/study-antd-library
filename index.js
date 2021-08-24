import React from "react";
import ReactDom from "react-dom";
import Button from "./components/Button/index";
import MyIcon from "./components/Icon/index";
import Alert from "./components/Alert";
import "./styles/index.scss";

ReactDom.render(
  <div>
    <Button type={"primary"}>点击</Button>
    <Button type={"dashed"}>失效</Button>
    <Button type={"link"}>点击</Button>
    <Button size={"sm"}>点击</Button>
    <Button size={"lg"}>点击</Button>
    <Button disabled>失效</Button>
    <MyIcon type={"icon-error"}></MyIcon>
    {/* alert */}
    <Alert
      type={"success"}
      showIcon
      closeText={"点这里"}
      closable
      description={"副提示"}
      message={"alert提示"}
    ></Alert>
    <Alert
      showIcon
      closable
      description={"副提示"}
      message={"alert提示"}
    ></Alert>
  </div>,
  document.getElementById("root")
);

// module.exports = require('./components');
