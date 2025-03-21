import GlobalLayout from "@/components/global-layout";
import "@/styles/globals.css";
import { NextPage } from "next";
import type { AppProps } from "next/app";
import { ReactNode } from "react";

type NextPageWithLayout = NextPage & {
  getLayout : (page : ReactNode) => ReactNode;
}  //프로퍼티 추가 및 페이지 반환값 (ReactNode) 세팅


export default function App({ 
  Component, pageProps, 
}: AppProps & {
  Component : NextPageWithLayout  //App 컴퍼넌트가 받는 Props의 타입에 교집합으로, 컴퍼넌트의 타입을 새로 추가함
}) {

  const getLayout = Component.getLayout ?? ((page : ReactNode) => page );

  return (
    <GlobalLayout>
      {getLayout(<Component {...pageProps} />)}
    </GlobalLayout>
  );
}
