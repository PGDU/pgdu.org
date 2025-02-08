# PGDU website

Statis website built with svelte and deployed to github pages.

## Background

This is how we created this source 

### svelte

Following [getting-started](https://svelte.dev/docs/svelte/getting-started)

```sh
npx sv create pgdu.org
cd pgdu.org
npm install
npm run dev
```

### deploy it to github pages

Lets use static site generation [adapter-static](https://svelte.dev/docs/kit/adapter-static)

The `deploy.yml` in svelte docs had odd issues so instead used [vite-github-pages](https://vite.dev/guide/static-deploy.html#github-pages)

