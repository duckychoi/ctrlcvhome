This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Project Map

- Main app entry: `src/app/page.tsx`
- Q&A page route: `src/app/qa/page.tsx`
- Shared header: `src/app/components/Header.tsx`

## 3D Animation Map (QA)

The QA 3D scene is grouped under `src/features/qa-3d`.

- Scene root: `src/features/qa-3d/scene/ConnectorsScene.tsx`
- Object motion/physics behavior: `src/features/qa-3d/scene/Connector.tsx`
- Cursor interaction body: `src/features/qa-3d/scene/Pointer.tsx`
- 3D model and material: `src/features/qa-3d/scene/Model.tsx`
- Overlay UI on top of 3D: `src/features/qa-3d/ui/QAOverlay.tsx`
- Overlay styles: `src/features/qa-3d/ui/qa-overlay.module.css`
- QA page shell styles: `src/features/qa-3d/ui/qa-page.module.css`

If you only want to tune 3D animation behavior, start with:
`src/features/qa-3d/scene/Connector.tsx` and `src/features/qa-3d/scene/ConnectorsScene.tsx`.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
