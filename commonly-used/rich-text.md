# 富文本

富文本是指在文本中可以插入图片、表格、超链接等非纯文本元素的文本。在本项目中，主要用于插入一些特殊[转义字符](#转义字符)或者使用[富文本标签](#富文本标签)对于文本样式进行修饰。
- **本节所指的内容是直接放置于MainStoryData.xlsx表StoryPerformData.json中dialogueText列的文本**
- 富文本标签可以随意进行嵌套

以下是一个例子：
```text
这是一个富文本的例子，其中包含了一些特殊的转义字符，比如换行符\n，以及一些富文本标签，比如<color=red>红色</color>和<b>加粗</b>，也可以进行嵌套，比如<color=blue><b>蓝色加粗</b></color>。
```
以上这段文字在Unity中显示的效果如下：

这是一个富文本的例子，其中包含了一些特殊的转义字符，比如换行符\
，以及一些富文本标签，比如<span style="color: red;">红色</span>和<strong>加粗</strong>，也可以进行嵌套，比如<strong><span style="color: blue;">蓝色加粗</span></strong>。

## 富文本标签
富文本标签是一种用于修饰文本样式的标签，可以用于改变文本的颜色、大小、加粗、斜体等样式。在Unity中，富文本标签是用一对尖括号`<>`包裹的，其中尖括号内部的内容是标签的属性，属性的格式是`属性名=属性值`，属性名和属性值之间用等号`=`连接，属性值可以是一个字符串，也可以是一个数值，属性名和属性值之间用等号`=`连接，属性之间用空格分隔。

以下是一些常用富文本标签的列表。

| 标签    | 描述          | 例子                                                   | 备注                                                                  |
|-------|-------------|------------------------------------------------------|---------------------------------------------------------------------|
| b     | 将标签内的文字变为加粗 | We are `<b>not</b>` amused.                          |                                                                     |
| i     | 将标签内的文字变为斜体 | We are `<i>usually</i>` not amused.                  |                                                                     |
| size  | 改变标签内文字的大小  | We are `<size=50>largely</size>` unaffected.         | 默认使用像素(px)作为单位，但也可以使用其他更多的单位，参考[单位](#单位)。                             |
| color | 改变标签内文字的颜色  | We are `<color=#ff0000ff>colorfully</color>` amused. | 使用6位或8位的十六进制颜色作为输入值，参考[十六进制颜色](#十六进制颜色)，也接受一些内置的颜色，参考[内置颜色](#内置颜色)。 |

还有其他可用的标签，例如可以更改文字对齐、字体等等，参考[Unity中可用的富文本标签的完整列表](https://docs.unity3d.com/Packages/com.unity.textmeshpro@4.0/manual/RichTextSupportedTags.html)

### 单位
| 单位类型         | 	例子    | 说明                                                             |
|--------------|--------|----------------------------------------------------------------|
| 小数 Decimals	 | 0.5    |                                                                |
| 百分比 %        | 	25%   |                                                                |
| 像素 px        | 	5px   |                                                                |
| 字体单位 em      | 	1.5em | 以原字体的尺寸作为单位，例如`<size=2em>两倍大小文字</size>`的含义是标签内的文字变为原来字体大小的两倍大。 |

### 十六进制颜色
十六进制颜色是一种用16进制表示颜色的方法，通常使用6位或8位的16进制数来表示颜色，其中6位的16进制数表示RGB颜色，8位的16进制数表示RGBA颜色，其中R表示红色，G表示绿色，B表示蓝色 ，A表示透明度。

十六进制颜色中，每两位代表了一个颜色通道的值。\
例如，红色的6位十六进制颜色是`#ff0000`，绿色的6位十六进制颜色是`#00ff00`，蓝色的6位十六进制颜色是`#0000ff`，白色的6位十六进制颜色是`#ffffff`，黑色的6位十六进制颜色是`#000000`。\
另外，8位十六进制颜色在6位十六进制颜色的基础上增加了一个表示透明度的值，透明度的值范围是0（也就是十六进制的00）到255（也就是十六进制的ff），0表示完全透明，255表示完全不透明。


### 内置颜色
Unity支持一些内置的颜色，可以直接使用颜色名字来表示颜色，例如`<color=red>红色</color>`等价于`<color=#ff0000ff>红色</color>`，以下是Unity支持的内置颜色的列表。

| 颜色名称                       | 十六进制值                                           |
|----------------------------|-------------------------------------------------|
| aqua (same as cyan)	       | <span style="color: #00ffffff">#00ffffff</span> |
| black	                     | <span style="color: #000000ff">#000000ff</span> |
| blue	                      | <span style="color: #0000ffff">#0000ffff</span> |
| brown	                     | <span style="color: #a52a2aff">#a52a2aff</span> |
| cyan (same as aqua)	       | <span style="color: #00ffffff">#00ffffff</span> |
| darkblue	                  | <span style="color: #0000a0ff">#0000a0ff</span> |
| fuchsia (same as magenta)	 | <span style="color: #ff00ffff">#ff00ffff</span> |
| green	                     | <span style="color: #008000ff">#008000ff</span> |
| grey	                      | <span style="color: #808080ff">#808080ff</span> |
| lightblue	                 | <span style="color: #add8e6ff">#add8e6ff</span> |
| lime	                      | <span style="color: #00ff00ff">#00ff00ff</span> |
| magenta (same as fuchsia)	 | <span style="color: #ff00ffff">#ff00ffff</span> |
| maroon	                    | <span style="color: #800000ff">#800000ff</span> |
| navy	                      | <span style="color: #000080ff">#000080ff</span> |
| olive	                     | <span style="color: #808000ff">#808000ff</span> |
| orange	                    | <span style="color: #ffa500ff">#ffa500ff</span> |
| purple	                    | <span style="color: #800080ff">#800080ff</span> |
| red	                       | <span style="color: #ff0000ff">#ff0000ff</span> |
| silver	                    | <span style="color: #c0c0c0ff">#c0c0c0ff</span> |
| teal	                      | <span style="color: #008080ff">#008080ff</span> |
| white	                     | <span style="color: #ffffffff">#ffffffff</span> |
| yellow	                    | <span style="color: #ffff00ff">#ffff00ff</span> |

## 转义字符

Unity中支持的常见的转义字符

| 转义字符 | 效果  |
|------|-----|
| \n   | 换行  |
| \t   | 制表符 |
| \r   | 回车  |