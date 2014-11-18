gitbook-plugin-changyan
======================

A comment hosting service for Web sites and online communities that uses a networked platform. 

畅言平台的gitbook插件，给gitbook集成评论功能

how to install
--------------

安装到gitbook所在目录，不能作为全局模块安装

```shell
npm install gitbook-plugin-changyan
```

how to use
----------

Add config in book.json, the config will be changyan object as a global variable.

在book.json中添加设置，属性名为changyan

```json
{
    "plugins": [
        "changyan"
    ],
    "pluginsConfig": {
        "changyan": {
            "appid": "your changyan's appid",
            "conf": "the conf in the code generate by changyan"
        }
    }
}
```

how to work
-----------

Load comment elements when gitbook's page.change event triggered.

由于gitbook特殊的页面加载方式，动态加载评论框的方法

urls like /a/b/
--------------

Sometimes a page can have different urls.

[www.example.com/](www.example.com/) and [www.example.com/index.html](www.example.com/index.html) refer to the same page.

Add some code to process these situation,the procedure to generate unique page id is:

1. get the location.pathname from browser
1. replace all the '/' with '-'
1. if the last char of the result string is '-',append 'index.html' to it(eg: /a/b/ will be cast to -a-b-,final result is -a-b-index.html).

为了处理同一个页面有不同的url的情况，要求一个单独的id来分辨页面。

[www.example.com/](www.example.com/) 和 [www.example.com/index.html](www.example.com/index.html) 是同一个页面，应该显示相同的评论。

为了兼容这种情况，插件生成惟一id的过程如下：

1. 从location.pathname 中获取url
1. 替换'/'为'-'
1. 如果最后一个字符为-，在末尾添加'index.html'。（/a/b/ 会被转换为 -a-b-，再加上index.html即为最后的id）
