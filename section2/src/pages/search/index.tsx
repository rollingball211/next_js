import SearchableLayout from "@/components/searchable-layout";
//import { useRouter } from "next/router";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
//라우터 사용 가능하게 함

export const getServerSideProps= async (
  context : GetServerSidePropsContext
  ) => {

  const q = context.query.q; 
  //static으로 부른다면 queryProperty가 없음, build time에 실행되기 때문에 queryString이 존재하지 않음
  const books  = await fetchBooks(q as string);
  //서치 페이지는 ssg방식으로 동작 불가능함
  return {
    props: {
      books,
    },
  };
 };
export default function Page({
  books
} : InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book}/>
      ))}
      
     </div>
  );
}

//함수이름

Page.getLayout = (page : ReactNode) => {
  return <SearchableLayout> {page} </SearchableLayout>
}