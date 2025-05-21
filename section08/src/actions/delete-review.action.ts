"use server";

import { revalidateTag } from "next/cache";

//클라이언트에서 useActionState를 사용할 경우,  컴포넌트의 state까지 함께 받아오게 됨
export async function deleteReviewAction (
    _ : any, 
    formData : FormData
) { 
    const reviewId = formData.get("reviewId") ?.toString();
    const bookId = formData.get("bookid")?.toString(); //재검증을 위해서 bookId가 필요함

    if (!reviewId) {
        return {
            status : false,
            error: "삭제할 리뷰가 없습니다",
        };
    }

    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_SERVER_URL}/review/${reviewId}`,
        {
            method : "DELETE",
        }
       );

       if(!response.ok) {
        throw new Error(response.statusText);
       }
       revalidateTag(`review-${bookId}`); //재검증 코드
       return {
        status: true,
        error : "",
       };
    } catch(err) {
        return {
            status : false,
            error: `리뷰 삭제 실패 : ${err}`,
        };
    }
}