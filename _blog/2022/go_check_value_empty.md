---
title: "Golang 各値の空判定方法"
date: "2022/04/25"
tags: [Golang]
---

Golangでの値の空判定方法

---

## string

```go
const str  = "";

if len( str ) === 0 {
    // 空の時の処理
}
```
