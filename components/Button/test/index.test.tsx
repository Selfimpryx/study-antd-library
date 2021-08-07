import React from "react";
import { render,fireEvent } from "@testing-library/react";
import Button, { ButtonProps } from "../index";
import "@testing-library/jest-dom";

const AttrProps: ButtonProps = {
  type: "primary",
  size: "large",
  className: "test-button",
};

const onClick = jest.fn();

describe("first react test case", () => {
  it("render default button", () => {
    const wrapper = render(<Button>hello</Button>);
    const el = wrapper.getByText("hello");
    expect(el).toBeTruthy();
    expect(el).toBeInTheDocument();
  });
  it("run button with the type attribute", () => {
    const wrapper = render(<Button {...AttrProps}>hello</Button>);
    const el = wrapper.getByText("hello");
    expect(el).toBeTruthy();
    expect(el).toBeInTheDocument();
    expect(el).toHaveClass("btn", "btn-primary", "btn-large", "test-button");
  });
  it("has the disabled property", () => {
    const wrapper = render(<Button disabled onClick={onClick}>hello</Button>);
    const el = wrapper.getByText("hello");
    expect(el).toBeTruthy();
    expect(el).toBeInTheDocument();
    expect(el).toHaveAttribute("disabled");
    fireEvent.click(el);
    // disabled的函数不能被调用
    expect(onClick).not.toHaveBeenCalled()
  });
  it("have the onclick method", () => {
    const wrapper = render(<Button onClick={onClick}>hello</Button>);
    const el = wrapper.getByText("hello");
    expect(el).toBeTruthy();
    expect(el).toBeInTheDocument();
    fireEvent.click(el);
    // 判断一个函数是否被调用过
    expect(onClick).toHaveBeenCalled()
  });
});
