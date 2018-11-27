.
├── .dockerignore // docker 忽略文件
├── .editorconfig // 编辑器设置
├── .eslintcache // eslint 缓存
├── .eslintignore // eslint 忽略文件
├── .eslintrc // eslint 配置
├── .gitattributes // git 文件匹配模式
├── .github // github 相关配置，issue 模版等
├── .gitignore // gitignore
├── .prettierrc // 代码格式化配置
├── .stylelintrc // 样式 lint
├── .testcafe-electron-rc // testcafe 测试配置文件，自动化跨浏览器测试
├── .travis.yml // 持续继承文件 travis
├── .vscode // vscode 编译器设置
├── CHANGELOG.md // 更新日志
├── LICENSE // 版权
├── README.md // 说明文档
├── app // 应用开发目录
│   ├── electron // 桌面功能，相关开发目录
│   │   ├── app.global.css // 全局样式（使用\*.global.css）
│   │   ├── app.html // 初始化模版
│   │   ├── app.icns // 程序 logo
│   │   ├── main.dev.js // 桌面程序入口（开发环境）
│   │   └── menu.js // 桌面程序菜单
│   └── src // 业务功能，相关开发目录
├── appveyor.yml // 持续继承系统 appveyor 相关的配置文件
├── babel.config.js // babel 的本地配置文件
├── build // 打包目录
│   ├── dist // 静态包目录（configs 目录中设置路径）
│   ├── dll // 编译的 dll 文件
│   └── resources // 资源文件，打包 app 的时候用到
├── configs // webpack 相关各个环境的打包文件
│   ├── webpack.config.base.js // 基本设置
│   ├── webpack.config.eslint.js // eslint 使用设置
│   ├── webpack.config.main.prod.babel.js // 桌面程序，生产环境设置
│   ├── webpack.config.renderer.prod.babel.js // 业务功能，生产环境设置
│   ├── webpack.config.renderer.dev.babel.js // 业务功能，开发环境设置
│   └── webpack.config.renderer.dev.dll.babel.js // 业务功能，开发环境 dll 设置，提高编译速度
├── internals // 打包相关的脚本和资源文件
│   ├── img // 图片
│   ├── mocks // Enzyme + jtest 测试单元 mock 文件使用目录（package.json 中配置）
│   │   └── fileMock.js // mock 文件
│   └── scripts // 校验脚本
│   ├── CheckBuiltsExist.js // 检测 build 是否存在
│   ├── CheckNodeEnv.js // 检测环境变量
│   └── CheckPortInUse.js // 检测端口是否被占用
├── package-lock.json // 锁定 package
├── package.json // 配置文件
├── renovate.json // 包依赖自动升级管理配置文件 说明见 https://user-first.ikyu.co.jp/entry/2018/05/07/193755. 也可以用 yarn outdated+yarn upgrade
├── test // 测试单元文件
├── tree.md // 目录结构
└── yarn.lock // 锁定 yarn

7616 directories, 53163 files
