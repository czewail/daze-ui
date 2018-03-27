## Container 容器

限制内容宽度的容器

---

### 属性
| 参数       | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| fluid      | 固定宽度   | boolean  | true, false |    false     |
| align      | 对齐方式   | string    |  left, center, right  |     -    |
| className   | 额外样式   | string    |  -  |     -    |


---

### 基础容器

固定宽度并支持响应式布局的容器

:::demo
```js
render() {
  return (
    <div>
      <Container>
        <h5>锦瑟</h5>
        <p>锦瑟无端五十弦，一弦一柱思华年。</p>
        <p>庄生晓梦迷蝴蝶，望帝春心托杜鹃。</p>
        <p>沧海月明珠有泪，蓝田日暖玉生烟。</p>
        <p>此情可待成追忆，只是当时已惘然。</p>
      </Container>
    </div>
  )
}
```
:::

### 无限宽容器

 100% 宽度，占据全部视口（viewport）的容器
 :::demo
 ```js
 render() {
   return (
     <div>
       <Container fluid>
         <h5>卜算子·我住长江头</h5>
         <p>我住长江头，君住长江尾。日日思君不见君，共饮长江水。 </p>
         <p>此水几时休，此恨何时已。只愿君心似我心，定不负相思意。</p>
       </Container>
     </div>
   )
 }
 ```
 :::

 ### 容器对齐方式
 :::demo
 ```js
 render() {
   return (
     <div>
       <Container align='center'>
         <h5>上邪</h5>
         <p>上邪，我欲与君相知，长命无绝衰。 </p>
         <p>山无陵，江水为竭。冬雷震震，夏雨雪。天地合，乃敢与君绝。</p>
       </Container>
     </div>
   )
 }
 ```
 :::
 :::demo
 ```js
 render() {
   return (
     <div>
       <Container align='right'>
         <h5>江南</h5>
         <p>江南可采莲，莲叶何田田，鱼戏莲叶间。 </p>
         <p>鱼戏莲叶东，鱼戏莲叶西，鱼戏莲叶南，鱼戏莲叶北。</p>
       </Container>
     </div>
   )
 }
 ```
 :::
