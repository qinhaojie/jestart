个人使用的项目脚手架工具，能方便的快速初始化项目文件

## 安装

```
$ npm install -g jestart
```

## 使用

### crete
创建文件名为myApp的项目
```
$ jestart crete myApp
```

根据提示选择模板文件

### list
列出所有可以使用的模板
```
$ jestart list

列出用户模板
$ jestart list -u  

列出默认模板
$ jestart list -d
```

### add
添加自定义模板

```
添加myTemp模板
$ jestart add ./myTemp

添加myTemp到模板，将其命名为myTempName
$ jestart add ./myTemp -n myTempName 

添加模板，如果存在则覆盖
$ jestart add ./myTemp -f
```

## 提供的模板

0.2.*默认会提供一下模板
- jqeury
- react-redux