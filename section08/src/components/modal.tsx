"use client";
import { ReactNode, useEffect, useRef } from "react";
import style from "./modal.module.css";
import { createPortal } from "react-dom";

export default function Modal( {children} : {children : ReactNode}) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    //modal을 먼저 실행하는 코드
    //열려있지 않으면 모달을 강제로 열고 ,스크롤을 제일 위로 올림
    useEffect (() => {
        if (!dialogRef.current?.open) {
            dialogRef.current?.showModal();
            dialogRef.current?.scrollTo({
                top : 0,
            });
        }
    }, []);
    return createPortal(
    <dialog className={style.modal} ref={dialogRef}>{children}</dialog>,
    document.getElementById('modal-root') as HTMLElement);

    //dialog 태그는 모달의 역할을 하기 때문에 꺼져있는 상태로 렌더링이 됨
    // 처음엔 모달이 안보이게 렌더링이 되기 때문에 추가적인 작업 필요
}