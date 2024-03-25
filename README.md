##### 생각해보기

## ⚫️ 메타데이터

메타데이터는 데이터에 대한 데이터로, 주로 데이터의 특성, 구조, 관리 등을 설명하는 정보이다.

블로그에서는 포스트의 제목, 작성자, 작성일, 태그, 카테고리, 요약 등과 같은 정보를 메타데이터로 사용함.

이러한 정보는 포스트의 관리 및 검색을 용이하게 하고, 검색 엔진이 포스트를 색인화할 때 사용될 수 있음.

(NEXTjs 메타데이터)[https://nextjs.org/docs/app/building-your-application/optimizing/metadata]

```
<블로그에서의 메타데이터 활용>

[ 포스트 검색 및 필터링 ]

메타데이터를 기반으로 포스트를 검색하거나 필터링하여 특정 주제나 작성자의 포스트를 찾을 수 있습니다.

[ SEO (Search Engine Optimization) ]

검색 엔진이 웹페이지를 색인화할 때 메타데이터를 활용하여 페이지의 내용을 이해하고 노출시킵니다.
즉, 메타데이터를 효율적으로 작성하면 검색 결과에 노출되는 확률이 높아집니다.

[ 소셜 미디어 공유 ]

메타데이터를 사용하여 소셜 미디어에서 웹페이지가 공유될 때 미리보기 정보를 제공할 수 있습니다.
```

markdown예시

```yaml
title: 'My First Post'
date: '2024-03-22'
author: 'John Doe'
tags:
  - Next.js
  - Blogging
```

## ⚫️ 폴더 어떻게 불러올까 ?

1. 블로그 포스트를 포함하는 디렉토리를 만들기 </br>
   ex) posts 디렉토리를 생성

2. 각 포스트는 개별 파일로 저장됨(파일 이름은 해당 포스트의 고유 식별자로 사용될 수 있다)
   ex)예를 들어, 2024-03-22-my-first-post.md와 같은 형식

3. 포스트 파일을 동적으로 불러오기 위해 Next.js의 `파일 시스템 라우팅`을 활용
   (getStaticProps 또는 getServerSideProps)

## ⚫️ 파일은 어떻게 불러올까

fs 모듈을 사용하여 파일 시스템에서 데이터를 읽기

각 포스트 파일의 프론트 매터를 파싱하여 필요한 메타데이터를 추출

필요에 따라 Markdown 내용을 HTML로 변환하여 블로그 페이지에 렌더링!

## ⚫️ 데이터 자료구조는 어떻게 만들까

불러온 데이터를 "배열"이나 "객체"형태로 구성

페이지 컴포넌트에서 `getStaticProps` 또는 `getServerSideProps`를 사용하여 데이터를 가져와서 페이지에 전달

데이터를 사용하여 블로그 페이지를 렌더링

이를 위해 React 컴포넌트를 활용하여 각 포스트의 메타데이터와 내용을 표시할 수 있다


--dark mode -
[darkmode nextjs](https://tailwindcss.com/docs/dark-mode)







@Error

npm uninstall autoprefixer postcss tailwindcss​


tailwind공홈
https://tailwindcss.com/docs/guides/nextjs



content layer

https://miryang.dev/blog/build-blog-with-nextjs

mdx마크다운이 원하는대로 적용이 안됨

```tsx
//tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};

```