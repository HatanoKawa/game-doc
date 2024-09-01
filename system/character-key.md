# 角色标识

每个角色都有一个唯一的标识符，用于在系统中标识角色或者在编写文案时区分使用同模板创建的不同角色。

## 角色的创建时机

角色将会在第一个 [tachieEnterType](../tables/story-dialogue#tachieentertype-角色进场类型)
或 [tachiePosition](../tables/story-dialogue#tachieposition-角色位置)
或 [tachieStatus](../tables/story-dialogue#tachiestatus-角色状态)
不为空的对话行中被创建。\
或者可以通过调用脚本手动创建角色。

## 角色标识的生成逻辑

- 优先使用 [characterCode](../tables/story-dialogue#charactercode-角色代码) 字段作为角色标识。
- 若没有设置 [characterCode](../tables/story-dialogue#charactercode-角色代码) ，将使用 [characterTempId](../tables/story-dialogue#charactertempid-角色模板) 作为角色标识。

以下是两个角色标识的生成示例：

| [characterTempId]角色模板Id | [characterCode]角色代码 | 最终生成的角色标识   |
|-------------------------|---------------------|-------------|
| Hero                    | Hero_Spirit         | Hero_Spirit |
| Hero                    |                     | Hero        |

## 角色标识的用途

在执行 [行级脚本](../scripts/line-scripts) 时，如果需要指定某个角色，请使用 **角色标识**，而不是 <s>模板id</s>。
