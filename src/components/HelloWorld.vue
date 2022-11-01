<template>
  <div class="hello">
<!--    <h1>{{ msg }}</h1>-->
    <v-md-editor :model-value="mdText" mode="preview" height="500px"></v-md-editor>
<!--    <v-md-preview :text="mdText"></v-md-preview>-->

  </div>
</template>

<script>
import { ref } from 'vue';


export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  setup() {

    const mdText = ref(`
<table><tr><td style="background: #FF00BB">为文字段设置背景色~~~~~~</td></tr></table>

*斜体文本*
_斜体文本_
**粗体文本**
__粗体文本__
***粗斜体文本***
___粗斜体文本___


<font face="黑体">我是黑体字</font>
<font face="微软雅黑">我是微软雅黑</font>
<font face="STCAIYUN">我是华文彩云</font>
<font color=red>我是红色</font>
<font color=#008000>我是绿色</font>
<font color=Blue>我是蓝色</font>
<font size=5>我是尺寸</font>
<font face="黑体" color=green size=5>我是黑体，绿色，尺寸为5</font>

$$
  \\begin{matrix}
   1 & 2 & 3 \\\\
   4 & 5 & 6 \\\\
   7 & 8 & 9
  \\end{matrix}
$$
\`\`\`mermaid
graph LR
A --- B
B-->C[fa:fa-ban forbidden]
B-->D(fa:fa-spinner);
\`\`\`
`);
    // const mdText = ref('$$sum_{i=1}^n a_i=0$$');

    return {
      mdText,
    };
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
