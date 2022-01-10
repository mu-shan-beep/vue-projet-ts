function shallowRef(target) {
  return {
    _value: target,

    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },

    set value(val) {
      console.log("劫持到了修改数据，准备更新界面");
      this._value = val;
    },
  };
  
}

function ref(target) {
  //   target = reactive(target);  传入对象时通过reactive处理数据
  return {
    _value: target,
    get value() {
      console.log("劫持到了读取数据");
      return this._value;
    },

    set value(val) {
      console.log("劫持到了修改数据，准备更新界面");
      this._value = val;
    },
  };
}
