import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';
import BookCard from './components/BookCard';
import Button from 'react-bootstrap/Button';
import BookForm from './components/BookForm';
import EditBookForm from './components/EditBookForm';

function App() {
  const [books, setBooks] = useState([]);
  const [bookFormVis, setBookFormVis] = useState(false);

  // set the books state once the page loads.
  useEffect(()=>{
    fetch("http://44.220.147.176:8000/api/bookCollection/")
    .then(res => res.json())
    .then(data => setBooks(data))
  }, []);

  return (
    <div className="App" style={{paddingTop: "10px"}}>
        <div className = "content" style = {{width: "80%"}}>
          <div><Button variant="primary" onClick={() => setBookFormVis(prev => !prev)}>Add Book +</Button></div>
          <div style={{display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
            {books.map((book, i) => <BookCard key = {i} book = {book} id = {i}></BookCard>)}
          </div>
        </div>
        {bookFormVis && 
            <div style = {{width: "100%", height: "100%", position: "absolute", backgroundColor: "rgba(0,0,0,0.4)", marginTop: window.scrollY - 100}} onClick={() => setBookFormVis(prev => !prev)}>
              <BookForm></BookForm>
            </div>
          }
    </div>
  );
}

export default App;
