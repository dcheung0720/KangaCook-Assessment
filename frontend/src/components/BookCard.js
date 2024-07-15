import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import EditBookForm from './EditBookForm';

const BookCard = ({book, id}) =>{

  const [editFormVis, setEditFormVis] = useState(false);

  return(<Card style={{ width: '18rem', height: "275px", display: "flex", justifyContent: "center", margin: "20px"}}>
      {editFormVis && <EditBookForm book = {book} id = {id}></EditBookForm>}
      <Card.Body>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Card.Title>{book.title}</Card.Title>        
          <Button variant="primary" type="submit" style={{marginLeft: "35%"}} onClick={() => setEditFormVis((prev) => !prev)}>
                Edit
          </Button>
        </div>
        <hr></hr>
        <Card.Text>
          <b>Author:</b> {book.author}
        </Card.Text>
        <hr></hr>
        <Card.Text>
          <b>Pages:</b> {book.pages}
        </Card.Text>
        <hr></hr>
        <Card.Text>
          <b>Finished:</b> {book.finished? "Yes" : "No"}
        </Card.Text>
      </Card.Body>
    </Card>)
};

export default BookCard;