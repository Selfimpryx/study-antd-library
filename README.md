### React + Typescript + webpack 仿 antd 组件库

**项目技术栈**

webpack@4.4 + typescript@4.3 + react@17+ +sass@1.3.7

**介绍**

webpack@4.4 + typescript@4.3 + react@17+ +sass@1.3.7 仿 antd 组件库的开发，完成组件的基本功能,webpack 的基本搭建,
继承 prettier+commitlint+eslint 规范代码结构,学习组件开发的思想以及组件的分析与代码结构,样式结构的构建,做好单元测试等

**测试**

1.编排(初始化代码) 2.执行(执行用户应该执行的步骤) 3.断言

jest-dom 断言整理

- toBeDisabled : 检查元素是否被禁用,比如 button,input,select...
- toBeeEnabled : 类似于 not.toBeDisabled 跟 toBeDisabled 相反
- toBeEmptyDOMElement: 是否对用户没有可见内容
- toBeInTheDocument: 元素是否存于文档中
- toBeInvalid: 检查一个元素当前是否有效
- toBeRequire: 检查表单元素是不是必填的
- toBeValid: 元素的值是否有效
- toBeVisible: 元素当前对用户是否可见
- toContainElement: 一个元素是否包含另一个元素作为后代
- toContainHTML: 是否包含一个 html 元素
- toHaveAccessibleDescription: 元素是否具有可访问描述
- toHaveAccessibleName: 元素是否具有可访问名称
- toHaveAttribute(attr:string,value?:any):给定元素是否具有属性
- toHaveClass(...className):是否具有这些类名
- toHaveFocus: 是否有焦点
- toHaveFormValues({name:value}) : 表单元素或者是字段集的控件属性是不是这个值
- toHaveStyle: 元素是否具有特定的 css 属性
- toHaveTextContent(text:string): 给定节点是否具有文本内容
- toHaveValue(value):表单元素是否具有给定的值
- toHaveDisplayValue(value): 是否具有指定的显示值
- toBeChecked: 元素是否被选中
- toHaveErrorMessage: 是否有错误消息
-

**目前已完成组件:**

[button](./components/Button/index.tsx)

**将持续更新完善 webpack 的配置优化,antd 其他组件的开发.........**

test react test jest-dom
