---
title: EDCBに登録するBondriver Proxyとかはlocalhost指定をしておこう
date: 2022-04-17 00:42:11
tags: DTV
---
意外と簡単なことですが割と重要なことなので。
<!-- more -->
```[OPTION]
; サーバのアドレスを指定
ADDRESS=127.0.0.1
; サーバのポートを指定
PORT=1192
; サーバ側で指定した BonDriver のグループ名を指定
BONDRIVER=hoge
; このクライアントからの接続でのチャンネル変更の優先度 / 0～255の数字(大きな値ほど優先で同値の場合は対等、ただし255の場合は排他ロックになる)
CHANNEL_LOCK=255
```

EDCBに登録する、同じPCのサーバアプリに接続するBondriverはlocalhostで指定しておきましょう。(あるいは127.0.0.1)

ここでサーバーのIP(192.168.hoge.huga)などを指定しても動くには動きますが、一旦NICを通るので性能的に微妙なのと、ルーター障害などでIPが降られなくなった時に死にます。

127.0.0.1やlocalhostとして指定しておくとPC内部のループバックデバイスを通るのでNICを経由せず少しはパフォーマンスが上がるのと耐障害性も増します。

~~私は鯖の運用を初めて数年経ってから気づきました~~