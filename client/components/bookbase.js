import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../pages/index";
import {Row} from "react-bootstrap";
import BookCard from "./BookCard";
import BookZone from '../biblio/BookZone'

const BookBase = observer(() => {
	const {book} = new BookZone()

	return (
		<Row className="d-flex bookBase">
			
				<BookCard />

		</Row>
	);
});

export default BookBase;