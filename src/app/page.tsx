import styles from "./page.module.css";
import HomePage from "./home/page";
import { ApolloProvider } from "@apollo/client";
import client from "@/apollo-client/apollo-client";

export default function Home() {
    return <HomePage />;
}
