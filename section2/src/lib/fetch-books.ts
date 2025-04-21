import { BookData } from "@/types";
//모든 책의 정보를 불러오는 코드
export default async function fetchBooks(q?:string) : Promise<BookData[]> {
    let url = `https://onebite-books-server-main-vert-five.vercel.app/book`

    //q가 있다면 검색
    if(q){
        url += `/search?q=${q}`
    }

    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error()
        }

        return await response.json();        
    } catch (err) {
        console.log(err);
        return[];
    }
}