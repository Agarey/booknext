import React, {useContext, useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../pages/index";
import {Col, Row, Card, Dropdown, Button} from "react-bootstrap";
import {fetchAuthors} from '../http/authorAPI' 
import BookZone from '../biblio/BookZone'


const AuthorBar = observer(() => {
	const {book} = new BookZone()
	const {author} = new BookZone()
	useEffect(() => {
    fetchAuthors(null, null, 1, 8).then(data => {
      author.setAuthors(data.rows)
      author.setTotalCount(data.count)
      })
  }, [])
	return (
		<Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle className="btn btn-dark dropdown-toggle w-75">{'Выберите автора'}</Dropdown.Toggle>
            <Dropdown.Menu>
                
                	<Dropdown.Item >
                		
                    </Dropdown.Item>
                		
            </Dropdown.Menu>
            <Button 
            className={"btn btn-primary ghost-style btn-sm ms-2"}>
         	 X
          	</Button>
        </Dropdown>
	);
});

export default AuthorBar;