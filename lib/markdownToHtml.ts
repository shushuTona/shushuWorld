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
