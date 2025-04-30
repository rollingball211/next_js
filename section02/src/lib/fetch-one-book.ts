import { BookData } from "@/types";

export default async function fetchOneBook(
    id:number
    ):Promise<BookData| null> {
    const url = `https://onebite-books-server-main-vert-five.vercel.app/book/${id}`

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error()
        }
        return await response.json();
    } catch (err) {
        console.log(err);
        return null; //하나를 부르기에 배열형태를 반환하면 안됨
    }
}