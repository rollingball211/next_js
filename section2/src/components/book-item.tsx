import type { BookData } from "@/types";
import Link from "next/link";
export default function BookItem ({
    id,
    title,
    subTitle,
    description,
    author,
    publisher,
    coverImgUrl
} : BookData)  {
    return (
    <Link href={`book/${id}`}>
        <img src = {coverImgUrl}/>
        <div>{title}</div>
        <div>{subTitle}</div>
        <br/>
        <div>{author} | {publisher} </div>
    </Link>
    );
}


//도서데이터 타입을 지정해줘야함.