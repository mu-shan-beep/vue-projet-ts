const readonlyHandlly = {
  get(target, prop) {
    const result = Reflect.get(target, prop);
    console.log("拦截到了读取数据");
    return result;
  },

  set(target, prop, value) {
    console.warn("只能读取数据，不能修改数据或添加数据");
    return true;
  },

  deleteProperty(target, prop, value) {
    console.log("只能读取数据，不能删除数据");
    return true;
  },
};

function shallowReadonly(target, prop) {
  if (target && typeof target === "object") {
    return new Proxy(target, readonlyHandlly);
  }
  return target;
}

function readonly(target, prop) {
  console.log(target,"aaaaaa")
  if (target && typeof target === "object") {
    if (Array.isArray(target)) {
      //   遍历数组
      target.forEach((item, index) => {
        readonly(item);
      });
    } else {
      Object.keys(target).forEach((key) => {
        readonly(target[key]);
      });
    }
    return new Proxy(target, readonlyHandlly);
  }

  return target;
}
