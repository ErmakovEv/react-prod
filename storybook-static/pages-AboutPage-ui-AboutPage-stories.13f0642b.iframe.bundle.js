"use strict";(self.webpackChunkulbi=self.webpackChunkulbi||[]).push([[821],{"./src/pages/AboutPage/ui/AboutPage.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Dark:()=>Dark,Light:()=>Light,__namedExportsOrder:()=>__namedExportsOrder,default:()=>AboutPage_stories});var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ThemeDecorator=__webpack_require__("./src/shared/config/DecoratorsStorybook/ThemeDecorator.tsx"),theme=__webpack_require__("./src/app/providers/theme/index.ts"),es=__webpack_require__("./node_modules/react-i18next/dist/es/index.js");let AboutPage_stories={title:"pages/AboutPage",component:function(){var t=(0,es.$G)("about").t;return(0,jsx_runtime.jsx)("div",{children:t("О сайте")})},parameters:{layout:"centered"},tags:["autodocs"]};var Light={args:{}},Dark={args:{},decorators:[function(Story){return(0,jsx_runtime.jsx)(ThemeDecorator.Z,{theme:theme.Q2.DARK,children:(0,jsx_runtime.jsx)(Story,{})})}]};Light.parameters={...Light.parameters,docs:{...Light.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Light.parameters?.docs?.source}}},Dark.parameters={...Dark.parameters,docs:{...Dark.parameters?.docs,source:{originalSource:"{\n  args: {},\n  decorators: [Story => <ThemeDecorator theme={Theme.DARK}>\n      <Story />\n    </ThemeDecorator>]\n}",...Dark.parameters?.docs?.source}}};let __namedExportsOrder=["Light","Dark"]}}]);