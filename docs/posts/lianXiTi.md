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
    const set = new Set()

    let start = 0
    let end = 0
    let result = 0
    while (end < s.length) {
        if (!set.has(s[end])) {
            set.add(s[end]);
            end++;
            result = Math.max(result, end - start);
        } else {
            set.delete(s[start]);
            start++;
        }
    }
    return result
}
```

## 反转字符串

> reverseWords(“Hello World”);  // 输出: “World Hello”
```js
function reverseWords(sentence) {
    const words = sentence.split(" ")
    for (let i = 0; i < words.length / 2; i++) {
        [words[i], words[words.length - i - 1]] = [words[words.length - i - 1], words[i]]
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
## 旋转矩阵

> 将矩阵顺时针旋转90度。

```js
function rotate(matrix) {
    const n = matrix.length;
    // 水平翻转
    for (let i = 0; i < Math.floor(n / 2); i++) {
        for (let j = 0; j < n; j++) {
            [matrix[i][j], matrix[n - i - 1][j]] = [matrix[n - i - 1][j], matrix[i][j]];
        }
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < i; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
}
```

## 连续子数组的最大和
> 给定一个整数数组 nums，找出一个具有最大和的连续子数组(子数组最少包含一个元素)，并返回其最大和。

```js
function maxSubArray(nums) {
    let pre = 0
    let maxAns = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        maxAns = Math.max(maxAns, pre);
    });
    return maxAns;
};

```

## 编辑距离

```js
function minDistance(word1, word2) {
    const len1 = word1.length;
    const len2 = word2.length;
    const dp = Array.from(Array(len1 + 1), () => Array(len2 + 1))
    dp[0][0] = 0

    for (let i = 1; i <= len1; i++) {
        dp[i][0] = dp[i - 1][0] + 1
    }

    for (let i = 1; i <= len2; i++) dp[0][i] = dp[0][i - 1] + 1

    for (let i = 1; i <= len1; i++) {
        for (let j = 1; j <= len2; j++) {
            if (word1[i - 1] == word2[j - 1])
                dp[i][j] = dp[i - 1][j - 1]
            else
                dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        }
    }

    return dp[len1][len2]
};
```

## 简化路径

```js
function simplifyPath(path) {
    const names = path.split("/");
    console.log(names)
    const stack = [];
    for (const name of names) {
        if (name === "..") {
            if (stack.length) {
                stack.pop();
            } 
        } else if (name.length && name !== ".") {
            stack.push(name);

        }
        console.log(stack)
    }
    
    return "/" + stack.join("/");
};

```

## 最长重复子串

```js
function longestDupSubstring(s) {
    // 存储最长子串
    let maxStr = ''
    // 滑动窗口遍历字符串
    for (let i = 0; i < s.length; i++) {
        // 窗口宽度为当前子串长度
        for (let j = i + maxStr.length + 1; j < s.length; j++) {
            // 截取当前窗口内子串
            let curStr = s.slice(i, j)
            // 查询左指针后面是否存在相同子串
            if (s.indexOf(curStr, i + 1) > -1) {
                maxStr = curStr
            }
            // 左指针后面不存在相同子串则跳出循环
            else {
                break
            }
        }
    }
    // 返回结果
    return maxStr
}

```

## 格式化金额

```js
function formatAmount(amount) {
    // 去除前导和尾随空格
    amount = amount.trim();

    if (!parseFloat(amount)) {
        return "非法输入";
    }

    amount = parseFloat(amount).toString()

    // 检查小数点后的位数并进行格式化
    if (amount.indexOf('.') === -1) {
        return amount + '.00';
    } else if (amount.indexOf('.') === amount.length - 2) {
        return amount + '0'
    } else {
        return amount
    }
}
```