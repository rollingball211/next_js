import { useRouter } from "next/router";
//라우터 사용 가능하게 함
export default function Page() {
  const router = useRouter(); //객체 생성

  const { q } = router.query;  //쿼리스트링 꺼내오는 코드
  

  return <h1>Search {q} </h1>
}