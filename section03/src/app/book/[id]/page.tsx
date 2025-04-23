export default async function Page({
    params,
}:{
    params: Promise<{id : string}>
}) {
    const {id} = await params;
    return <div>book/[id] page : {id} </div>
}

//...id catch all segment를 쓸 경우 1/3/13/ => 1313 으로 인식