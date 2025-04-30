import { useRouter } from "next/router";
import { ReactNode, useEffect, useState } from "react"
import style from "./searchable-layout.module.css"

export default function SearchableLayout({
    children,
} : {
    children :ReactNode
}
){
    const router = useRouter();
    const [search, setSearch] = useState(""); //검색어를 저장할 state
    const q = router.query.q as string; 

    useEffect(() => {
        setSearch(q || "");
    }, [q]);
    
   
    const onChangeSearch = (e : React.ChangeEvent<HTMLInputElement>) => { 
        setSearch(e.target.value);
    }
    // 이벤트 발생시킴
    //React.ChangeEvent<HTMLInputElement> -> 리액트에서 발생한 체인지이벤트 객체타입, HTMLINPUT에서 발생한 이벤트 타입이다 라는것을 표시
    
    const onSubmit  = () => {
        if(!search || q === search ) return; //입력값이 없다면 리턴
        router.push(`/search?q=${search}`) //쿼리스트링 설정
    }; 

    const onKeyDown = (e : React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key ==="Enter") {
            onSubmit();
        }
    };

    


    return( 
    <div>
        <div className={style.searchbar_container}>
            <input 
            value ={search}
            onKeyDown={onKeyDown}
            onChange ={onChangeSearch} 
            placeholder="검색어를 입력하세요 ... "/> 
            <button onClick={onSubmit}>검색</button>
        </div>
        {children}
    </div>
    );
}