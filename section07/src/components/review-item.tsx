import { ReviewData } from "@/types";
import style from "./review-item.module.css";

export default function ReviewItem({
    id,
    content,
    author,
    createdAt,
    bookId,
}: ReviewData) { //props의 타입은 ReviewData! 
    return <div>
        <div>{author}</div>
        <div>{content}</div>
        <div>
            <div>{new Date(createdAt).toLocaleDateString()}</div>
            <div>삭제하기</div>
        </div>
    </div>
}