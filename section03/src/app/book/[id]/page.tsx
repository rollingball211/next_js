import ClientComponent from "@/app/components/client-component";

export default async function Page({
    params,
}:{
    params: {id : string | string[]} ;
}) {
    
    return ( 
    <div>
        book/[id] page : {params.id} 
        <ClientComponent>
            <></>
        </ClientComponent>
    </div>
    );
}

//...id catch all segment를 쓸 경우 1/3/13/ => 1313 으로 인식