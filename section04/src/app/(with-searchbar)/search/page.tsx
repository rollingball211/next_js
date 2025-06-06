import books from "@/mock/books.json";
import BookItem from "@/components/book-item";
import { BookData } from "@/types";

export default async function Page({
  searchParams,
}: {
  searchParams: {
     q?: string;
  }
}) {
  const response  = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/search?q=${searchParams.q}`
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
