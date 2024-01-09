# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.
周一：把船在线问题测试完成，配置服务器需要的环境
周二：重新搭建一个web服务,对node12支持，
周三：使用把登入模块跟展示模块页面进行还原，打包，测试，发布到新服务器上面，使用nginx进行转发
周四：新建一个小船服务，把cesium进行初始化，小船的页面布局,这个页面布局具体还没有定下来
周五：需要并把船的模型加载进去，跟登录服务模块进行联合测试
周六：开始在cesium加载画航线功能，广告牌需要时间
下周：主要是把Mapbox功能换成Cesium功能

nginx 当前版本 - 1.20.1
      配置文件 - /etc/nginx
      前端项目 - /usr/share/nginx/html
nvm   当前版本       - 0.33.11
      node版本管理器 - /root/.nvm/
      node版本都在   - /root/.nvm/versions/node
      当前node版本   - 18.17.0
      