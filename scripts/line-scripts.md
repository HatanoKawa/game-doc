# 行级脚本

行级脚本是在一段对话 `dialogue` 开始或者结束时触发的脚本，应当在 `MainStoryData.xlsx` 表中的 `StoryPerformData.json` 中的 [commandsOnStart](../tables/story-dialogue#commandsonstart-起始执行脚本) 字段与 <s>commandsOnEnd（当前未实现，有需要再加）</s> 中定义。

以下是一个完整的使用例子：

```text
createCharacter(Succubus, characterCode=Succubus_1, enable=false) ||
[wait]show(Succubus_1) ||
createCharacter(Slime, Slime_1, e=true)
```

*本节的示例部分为便于阅读添加了空格和换行，实际书写时可以自行调整排版，特殊符号（逗号、括号、等号、双竖线等）两侧的不可见字符不影响脚本的执行。*

## 行级脚本的基本结构

一组行级脚本由多个脚本组成，每个脚本之间使用 `||` 分隔，每个脚本的基本结构如下：

- `[wait]` 前缀（非必须），表示此脚本执行完成后才会执行下一个脚本。**（仅可用于协程脚本，非协程脚本添加无效）**
- `ScriptName` 脚本名称，表示调用的是哪个脚本。
- `(arg0, arg1, param=value)` 表示调用的参数。
> 关于参数的说明：
> - `arg0`、`arg1`为脚本的基本参数，通常会有数个不定量的基本参数，参数之间使用逗号分隔。
> - `param=value`为脚本的配置参数，不分先后，通常是**非必填的**，针对特定脚本仅有有限个可以使用的配置参数，参数之间使用逗号分隔，参数名与参数值之间使用等号分隔。
> - 若脚本没有参数，不可以省略括号，应当使用 `()` 表示没有参数。

## show 显示角色


### 基本属性

| 属性      | 值 |
|---------|---|
| 是否是协程脚本 | 是 |

### 基本参数

| 参数名               | 说明             | 类型  | 数量 |
|-------------------|----------------|-----|----|
| characterKey 角色标识 | 要切换为显示状态的角色Key | 字符串 | 不限 |

关于角色Key的获取方式，请参考 [角色标识](../system/character-key) 一节的内容。

### 配置参数

| 参数名       | 缩写 | 类型          | 默认值   | 说明           |
|-----------|----|-------------|-------|--------------|
| immediate | i  | 布尔值 boolean | false | 是否跳过过渡动画直接显示 |

### 使用示例

```text
[wait]show(Succubus_1)

show(Succubus_1, Slime_1, Generic_1)

以下是三个等价的示例：
[wait]show(Succubus_1, Slime_1, immediate=false)
[wait]show(Succubus_1, Slime_1, i=false)
[wait]show(Succubus_1, Slime_1)
```

## hide 隐藏角色

### 基本属性

| 属性      | 值 |
|---------|---|
| 是否是协程脚本 | 是 |

### 基本参数

| 参数名               | 说明             | 类型  | 数量 |
|-------------------|----------------|-----|----|
| characterKey 角色标识 | 要切换为隐藏状态的角色Key | 字符串 | 不限 |

关于角色Key的获取方式，请参考 [角色标识](../system/character-key) 一节的内容。

### 配置参数

| 参数名       | 缩写 | 类型          | 默认值   | 说明           |
|-----------|----|-------------|-------|--------------|
| immediate | i  | 布尔值 boolean | false | 是否跳过过渡动画直接隐藏 |

### 使用示例

```
[wait]hide(Succubus_1)

hide(Succubus_1, Slime_1, Generic_1)

以下是三个等价的示例：
[wait]hide(Succubus_1, Slime_1, immediate=false)
[wait]hide(Succubus_1, Slime_1, i=false)
[wait]hide(Succubus_1, Slime_1)
```

## createCharacter 创建角色

用于特殊情况下手动创建角色，通常角色会在对话中自动创建，详细的创建时机请参考 [角色的创建时机](../system/character-key#角色的创建时机) 一节的内容。

### 基本属性

| 属性      | 值 |
|---------|---|
| 是否是协程脚本 | 否 |

### 基本参数

| 参数名             | 说明     | 类型  | 数量 |
|-----------------|--------|-----|----|
| characterTempId | 角色模板Id | 字符串 | 1  |

### 配置参数

| 参数名           | 缩写 | 类型          | 默认值   | 说明             |
|---------------|----|-------------|-------|----------------|
| characterCode | c  | 字符串 string  |       | 角色代码           |
| enable        | e  | 布尔值 boolean | false | 是否在创建完成后直接显示角色 |
| immediate     | i  | 布尔值 boolean | false | 是否跳过淡入动画       |

### 使用示例

```text
createCharacter(Succubus)
createCharacter(Slime, e=true)
createCharacter(Slime, c=Slime_1, e=true)
createCharacter(Succubus, characterCode=Succubus_1, enable=false)
```
## wait 等待

### 基本属性

考虑到wait的效果，wait脚本将强制为协程脚本，这意味着他将必定会延迟后续脚本的触发，无论是否添加`[wait]`前缀。

| 属性      | 值   |
|---------|-----|
| 是否是协程脚本 | 强制是 |

### 基本参数

| 参数名  | 说明       | 类型       | 数量 |
|------|----------|----------|----|
| time | 延迟时间，单位秒 | 小数 float | 1  |

### 配置参数

无

### 使用示例

```text
wait(1.5)
```


## sortCharacters 手动排序角色图层

todo