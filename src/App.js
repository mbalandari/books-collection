import { useEffect, useState } from "react";


const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://book-club-json.herokuapp.com/books")
        console.log(`returns fetch req: `, response)
        const books = await response.json()
        console.log(`json response: `, books)
        setBooks(books)
      } catch (errors) {
        console.log(errors)
      }
    }


    fetchData()
  }, [])

  console.log(`the books: `, books)

  return (
    <div>
      Hey!
    </div>
  );
}

export default App;

