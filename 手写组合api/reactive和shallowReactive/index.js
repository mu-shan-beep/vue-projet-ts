// shallowRective  浅的劫持代理

//定义一个reactiveHandler对象
const reactiveHandler = {
  // 修改或添加属性
  get(target, prop) {
    const result = Reflect.get(target, prop);
    console.log("拦截了读取器", prop, result);
    return result;
  },
  set(target, prop, value) {
    const result = Reflect.set(target, prop, value);
    console.log("拦截了修改数据", prop, value);
    return result;
  },

  deleteProperty(target, prop) {
    const result = Reflect.deleteProperty(target, prop);
    console.log("拦截了deleteProperty", prop);
    return result;
  },
};

// 定义一个shallowReactive函数，传入一个目标对象
function shallowReactive(target) {
  // 判断当前目标对象是否是object类型（对象或数组）
  if (target && typeof target == "object") {
    return new Proxy(target, reactiveHandler);
  }
  return target;
}

function reactive(target) {
  // 对数组或对象中的所有数据进行递归
  if (target && typeof target == "object") {
    if (typeof target === "array") {
      target.forEach((item, index) => {
        reactive(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        reactive(target[key]);
      });
    }
    return new Proxy(target, reactiveHandler);
  }

  return target;
}
