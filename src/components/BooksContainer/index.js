import { BookList, Container, H2 } from "./styles";
import Book from '../Book';


const BooksContainer = ({ books, pickBook }) => (
    <Container>
        <H2>All Books</H2>
        <BookList>
            {books.map((book) => (
                <Book key={book.id} book={book} pickBook={pickBook} />
            ))}
        </BookList>
    </Container>
);

export default BooksContainer;
