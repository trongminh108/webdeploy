import { getAllBooks } from "@/apollo-client/queries";
import { useQuery } from "@apollo/client";

function BookList() {
    const { loading, error, data } = useQuery(getAllBooks);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (data) console.log(data);

    return (
        <div>
            {data.books.map((book: any, index: number) => (
                <>
                    <div key={index}>
                        <div>{book.name}</div>
                    </div>
                </>
            ))}
        </div>
    );
}

export default BookList;
