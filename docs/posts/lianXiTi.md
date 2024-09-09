---
title: 算法题（bushi）
tags:
  - 算法
categories:
  - 算法
date: 2024-08-30
hidden: false
---

# 算法题（bushi）

## 统计工作日的天数

> 统计两个日期之间的周一到周五的天数

```js
function countWeekdays(startDateStr, endDateStr) {
  const startDate = new Date(startDateStr)
  const endDate = new Date(endDateStr)

  if (startDate > endDate) {
    return 0
  }

  let count = 0
  const currentDate = startDate

  while (currentDate <= endDate) {
    const dayOfWeek = currentDate.getDay()
    if (dayOfWeek >= 1 && dayOfWeek <= 5) {
      count++
    }
    currentDate.setDate(currentDate.getDate() + 1)
  }

  return count
}

// 使用示例
const weekdaysCount = countWeekdays('2024-08-01', '2024-08-31')
console.log(`从2024-08-01到2024-08-31的工作日数量是: ${weekdaysCount}`)

// 从2024-08-01到2024-08-31的工作日数量是: 22
```

## 统计字符串最长不重复字串的长度

```js
function lengthOfLongestSubstring(s) {
    const hashSet = new Set()

    let start = 0
    let end = 0
    let result = 0
    while (end < s.length) {
        if (!hashSet.has(s[end])) {
            hashSet.add(s[end]);
            end++;
            result = Math.max(result, end - start);
        } else {
            hashSet.delete(s[start]);
            start++;
        }
    }
    return result
}
// 测试用例
var result = lengthOfLongestSubstring("dvdf")
console.log(result)

// 3
```

## 反转字符串

> reverseWords(“Hello World”);  // 输出: “World Hello”
```js
function reverseWords(sentence) {
    const words = sentence.split(" ")
    for (let i = 0; i < words.length / 2; i++) {
        const temp = words[i]
        words[i] = words[words.length - i - 1]
        words[words.length - i - 1] = temp
    }
    return words.join(" ")
}
```

## 检查括号是否匹配

```js
function isValidBrackets(s) {
    const map = {
        ")": "(",
        "}": "{",
        "]": "["
    }

    const stack = []
    for (let i = 0; i < s.length; i++) {
        if (['(', '{', '['].includes(s[i])) {
            stack.push(s[i])
        } else {
            if (stack.pop() !== map[s[i]]) {
                return false
            }
        }
    }
    return stack.length === 0
}

```