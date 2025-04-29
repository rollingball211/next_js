import ClientComponent from "../../components/client-component";


export default async function Page({
    searchParams, 
} : {
    searchParams: {q?:string;};
}) {
    const { q } = await searchParams;
    return (
    <div>
        SearchPage : {searchParams.q} 
        <ClientComponent>
        <></>
        </ClientComponent>
            
        
    </div>
    );
}