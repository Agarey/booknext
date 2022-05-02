import {useContext, useEffect} from 'react';
import AuthorBar from '../components/authorbar';
import BookBase from '../components/bookbase';
import Pages from '../components/pages';
import {Context} from './index';
import {observer} from 'mobx-react-lite';
import {fetchBooks} from '../http/bookAPI';
import {fetchAuthors} from '../http/authorAPI';
import BookZone from '../biblio/BookZone'
import {Container, Col, Row, Button} from "react-bootstrap";


const books = observer(() => {
  const {book} = new BookZone()
  
  useEffect(() => {
    fetchAuthors().then(data => book.setAuthors(data))
    fetchBooks(null, null, 1, 8).then(data => {
      book.setBooks(data.rows)
      book.setTotalCount(data.count)
      })
  }, [])



  return (
    <Container>
      <Row className="mt-3 mainPage">
        <div className="left-pad">
          <div className="Filters">
          <AuthorBar />
          </div>
          <div className="clearBtn"><Button 
            className="btn btn-dark w-75"
            onClick={() => {
              book.setSelectedAuthor('')
            }}
          >
          Сбросить фильтр
          </Button>
          </div>
        </div>
        <div className="right-pad me-5">
          <BookBase />
          <Pages />
        </div>
      </Row>
    </Container>
  );
});

export default books;
