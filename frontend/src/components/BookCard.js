import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const BookCard = ({book}) =>{

  return(<Card style={{ width: '18rem', height: "200px", display: "flex", justifyContent: "center", margin: "20px"}}>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>
          Author: {book.author}
        </Card.Text>
        <Card.Text>
          Pages: {book.pages}
        </Card.Text>
        <Card.Text>
          Finished: {book.finished? "Yes" : "No"}
        </Card.Text>
      </Card.Body>
    </Card>)
};

export default BookCard;