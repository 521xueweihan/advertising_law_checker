# advertising_law_checker

检测违反最新广告法工具。还处于婴儿阶段，别 star 我 push 上来是我精力、能力有限，想让有兴趣的朋友看到可以一起开发。

[在线预览](https://521xueweihan.github.io/advertising_law_checker/)

## 起因

看到了最新广告法的新闻，发现敏感词很多。所以我觉得写个在线的工具，检测输入的文本有没有违规的字符，如果有就标记为“红色”并在最上方展示出来。

## 技术

前端部分已由协作者维护完成。框架采用 React + Redux + Material-UI。

文本扫描与节点生成算法已完全重写。

尚未编写单元测试。

强烈建议使用 yarn 进行依赖库安装；如发觉国内访问 npm 仓库很慢，不妨试试[这个](https://github.com/langyo/cnpm-registry-helper)。

### 编译

```shell
npm i / yarn
npm run build
```

由此方法打包出的 js 文件是经过 uglifyjs 再压缩的文件，适用于生产环境；由此产生的 bundle.js 文件不应当纳入 .gitignore，以方便 github.io 开设静态页面。

### 调试模式

```shell
npm i / yarn
npm run watch
```

然后打开 localhost:16000 即可进行热打包调试，你可以在修改了源代码之后立即便能从浏览器看到变化。

## 待完成/已完成

- [x] 左边输入，右边同步展示原内容
- [x] 敏感词标记“红色”
  - [x] 动态添加或删除敏感词
  - [ ] 提供一个专用的词库 json 文件
- [x] 计数敏感词总数
- [ ] 点击下一个自动定位到敏感词位置
- [ ] 响应式适配
