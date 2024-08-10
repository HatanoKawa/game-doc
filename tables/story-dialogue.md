# StoryPerformData.json

本节是对于MainStoryData.xlsx表中StoryPerformData.json文件中，较为复杂字段的解释。

## dialogueText 对话文本

本字段支持富文本，可以使用[富文本](../commonly-used/rich-text)对文本进行修饰。

## characterCode 角色代码
本字段大部分情况下可以忽略，默认会使用与角色模板characterTempId对应的内置值，只有需要使用同一个角色模板创建多个角色时才需要使用，用于区分同一角色模板的不同角色。

例如：
- 多个卫兵角色，但是他们的对话内容不同，会有多个卫兵同时在场，可以使用同一个卫兵模板，但是角色代码不同。
- 重要角色与他的分身或者幻影对话，可以使用同一个角色模板，但是角色代码不同。

使用示例：

| characterTempId | characterCode | dialogText  |
|-----------------|---------------|-------------|
| guardian        | guardian_1    | 刚才是什么东西跑过去了 |
| guardian        | guardian_2    | 不知道         |
| guardian        | guardian_3    | 我也没看清       |

这样的对话将会将会在游戏中同时出现三个使用同一个立绘的卫兵，分别说出不同的对话。
