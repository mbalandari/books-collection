import Book from "../Book";
import { Em, P, Panel } from "./styles";


const DetailPanel = ({ book }) => (
    <Panel>
        <Book book={book} isLarge={true} />
        {/* <figure>
            <img src={book.image} alt={book.title} />
            <h3>{book.title}</h3>
            <h4>by {book.author}</h4>
        </figure> */}
        <P>{book.description}</P>
        <P>
            <Em>Published in {book.published}</Em>
        </P>
    </Panel>
)

export default DetailPanel;
