//css module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";

export default function Home() {
  return (
  <div className={style.container}>
    <section>
      <h3> 지금 추천하는 도서</h3>
    </section>
    <section>
      <h3> 등록된 모든 도서</h3>
    </section>
  </div>
  );

}


Home.getLayout = (page : ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>
}

//ReactNode : 모든 페이지가 리액트 컴포넌트 이기에 사용함
//page라는 매개변수로 해당 레이아웃이 리턴된 페이지를 보여줌
// -> 특정 페이지 컴포넌트에 써져있는 컴포넌트를 묶어서 리턴해준다
