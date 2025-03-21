import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
//라우터 사용 가능하게 함
export default function Page() {
  const router = useRouter(); //객체 생성

  const { q } = router.query;  //쿼리스트링 꺼내오는 코드
  

  return <h1>Search {q} </h1>
}

//함수이름

Page.getLayout = (page : ReactNode) => {
  return <SearchableLayout> {page} </SearchableLayout>
}