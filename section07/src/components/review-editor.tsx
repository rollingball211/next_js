"use client";

import style from "./review-editor.module.css"
import { createReviewAction } from "@/actions/create-review.action";
import { useActionState, useEffect } from "react";

export default function ReviewEditor({bookId} : {bookId : string}) {

  const [state,formAction , isPending] = useActionState(createReviewAction, null);

  //state값이 바뀔때 검증하기 위해서 useEffect를 사용함
  //state값이 존재하며 status가 false라면 에러를 발생시켜야함
  useEffect(() => {
    if(state && !state.status) {
      alert(state.error);
    }
  } , [state]);

  //pending의 상태에 따라 disabled의 유무를 판단함.
  
    return( 
    <section>
      <form className={style.form_container}
        action ={formAction}
        >
        <input name = "bookId" value ={bookId} hidden readOnly/>
        <textarea  disabled={isPending} required name="content" placeholder="리뷰 내용"/>
        <div className = {style.submit_container}>
          <input disabled={isPending}  required name="author" placeholder="작성자"/>
          <button disabled={isPending} type = "submit" >
            {isPending ? "..." : "작성하기"} 
          </button>
        </div>
      </form>
    </section>
    );
  }