# Vue3 笔记

## 尚硅谷笔记 https://huaxhe.gitee.io/vue3_study_docs

## setup 组合 API 入口函数

## ref:作用: 定义一个数据的响应式

> 语法: const xxx = ref(initValue):
> 创建一个包含响应式数据的引用(reference)对象
> js 中操作数据: xxx.value
> 模板中操作数据: 不需要.value
> 一般用来定义一个基本类型的响应式数据

## reactive:定义一个复杂的响应式数据

> 返回对象的代理对象 Proxy，被代理的目标对象是传入的对象
> 作用: 定义多个数据的响应式
> const proxy = reactive(obj): 接受一个普通对象然后返回该普通对象的响应式代理器对象
> 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
> 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
> 数组或对象不能直接赋值，否则不能触发响应式

## setup：

### 细节问题：

> beforeCreate 之前执行，且只执行一次
> setup 执行时，组件对象还未创建，此时 this 是 undefined ,不能使用
> this 是 undefined,不能通过 this 来访问 data,props,methods,computed 等
> 其实所有的 compositionAPI 相关的回调函数都不能使用
> setup 返回值是一个对象，其中的属性和方法一般是给 html 模板使用的
> setup 中的属性和 data 中的 return 对象属性都可以在 html 模板中使用
> setup 中的对象中的方法和 methos 中的方法会合并位组件对象的方法
> Vue3 中尽量不要混合使用 data,setup,methods 混合使用
> setup 不能是一个 async 函数，因为返回的是一个 Promise,模板看不到 return 对象中的属性数据
> setup 中不能访问 data 和 methods 中的数据,因为不能访问到 this

### 参数：

- props 父级组件向子级组件传的所有参数,并且是在子级中使用 props 接收到的所有属性
- context 是一个对象,里面有 attrs 对象(获取当前组件标签上的属性,但是各属性是在 props 中没有声明接受的所有的对象),emit 方法(分发事件的),slots (插槽)对象

## ref 和 reactive 对比

- ref 中如果放入对象或数组，内部会通过 reactive 处理,转换为 reactivew 的代理对象
- ref 内部通过给 value 属性添加 getter 和 setter 来实现对象数据的劫持
- reactive 内部:通过使用 Proxy 来实现对象内部所有数据的劫持,并通过 Reflect 操作对象内部数据
- ref 的内部数据操作:在 JS 中要.value,在模板中不用（内部解析会自动添加）

## computed 和 watch

- vue3 的计算属性的函数如果只传入一个回调函数，表示的是 get,返回的是一个 ref 对象

  ```
  const fullName1 = computed(() => { return user.lastName + user.firstName; });
  ```

- 如果需要有 getter 和 setter 操作,就要传入一个对象

```
    const fullName2 = computed({
      get() {
        return user.firstName + "-" + user.lastName;
      },
      set(val: string) {
        const names = val.split("-");
        user.lastName = names[0];
        user.firstName = names[1];
      },
    });

```

- watch 监听属性一开始不会执行,如果要进入就执行,需要设置 immediate 属性为 true,deep 属性为深度监听

  ```
    watch(
      user,
      ({ firstName, lastName }) => {
        fullName3.value = firstName + lastName;
      },
      { immediate: true, deep: true }
    );

  ```

- watchEffect 默认会直接执行一次

  ```
  watchEffect(() => { fullName3.value = user.firstName + user.lastName; });
  ```

- watch 可以监听多个数据
  ```
  watch([()=>user.firstName,()=>user.lastName,()=>fullName3],
  ()=>{
     	console.log("我是多个监听数据");
   });
  ```

## 生命周期

`beforeCreate, created, beforeMount, mounted, beforeUpdate, updated, beforeUnmount, unmounted`

## toRefs

- 可将响应式数据变成变成普通对象，并且普通对象的每一个 property 都是一个 ref

## shallowReactive 和 shallowRef 深浅劫持

- shallowRef 只处理 value 的响应式，不进行对象的 reactive 处理

- shallowReactive 只处理最外层数据，不进行对象的 reactive 处理

## readonly 和 shallowReadonly 深度只读和浅只读

- readonly 深层次只读，所有层次均不能修改
- shallowreadonly 浅层只读，最外层数据只读，内层可修改

## toRaw 和 markRaw

- toRaw 代理对象变为普通对象，数据更新页面不变
- markRaw 标记的数据从此不能变为代理对象不会更新

## customRef

- 自定义 ref，可以显示地控制依赖追踪和出发响应，接受一个工程函数，两个参数分别是用于追踪的 track，与用于触发响应的 trigger，并返回一个带有 get 和 set 的属性对象。

```
function userDeouncedRef<T>(value: T, delay = 500) {
  let timerID: number;
  return customRef((track, trigger) => {
    return {
      get() {
        // 告诉Vue追踪数据
        track();
        return value;
      },
      set(newVal: T) {
        console.log(newVal, "asaaaa");
        clearTimeout(timerID);
        timerID = setTimeout(() => {
          value = newVal;
          // 告诉vue更新数据
          trigger();
        }, delay);
      },
    };
  });
}
```

## provide 和 inject 提供与注入，实现跨组件传递数据（子级组件和祖级组件）

- provide 提供

```
provide("xxx",data);
```

- inject 注入

```
 const xxx = inject("xxx")
```

## isRef，isReactive,isReadonly,isProxy

- isRef 判断值是否是 ref 创建的
- isRactive 判断对象是否是 reactive 创建
- isReadonly 判断对象是否是只读的
- isProxy 判断值是否是 Proxy

## Fragment (片段)

- vue3 中可以没有根标签，会包裹在一个 Fragment 的虚拟元素中,可以减少标签层级，减少内存的占用

## Teleport(瞬移) 提供一种干净的方式让组件的 html 添加在父组件界面外的特定标签（一般是 body）下面显示

`<Teleport to="body"></Teleport>`

## Suspense 不确定的

`
<Suspense>
<template>
//异步组件
<abc/>
</template>

<!-- 组件加载时显示 -->

<template><template  v-slot:fallback>
</Suspense>
`

`defineAsyncComponent(()=>{}) Vue3动态引入组件`
