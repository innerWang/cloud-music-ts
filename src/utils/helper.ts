// 箭头函数中无法使用 arguments，若使用 ES6 语法，可以使用扩展运算符
export const omit = (...args: any[]) => {
  const target = { ...args[0] };
  if (args.length < 2) {
    return target;
  }
  const keys = args.slice(1);
  keys.map((k) => delete target[k]);
  return target;
};
