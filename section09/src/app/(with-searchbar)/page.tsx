import BookItem from "@/components/book-item";
import style from "./page.module.css";
import { BookData } from "@/types";
import { Metadata } from "next";


//export const dynamic = "force-dynamic"
//특정 페이지의 유형을 강제로 Static, Dynamic 페이지로 설정
//1. auto  : 기본값, 아무것도 강제하지 않음
//2. force-dynamic: 페이지를 강제로 dynamic 으로 설정함
//3. force-static : 페이지를 강제로 static 으로 설정함
//4. error : 페이지를 강제로 Static 페이지로 설정 (설정하면 안되는 이유 -> 빌드 오류)

//모든 도서의 페이지를 사용하는 부분
async function AllBooks() {
const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`,
  { cache : "force-cache"}
  );
if (!response.ok) {
  return <div>오류가 발생했습니다.</div>;
}

const allBooks: BookData[] = await response.json();

//fetch 요청이 어떤식으로 들어올지 알 수 없음
//any 타입이 아닌 타입 정보를 줘야함
//() => () 면 리턴함수 필요 x 
return(
 <div>  
  {allBooks.map( (book) => (
    <BookItem key ={book.id}{...book} />
  ))}
</div>
);
}

//추천도서 부분
async function RecoBooks() {
const response = await fetch(
  `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/random`,
  {next : {revalidate : 3} }
  )
if (!response.ok) {
  return <div>오류가 발생헀습니다.</div>
}

const recoBooks : BookData[] = await response.json();
return (
<div>
  {recoBooks.map( (book) => (
    <BookItem key = {book.id}{...book}/>
  ))}
</div>)
}


export const metadata : Metadata = {
  title: "한입 북스",
  description : "한입 북스에 등록된 도서를 만나보세요",
  openGraph : {
    title : "한입 북스",
    description:"한입 북스에 등록된 도서를 만나보세요",
    images : ["/thumbnail.png"],
  }
}

export default function Home() {
return (
  <div className={style.container}>
    <section>
      <h3>지금 추천하는 도서</h3>
        <RecoBooks/>
    </section>
    <section>
      <h3>등록된 모든 도서</h3>
        <AllBooks/>
    </section>
  </div>
);
}
