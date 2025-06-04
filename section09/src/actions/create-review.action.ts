"use server";

import {revalidateTag } from "next/cache";

export async function createReviewAction (
  _ : any,  //editor에서 쓰는 함수의 state부분을 사용하지 않겠다는 의미
  formData : FormData
  ) {
    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();
    const bookId  = formData.get("bookId")?.toString();


    console.log(bookId,author,content);
    //api 호출 
    if ( !bookId || !content || !author) {
      return {
        //undefined를 더이상 로딩하지 않음 -> 연결된 함수에서 undefined를 return하면 안됨
        status: false,
        error: "리뷰 내용과 작성자를 입력해주세요",
      };
    } 

    try{
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
        {
          method:"POST",
          body : JSON.stringify({bookId,content,author}), //객체를 직렬화해서 전달
        }
        );
        
        if(!response.ok) {
          throw new Error(response.statusText);
        }

        revalidateTag(`review-${bookId}`);
        return {
          status: true,
          error: "",
        };
    } catch(err) {     
      return {
        status : false,
        error : `리뷰 저장에 실패했습니다 : ${err}`,
      }
    }    
  }