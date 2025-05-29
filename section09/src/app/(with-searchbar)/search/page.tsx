import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";
import { delay } from "@/util/delay";
import { Suspense } from "react";
import BookListSkeleton from "@/components/skeleton/book-list-skeleton";
import { Metadata } from "next";

async function SearchResult( {q} : {q:string }) {
  await delay(1500);
  const response  = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${q}`,
    {cache: "force-cache"}
    ); //searchParams는 페이지 컴퍼넌트에게 자동으로 제공되는 쿼리스트링
  if (!response.ok) {
    return <div>오류가 발생했습니다.</div>
  }
  const books : BookData[] = await response.json();

  return (
    <div>
      {books.map((book) => (
        <BookItem key={book.id} {...book} />
      ))}
    </div>
  );
}
export  async function generateMetadata({
  searchParams,
} : {
  searchParams : Promise<{ q?: string}>;
}) :  Promise<Metadata>  {
  //현재 페이지의 메타데이터를 동적으로 생성하는 역할을 함, page의 props를 받을 수 있음
  const { q } = await searchParams;
  return {
    title : `${q} : 한입북스`,
    description : `${q}의 결과입니다.`,
    openGraph : {
      title : `${q} : 한입북스`,
      description : `${q}의 결과입니다.`,
      images : ["/thumbnail.png"]
    }
  };
}

export default async function Page({
  searchParams,
}: {
  searchParams: {
     q?: string;
  }
}) {
  return (
  <Suspense 
    key = {searchParams.q || ""}
    fallback={<BookListSkeleton count={3} />}
    >
    <SearchResult q={searchParams.q || ""}/>
  </Suspense>
    );
}
