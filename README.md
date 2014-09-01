gitbook-plugin-duoshuo
======================

A comment hosting service for Web sites and online communities that uses a networked platform. 

畅言平台的gitbook插件，给gitbook集成评论功能

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
