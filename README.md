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
>返回对象的代理对象Proxy，被代理的目标对象是传入的对象
> 作用: 定义多个数据的响应式
> const proxy = reactive(obj): 接收一个普通对象然后返回该普通对象的响应式代理器对象
> 响应式转换是“深层的”：会影响对象内部所有嵌套的属性
> 内部基于 ES6 的 Proxy 实现，通过代理对象操作源对象内部数据都是响应式的
