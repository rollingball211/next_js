import { notFound } from "next/navigation";
import ReviewEditor from "@/components/review-editor";
import style from "./page.module.css";
import { BookData, ReviewData } from "@/types";
import ReviewItem from "@/components/review-item";
import Image from "next/image";

//export const dynamicParams = false;

export async function generateStaticParams( ) {
  const response = await fetch (`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book`);
  if(!response.ok) {
    throw new Error(response.statusText);
  }
  const books : BookData[] = await response.json();
  
  
  return books.map((book) => ({
    id: book.id.toString(),
  }));
} 

//배포할 경우 vercel을 이용하기 때문에 정적 페이지를 이용하면 문제가 있음

async function BookDetail( {bookId} : {bookId : string}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${bookId}`,
        {cache : "force-cache"});
  if (!response.ok) {
    if (response.status === 404) {
      notFound(); // 내부적으로 throw → 아래 코드 실행 X
    }
    return <div>오류가 발생했습니다.</div>;
  }

  const book = await response.json();

  const {
     id,
     title,
     subTitle, 
     description, 
     author, 
     publisher, 
     coverImgUrl } = book;

  return (
    <section>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <Image src={coverImgUrl} width= {240} height = {300} alt = {`도서 ${title}의 표지 이미지`} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </section>
  );
}


async function ReviewList({bookId} : {bookId:string}) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/book/${bookId}`
    , {next : { tags: [`review-${bookId}`] } } 
  );

  if (!response.ok) {
    throw new Error(`Review Fetch Failed : ${response.statusText}`);
  }

  const reviews : ReviewData[] = await response.json();

  return <section>
    {reviews.map((review) => (
      <ReviewItem key = {`review-item-${review.id}`} {...review }/>
    ))}
  </section>;
}

export async function generateMetadata({
  params,
}: {params : Promise<{id: string}>;
})  {
  //api를 이용해 도서의 정보를 불렁모 
  const { id } = await params;
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${id}`,
  {cache : "force-cache"});

  if(!response.ok) {
    throw new Error(response.statusText);
  }

  const book : BookData = await response.json();
  return {
    title : `${book.title} - 한입북스`,
    description : `${book.description}`,
    openGrpah: {
      title : `${book.title} - 한입북스`,
      description : `${book.description}`,
      Images : [book.coverImgUrl],
    },
  };
}


export default function Page({
  params,
}: {
  params: {id :string };
}) {
  return (
  <div className={style.container}>
    <BookDetail bookId={params.id}/>
    <ReviewEditor bookId={params.id}/>
    <ReviewList bookId={params.id}/>
  </div>
  );
}
