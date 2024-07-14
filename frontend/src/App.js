import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import BookCard from './components/BookCard';
import Button from 'react-bootstrap/Button';

function App() {
  const [books, setBooks] = useState([]);

  // set the books state once the page loads.
  useEffect(()=>{
    fetch("http://localhost:8000/api/bookCollection/")
    .then(res => res.json())
    .then(data => setBooks(data))
  }, []);

  // handle add book
  const handleAddBook = () =>{
    fetch('http://localhost:8000/api/bookCollection/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: 'David Diary',
        author: 'Carmx',
        pages: "200",
        finished: "Yes"
      })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      })};

  return (
    <div className="App">
        <div><Button variant="primary" onClick={handleAddBook}>Add Book +</Button></div>
        <div style={{display: "flex", justifyContent: "center"}}>
          {books.map((book, i) => <BookCard key = {i} book = {book}></BookCard>)}
        </div>
    </div>
  );
}

export default App;
