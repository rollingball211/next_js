//css module
import SearchableLayout from "@/components/searchable-layout";
import style from "./index.module.css";
import { ReactNode } from "react";
import books from "@/mock/books.json"
import BookItem from "@/components/book-item"; //도서 item 렌더링
import { InferGetServerSidePropsType, InferGetStaticPropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random_books";

export const getStaticProps = async() => {
  //컴포넌트보다 먼저 실행되어, 컴포넌트에 필요한 데이터를 불러오는 함수

  //병렬 코드
  const [allBooks,recoBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: {
      allBooks,
      recoBooks
    },
  };
}; 



export default function Home({
  allBooks,
  recoBooks
} : InferGetStaticPropsType<typeof getStaticProps>) {
  //console.log(allBooks);
  return (
  <div className={style.container}>
    <section>
      <h3> 지금 추천하는 도서</h3>
      {recoBooks.map((book)=> (
      <BookItem key= {book.id} {...book}/>))} 
    </section>
    <section>
      <h3> 등록된 모든 도서</h3>
      {allBooks.map((book)=> (
      <BookItem key= {book.id} {...book}/>
      ))}
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
