import remark from 'remark';
import html from 'remark-html';

/**
 * markdownToHtml
 *
 * mdファイル内容をHTML文字列に変換する
 *
 * @param markdown string
 * @returns string
 */
const markdownToHtml = async ( markdown: string ) => {
    const result = await remark()
                                        .use( html )
                                        .process( markdown );

    return result.toString();
}

export { markdownToHtml }
