---
title: "Node.js esbuild設定方法"
date: "2022/04/25"
tags: [Node.js, esbuild]
---

記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章記事の導入文章

---

## 見出し2

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

### 見出し3-1

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

```javascript
const num = 100;
function hoge() {
    return num;
}

const piyo = (a, b) => {
    return a + b;
}

hoge();
```

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

---

## 見出し2

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

### 見出し3-2

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

```typescript
// @ts-ignore
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import remarkSlug from 'remark-slug'

// @ts-ignore
// import rehypeSanitize from 'rehype-sanitize';

import rehypeFormat from 'rehype-format';

// @ts-ignore
import rehypeStringify from 'rehype-stringify';

// @ts-ignore
import remarkPrism from 'remark-prism';

const array = [];
const obj = {
    a: 100,
    b: true,
    c: undefined,
    d: null,
}

/**
 * markdownToHtml
 *
 * mdファイル内容をHTML文字列に変換する
 *
 * @param markdown string
 * @returns string
 */
const markdownToHtml = async ( markdown: string ) => {
    const file = await unified()
                                .use( remarkParse )
                                .use( remarkSlug )
                                .use( remarkPrism, {
                                    transformInlineCode: true,
                                } )
                                .use( remarkRehype )
                                .use( rehypeFormat )
                                .use( rehypeStringify )
                                .process( markdown );

    return String( file );
}

export { markdownToHtml }

```

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文

- XXX
    - XXX
    - XXX
    - XXX
- XXX
- XXX

記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文記事の本文
