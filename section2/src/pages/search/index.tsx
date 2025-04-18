import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import BookItem from "@/components/book-item";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBooks from "@/lib/fetch-books";
//라우터 사용 가능하게 함

export const getServerSideProps= async (
  context : GetServerSidePropsContext
  ) => {

  const q = context.query.q;
  const books  = await fetchBooks(q as string);
  
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