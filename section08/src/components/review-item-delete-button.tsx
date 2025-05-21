'use client'

import { deleteReviewAction } from "@/actions/delete-review.action";
import { useActionState, useEffect, useRef } from "react";

export default function ReviewItemDeleteButton ({
    reviewId,
    bookId,
} :{
    reviewId: number; 
    bookId : number;
}) {
    //1. ref 객체를 form에 연결함

    //div태그가 클릭이 되었을때 requestSubmit()으로 form태그를 강제로 제출하게함.
    //submit은 유효성 검사 및 이벤트 핸들러등을 다 무시하고 강제로 폼을 제출함
    //requestSubmit()의 경우, 사용자가 submit 버튼을 클릭한것과 같이 동작하기에, 안전하게 동작할 가능성이 높음

    //불러온 id값으로 서버 액션을 실행함
    const formRef = useRef<HTMLFormElement>(null);
    const [state, formAction , isPending] = useActionState(deleteReviewAction,null); //서버액션 호출

    //에러 핸들링!

    useEffect( () => {
        if(state && !state.status) {
            alert(state.error);
        }
    }, [state]);
    return (
        <form ref = {formRef} action = {formAction}>
            <input name = "reviewId" value={reviewId}  readOnly hidden/>
            <input name = "bookId" value={bookId} readOnly hidden/>
            {isPending ? (
                <div>...</div>
            ) : (
                <div onClick={() => formRef.current?.requestSubmit()}>
                삭제하기
            </div> 
            )}      
        </form>
    );
}