export default async function Page({
    searchParams, 
} : {
    searchParams: Promise<{q:string}>;
}) {
    const { q } = await searchParams;
    return <div>SearchPage : {q} </div>
}