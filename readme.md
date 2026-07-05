# blog.huruya.net

Astro + Cloudflare Workers で動かす個人ブログです。

## Local development

```bash
npm install
npm run dev
```

記事は `src/content/posts`、画像などの静的アセットは `public/` を正本として管理します。

## Deploy

```bash
npm run deploy
```

GitHub Actions からのデプロイでは `CLOUDFLARE_API_TOKEN` と `CLOUDFLARE_ACCOUNT_ID` を利用します。

公開先: https://blog.huruya.net
