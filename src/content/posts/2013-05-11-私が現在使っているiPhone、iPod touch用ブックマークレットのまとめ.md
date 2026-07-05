---
author: huruya
pubDatetime: 2013-05-11T07:02:32.000Z
title: 私が現在使っているiPhone、iPod touch用ブックマークレットのまとめ
featured: false
draft: false
tags:
  - tech
description: ブックマークレットとは、ブラウザに搭載されている機能を使い、いろいろなことができるものです ここでは、コードのみを書いていきます
---
ブックマークレットとは、ブラウザに搭載されている機能を使い、いろいろなことができるものです
ここでは、コードのみを書いていきます


# 他サービスとの連携系
- Tweetbotでつぶやく
```
javascript:var%20d=document;var%20h=location.href;t=d.title;location.href='tweetbot:///post?text='+encodeURIComponent(''+'%20'+t+'%20'+h+'%20'+'')
```
iOS自体のWebつぶやきだと、タイトルが入らないのでかなり便利です

- RSS化
```
javascript:location.href='http://ic.edge.jp/page2feed/preview/'+location.href
```
RSSが無いページでもRSSを作成出来ます
ちょっと微妙なRSSになってしまいます...
(メニューとかがRSSに入ってしまう)

- livedoorリーダーに登録
```
javascript:void((function()%7Bvar%20e=document.createElement('script');e.setAttribute('src','http://bookmark.sarusaruworld.com/iPhone_livedoor.js');e.setAttribute('id','s2b');document.body.appendChild(e)%7D)())
```

# ...で開く系
- inicoで開く
```
javascript:window.location='inico'+window.location
```
短いですね
有名なニコニコ動画非公式アプリのinicoで開くブックマークレットです

- puffnで開く
```
javascript:location.href='Puffin'+location.href.substring(4);
```
iOSでもFlashが見れる凄いアプリpuffinで開くブックマークレットです

- Clipboxで開く
```
javascript:location.replace('cb'+location.href);
```
ダウンロードアプリのClipboxの内臓ブラウザで開くブックマークレットです
こちらも結構使います
SafariでWeb閲覧しててダウンロードしたい時に使うと捗ります

# 便利系
- ページの最下部へ移動
```
javascript:(window.scrollTo(0,document.documentElement.scrollHeight));
```
最上部にはステータスバーをタップでいけますが、最下部にはいけないので、あると便利です

- スクロール
```
javascript:setInterval(function(s)%7BscrollBy(0,s%7C%7C3)%7D,100)
```
これを使うと自動スクロールが始まります
楽したい時に

- iPhone最適化
```
javascript:(function(a,b,c,d,e)%7Bb=(b=='https:')?b:'http:';c='//amberjack115.herokuapp.com/share/';d=0%7Cnew%20Date().getTime()/1000/60/6;e=a.createElement('scr'+'ipt');e.src=%5Bb,c,'js/simplifystyles.js?',d%5D.join('');e.charset='utf-8';e.async='async';(a.head%7C%7Ca.body%7C%7Ca.documentElement).appendChild(e);%7D)(document,location.protocol);
```
その名前の通り最適化してくれます
スマホ用のページが無い時とかに
- 検索結果を100件表示
```
javascript:%20location.href%20=%20location.href%20+%20'&num=100'
```
Googleの検索結果で、これを使うと100件表示できます
いちいち次へをやるのが面倒い貴方へ

- このページを保存
```
javascript:u=escape(location.href);window.open('http://iwebsaver.com/?u='+u);
```
これを使うとiwebsaverというサイトが立ち上がってサイトをデータスキームに変えてくれます
押したところと同じページか表示されたらブックマークに保存
これで、オフライン時でも見れますが、ページの見た目が変わったりするので、個人的にはOpera miniの保存機能のほうが好きです (無料)

- 自動更新
```
javascript:(function()%7Bvar%20T=prompt('%E6%9B%B4%E6%96%B0%E9%96%93%E9%9A%94%E3%81%AF%EF%BC%9F(%E7%A7%92)','10');if(T&&!isNaN(T))%7Bvar%20F='%3Chtml%3E%3Cframeset%20rows=%22*,0%22%3E%3Cframe%20src=%22'+location+'%22%3E%3Cframe%3E%3C/frameset%3E%3C/html%3E';var%20W=open();with(W.document)%7Bwrite(F);close();%7Dvar%20H='%3Chtml%3E%3Cscript%3Efunction%20R()%7Bparent.frames%5B0%5D.location=%22'+location+'%22;%7DsetInterval(%22R()%22,'+T*1000+');%3C/script%3E%3C/html%3E';with(W.frames%5B1%5D.document)%7Bwrite(H);close();%7D%7D%7D)();
```
これを使うと、何秒に1回とか言うので自動更新ができます

ではでは
