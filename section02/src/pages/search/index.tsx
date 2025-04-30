import SearchableLayout from "@/components/searchable-layout";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
import Head from "next/head";

//라우터 사용 가능하게 함

//0421 page별 metatag 설정

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
      <Head>
        <title>한입북스-검색결과</title>
        <meta property="og:image" content="/thumbnail.png"/>
        <meta property="og:title" content="한입북스-검색결과"/>
        <meta 
        property="og:description" 
        content="한입북스에 등록된 도서들을 만나보세요"
        />
      </Head>
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