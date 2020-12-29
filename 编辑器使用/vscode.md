

# vscode



# settings.json

```json
{
    "workbench.iconTheme": "vscode-icons",
    "files.autoSave": "afterDelay",
    "[html]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[javascript]": {
        "editor.defaultFormatter": "HookyQR.beautify"
    },
    "editor.renderIndentGuides": false,
    "diffEditor.ignoreTrimWhitespace": false,
    "sync.gist": "2737e388e7303e054dfee9939e5afb8e",
    "todo-tree.highlights.enabled": true,
    "vsicons.dontShowNewVersionMessage": true,
    "editor.fontSize": 18,
    "editor.tabSize": 2,
    "vetur.format.options.tabSize": 2,
    "vetur.format.options.useTabs": true,
    "vetur.format.defaultFormatterOptions": {
        "prettyhtml": {
            "printWidth": 150, // 单行html不超过150
            "singleQuote": false // 更喜欢用双引号
          },
        "prettier": {
            "semi": false, //不加分号
            "singleQuote": true //用单引号
        }
    },
    "[vue]": {
        "editor.defaultFormatter": "octref.vetur"
    },
    // 使用vscode的自动格式化时，有时会把一行过长的代码折行。400表示400个字符处折行
    "editor.wordWrapColumn": 400,
    // 格式化粘贴到文件内的内容
    "editor.formatOnPaste": false,
    "emmet.triggerExpansionOnTab": true,
    "editor.wordWrap": "on", //tab自动补全html代码
    "editor.foldingStrategy": "indentation",//折叠策略基于缩进
}
```





# setting-sync

```
key:  0853648f87b91da63da7d02c9700030ca49dd1ee

id ：  2737e388e7303e054dfee9939e5afb8e
```

 ctrl+shift+p 输入sync 高级选项 打开设置 里面有gist id 和token

 ALT+SHIFT+D 下载配置 



最好看一下输出台，ctrl+shift+p 输入sync 高级选项 上传更新

 ALT+SHIFT+U 上传配置 





# 快捷键

##  VSCode 常用快捷键

```html
上下移动一行：Alt + Up / Alt + Down
向下复制行：Shift + Alt + Down
在当前行下方插入一行:   Ctrl+Enter
在当前行上方插入一行:   Ctrl+Shift+Enter

转到行首/行尾：Home / End
转到文件头/文件尾：Ctrl + Home / Ctrl + End

html代码格式化：Shift＋Alt + F

查找:   Ctrl+F
查找替换:   Ctrl+H
整个文件夹中查找 Ctrl+Shift+F 匹配符

F1 或 Ctrl+Shift+P（俗称万能键）  ：打开命令面板。

代码行缩进 Ctrl+[ 、 Ctrl+]
代码折叠展开 Ctrl+Shift+[ 、 Ctrl+Shift+]
折叠所有区域代码的快捷： ctrl + k      ctrl + 0（数字0） ;
展开所有折叠区域代码的快捷：ctrl +k      ctrl + J ;
ctrl+K  ctrl+[  折叠本级
ctrl+K  ctrl+]  取消折叠本级

```

- 可以修改快捷键：菜单 文件 --> 首选项 --> 键盘快捷方式



## 快速注释 Document This

ctrl + alt + D



## TODO

// TODO list



## Markdown Preview

Ctrl+Shift+v

快捷键：

https://shd101wyy.github.io/markdown-preview-enhanced/#/zh-cn/usages?id=%e5%bf%ab%e6%8d%b7%e9%94%ae



##  **Turbo Console Log** 

```
ctrl + alt + l 选中变量之后，使用这个快捷键生成 console.log
alt + shift + c 注释所有 console.log
alt + shift + u 启用所有 console.log
alt + shift + d 删除所有 console.log
```



# 推荐的插件

[30个极大提高开发效率的VSCode插件](https://zhuanlan.zhihu.com/p/40417719)

