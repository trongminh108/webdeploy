import { gql } from '@apollo/client';

const getAllBooks = gql`
    query getAllBooksQuery {
        books {
            id
            name
            genre
            authorId
        }
    }
`;

const getBookById = gql`
    query getBookByIdQuery($bookId: ID!) {
        book(id: $bookId) {
            name
            genre
            author {
                name
                age
                books {
                    name
                }
            }
        }
    }
`;

const getAllAuthors = gql`
    query getAllAuthors {
        authors {
            id
            name
            age
        }
    }
`;

export { getAllBooks, getBookById, getAllAuthors };
