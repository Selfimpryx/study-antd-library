import React from 'react';
import { render } from "@testing-library/react";
import Alert from '../index'
import "@testing-library/jest-dom";

describe("Alert Component test case", () => {
  it("render default alert component",()=>{
    const wrapper = render(<Alert showIcon type={"success"} description={"描述"} message={"alert组件"} />);
    const el = wrapper.getByText('alert组件');
    expect(el).toBeInTheDocument()
  });
});
