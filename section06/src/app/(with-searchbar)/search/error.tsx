"use client";
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

 
//error 객체를 이런 식으로 props로 에러 컴퍼넌트에게 전달해 준다.
/*reset (함수) , 다시한번 컴포넌트들을 렌더링 시킴
-> 서버쪽 컴포넌트를 재실행하지 않음.. 클라이언트 내부 오류는 복구 가능함

*/
export default function Error( {
    error, reset
 } : { 
    error :Error; reset : () => void;
}) {
    const router = useRouter();

    useEffect(() => {
        console.log(error.message);
    }, [error]);

    return (
    <div>
        <h3>검색 과정에서 오류가 발생했습니다!</h3>
        <button onClick={() => {
            startTransition( () => {
                router.refresh(); //현재 페이지에 필요한 서버 컴포넌트들을 다시 불러옴
                reset(); // 에러상태를 초기화하고 컴포넌트들을 재렌더링함
            });
            }}>다시 시도</button>
    </div>
    );
}