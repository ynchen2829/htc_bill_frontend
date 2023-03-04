This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app) styling using [TailwindCSS](https://tailwindcss.com/), backend supported by [MongoDB](https://www.mongodb.com/). We aim to present Texas Legislative Bills more presentable and approachable to increase inclusiveness and participation in politics, especially within the younger generation. We provide search, filter, and detail services that help us understand the legislative process in a more tangible way. 

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project contains hero page, Home (Search) page with indexing, Information Page, and ~~Graveyard~~.

## Backend

Our backend is powered by python script and OpenAI API to generate summaries and other key information of the bills. Please see our backend [GitHub Page](https://github.com/ynchen2829/htc_bill_backend) for more information.


## Deploy on Vercel

We have deployed to [Vercel](https://htc-bill-frontend.vercel.app/), but we are currently experiencing server timeout due to limited server. We will investigate this issue further and decide if our service will need to be upgraded. 
