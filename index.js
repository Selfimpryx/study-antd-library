import * as React from "react";
import ReactDom from "react-dom";
import Button from "./components/Button/index";
import MyIcon from "./components/Icon/index";
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
  </div>,
  document.getElementById("root")
);

// module.exports = require('./components');
