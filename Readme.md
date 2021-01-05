# 外部から読み込んだ SVG ファイルを CSS で色を変更する方法

## use 方式(使い回しができる)

外部から参照するオブジェクトに id を設定する必要があります。
※外部参照しやすいように、symbol タグでパスを囲って置くことをオススメします。

use タグの xlink:href 属性に、SVG アイコンのファイルパス#id 属性をセットすることで、外部の SVG ファイルを読み込みます。

**なお、react の場合は、 xlink: href ではなく xlinkHref を利用します。**

## 参考

-[<color> - CSS: カスケーディングスタイルシート | MDN](https://developer.mozilla.org/ja/docs/Web/CSS/color_value)

-[use - SVG: Scalable Vector Graphics | MDN](https://developer.mozilla.org/ja/docs/Web/SVG/Element/use)
