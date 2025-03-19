import { ReactNode } from "react";
import Link from "next/link";
import style from "./global-layout.module.css";
export default function GlobalLayout({
    children,
}: {
    children : ReactNode;
}) {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Link href={"/"}> ONEBITE BOOKS</Link>
      </header>
      <main>
        {children}
      </main>
      <footer>@제작 jinhyeon</footer>
    </div>
    );
}