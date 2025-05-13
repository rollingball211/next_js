import BookItemSkeleton from "./book-item-skeleton";

export default function BookListSkeleton({
    count,
} : {
    count :number;
}) {
    return new Array(count)
    .fill(0)
    .map((_,idx) => (
    <BookItemSkeleton key={`book-item-skeleton-${idx}`}/>
    ));  //count만큼 배열을 받고 초기엔 0으로 채움,
}