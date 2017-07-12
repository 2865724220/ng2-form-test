/**
 * 方法用于把对象密封，也就是让对象既不可以拓展也不可以删除属性（把每个属性的configurable设为false）
 * @param constructor
 */
export function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

/**
 * 完全冻结对象，在seal的基础上，属性值也不可以修改（每个属性的wirtable也被设为false）
 * @param constructor
 */
export function freeze(constructor: Function) {
  Object.freeze(constructor);
  Object.freeze(constructor.prototype);
}


