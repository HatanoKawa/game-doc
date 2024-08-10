# 条件判断

条件判断格式一般用途：
- 在control-node类型的文本节点中，用于根据条件判断触发不同的分支或者执行不同的操作。
- 配置行为的解锁条件。

## 语法

此类单元格中，可输入单条条件，也可以输入多条条件，多条条件情况下遵循JSON语法。

单条条件示例：（条件类型为`BiggerThan`，比较对象为`charm`，比较值为20，含义为魅力值大于20）

```json
{
    "conditionType": "BiggerThan",
    "compareId": "charm",
    "compareValue": 20
}
```

简化语法：
```text
charm>20
```

多条条件示例：（条件类型为`And`，包含两个条件，第一个条件为`BiggerThan`，比较对象为`charm`，比较值为20，第二个条件为`BiggerThan`，比较对象为`intelligence`，比较值为30，含义为魅力值大于20且智力值大于30）

```json
{
    "conditionType": "And",
    "conditions": [
        {
            "conditionType": "BiggerThan",
            "compareId": "charm",
            "compareValue": 20
        },
        {
            "conditionType": "BiggerThan",
            "compareId": "intelligence",
            "compareValue": 30
        }
    ]
}
```
简化语法：
```text
and(charm>20,intelligence>30)
```
或者：
```text
charm>20,intelligence>30
```

## conditionType参数及示例

| 说明   | conditionType      | 示例                                                                                   | 简化语法        |
|------|--------------------|--------------------------------------------------------------------------------------|-------------|
| 大于   | BiggerThan         | `{ "conditionType": "BiggerThan", "compareId": "charm", "compareValue": 20 }`        | `charm>20`  |
| 大于等于 | BiggerThanOrEqual  | `{ "conditionType": "BiggerThanOrEqual", "compareId": "charm", "compareValue": 20 }` | `charm>=20` |
| 小于   | SmallerThan        | `{ "conditionType": "BiggerThan", "compareId": "charm", "compareValue": 20 }`        | `charm<20`  |
| 小于等于 | SmallerThanOrEqual | `{ "conditionType": "BiggerThanOrEqual", "compareId": "charm", "compareValue": 20 }` | `charm<=20` |
| 为真   | IsTrue             | `{ "conditionType": "IsTrue", "compareId": "virgin"}`                                | `virgin`    |
| 为假   | IsFalse            | `{ "conditionType": "IsFalse", "compareId": "virgin"}`                               | `!virgin`   |

## 多条件组合

**由于实现难度问题，暂不支持简化语法中and与or的混合使用，如需混合使用，需要使用JSON语法。**


多条件组合示例：（条件类型为`Or`，包含两个条件，第一个条件为`BiggerThan`，比较对象为`charm`，比较值为20，第二个条件为`BiggerThan`，比较对象为`intelligence`，比较值为30，含义为魅力值大于20或智力值大于30）

```json
{
    "conditionType": "Or",
    "conditions": [
        {
            "conditionType": "BiggerThan",
            "compareId": "charm",
            "compareValue": 20
        },
        {
            "conditionType": "BiggerThan",
            "compareId": "intelligence",
            "compareValue": 30
        },
        {
            "conditionType": "IsFalse",
            "compareId": "virgin"
        }
    ]
}
```

### 简化语法多条件组合方式：
1. 使用逗号分隔多个条件。
2. 在开头使用or或者and关键字，表示多个条件之间的关系，如果不指定，默认为and关系。

上方示例对应的简化语法示例：
```text
or(charm>20,intelligence>30,!virgin)
```

## 可读性

在书写简化判断条件时，为了提高可读性可以任意使用空格、换行等空白字符，在解析时会自动忽略这些空白字符。

手动分割的示例：
```text
or(
    charm > 20,
    intelligence > 30,
    !virgin
)
```

