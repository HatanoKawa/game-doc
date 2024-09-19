# 条件判断

条件判断格式一般用途：
- 在control-node类型的文本节点中，用于根据条件判断触发不同的分支或者执行不同的操作。
- 配置行为的解锁条件。

在解析时，除了and与or关键字两侧外的不可见字符会被忽略。

## 示例

```text
逻辑判断：
charm > 50 and intelligence > 30
(charm > 40 and intelligence < 20 and round > 5) or (charm < 30 and intelligence > 50)

赋值操作：
charm += round * 10 - (round + 2) * 5
```

## 注意事项

- 逻辑判断等于符号（`==`）在进行数字比较时是基于一定精度的，可能会出现精度误差，当前的精度为 `0.01`。

## 运算逻辑

本功能遵循常见的逻辑和算术运算规则，即优先级为从高到低：
- 括号
- 取反或取负（! -）
- 乘除法(* /)
- 加减法(+ -)
- 比较运算符(> >= < <=)
- 等于运算符(== !=)


## 可识别元素

| 元素类型  | 含义                    | 示例                   |
|-------|-----------------------|----------------------|
| int   | 数字类型的值                | `120`                |
| float | 小数类型的值                | `4.5`                |
| bool  | 布尔值                   | `true`, `false`      |
| str   | 字符串                   | `"name"`, `"char_1"` |
| var   | 内置变量，计算时将会被内置变量的实际值替换 | `charm`              |

## 关键字

| 关键字 | 含义             | 示例                                               |
|-----|----------------|--------------------------------------------------|
| -   | 数学运算减 或 取负值    | `charm < stamina - 20`, `-charm <= stamina - 50` |
| +   | 数学运算加          | `charm > 50 + intelligence`                      |
| *   | 数学运算乘          | `charm > 50 + round`                             |
| /   | 数学运算除          | `charm < 50 / round`                             |
| !   | 逻辑运算取反         | `!isVrigin`                                      |
| ==  | 逻辑运算相等         | `charm == 30`                                    |
| !=  | 逻辑运算不等         | `charm != 30`                                    |
| \>  | 逻辑运算大于         | `charm > 30`                                     |
| \>= | 逻辑运算大于等于       | `charm >= 30`                                    |
| <   | 逻辑运算小于         | `charm < 30`                                     |
| <=  | 逻辑运算小于等于       | `charm <= 30`                                    |
| and | 逻辑运算且          | `charm > 30 and round < 5`                       |
| or  | 逻辑运算或          | `charm > 100 or round < 15`                      |
| ()  | 括号，用于强制提升计算优先级 | `charm < (round + 5) * 50`                       |
| =   | 直接赋值，仅用于更改单个属性 | `charm = charm + 10`                             |
| +=  | 赋值，仅用于更改单个属性   | `charm += 10` 等价于 `charm = charm + 10`           |
| -=  | 赋值，仅用于更改单个属性   | `charm -= 10` 等价于 `charm = charm - 10`           |
| *=  | 赋值，仅用于更改单个属性   | `charm *= 2`  等价于 `charm = charm * 2`            |
| /=  | 赋值，仅用于更改单个属性   | `charm /= 2`  等价于 `charm = charm / 2`            |


## 语法规则参考

```text
expression     → equality ;
equality       → comparison ( ( "!=" | "==" ) comparison )* ;
comparison     → term ( ( ">" | ">=" | "<" | "<=" ) term )* ;
term           → factor ( ( "-" | "+" ) factor )* ;
factor         → unary ( ( "/" | "*" ) unary )* ;
unary          → ( "!" | "-" ) unary | primary ;
primary        → NUMBER | STRING | true | false | var | "(" expression ")" ;
```
