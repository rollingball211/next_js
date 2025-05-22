import Link from "next/link";
import { ReactNode } from "react"

export default function Layout({
    children,
    sidebar,
} : {
    children : ReactNode;
    sidebar : ReactNode;
}) {
    return (
    <div>
        <div>
            <Link href={"/parallel"} > parallel</Link>
        </div>
        {sidebar}
        {children}
    </div>
    );
}