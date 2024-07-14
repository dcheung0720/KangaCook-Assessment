import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = ({book}) =>{

  return(<Card style={{ width: '18rem', height: "225px", display: "flex", justifyContent: "center", margin: "20px"}}>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
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