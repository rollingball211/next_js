"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function createReviewAction (formData : FormData) {
    const content = formData.get("content")?.toString();
    const author = formData.get("author")?.toString();
    const bookId  = formData.get("bookId")?.toString();


    console.log(bookId,author,content);
    //api 호출 
    if ( !bookId || !content || !author) {
      return;
    } 

    
    
    try{
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_SERVER_URL}/review`,
        {
          method:"POST",
          body : JSON.stringify({bookId,content,author}), //객체를 직렬화해서 전달
        }
        );
        console.log(response.status);
        revalidateTag(`review-${bookId}`);

    } catch(err) {
      console.error(err);
      return;
    }    
  }