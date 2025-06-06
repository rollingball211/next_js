import { notFound } from "next/navigation";
import style from "./page.module.css";

//export const dynamicParams = false;

export function generateStaticParams( ) {
  return [{id:"1"},{id:"2"},{id:"3"}];
}

export default async function Page({
  params,
}: {
  params: {id :string | string[] }; //id가 배열로 올수도있어서
}) {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/book/${params.id}`);
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
    <div className={style.container}>
      <div
        className={style.cover_img_container}
        style={{ backgroundImage: `url('${coverImgUrl}')` }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.subTitle}>{subTitle}</div>
      <div className={style.author}>
        {author} | {publisher}
      </div>
      <div className={style.description}>{description}</div>
    </div>
  );
}
