"use client";
import client from "@/apollo-client/apollo-client";
import { ApolloProvider } from "@apollo/client";
import BookList from "../components/BookList/bookList";

function HomePage() {
    return (
        <ApolloProvider client={client}>
            <div>Hello in next</div>
            <BookList />
        </ApolloProvider>
    );
}

export default HomePage;
