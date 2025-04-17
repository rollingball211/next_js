import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import { ReactNode } from "react";
import books from "@/mock/books.json"
import BookItem from "@/components/book-item";
//라우터 사용 가능하게 함

// export const getServerSideProps= async() => {

// };
export default function Page() {

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