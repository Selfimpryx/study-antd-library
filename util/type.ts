import { type } from "os";

// 元组
export const createTuple = <T extends string[]>(...args:T)=>args;