import {createApp} from 'vue'
import App from './App.vue'

// import VueMarkdownEditor from '@kangc/v-md-editor';
// import '@kangc/v-md-editor/lib/style/base-editor.css';

import VueMarkdownEditor from '@kangc/v-md-editor/lib/codemirror-editor';
import '@kangc/v-md-editor/lib/style/codemirror-editor.css';

// codemirror 编辑器的相关资源
import Codemirror from 'codemirror';
// mode
import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/vue/vue';
// edit
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/matchbrackets';
// placeholder
import 'codemirror/addon/display/placeholder';
// active-line
import 'codemirror/addon/selection/active-line';
// scrollbar
import 'codemirror/addon/scroll/simplescrollbars';
import 'codemirror/addon/scroll/simplescrollbars.css';
// style
import 'codemirror/lib/codemirror.css';
VueMarkdownEditor.Codemirror = Codemirror;

import VMdPreview from '@kangc/v-md-editor/lib/preview';
import '@kangc/v-md-editor/lib/style/preview.css';

// 主题
import githubTheme from '@kangc/v-md-editor/lib/theme/github.js';
import '@kangc/v-md-editor/lib/theme/style/github.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';

// highlights
import hljs from 'highlight.js';
import Prism from 'prismjs';

// 插件导入
// 脑图
import createMermaidPlugin from '@kangc/v-md-editor/lib/plugins/mermaid/npm';
// Latex
import createKatexPlugin from '@kangc/v-md-editor/lib/plugins/katex/npm';
// Emoji
import createEmojiPlugin from '@kangc/v-md-editor/lib/plugins/emoji/index';
// 样式导入
import '@kangc/v-md-editor/lib/plugins/emoji/emoji.css';
import '@kangc/v-md-editor/lib/plugins/mermaid/mermaid.css';
import 'katex/dist/katex.css'

VMdPreview.use(githubTheme, {
    Hljs: hljs,
})
    .use(createKatexPlugin())
    .use(createEmojiPlugin())
    .use(createMermaidPlugin());

VueMarkdownEditor.use(vuepressTheme, {
    Prism,
})
    .use(createKatexPlugin())
    .use(createEmojiPlugin())
    .use(createMermaidPlugin());

const app = createApp(App);

// app.use(VMdPreview);
app.use(VueMarkdownEditor);

app.mount('#app')
