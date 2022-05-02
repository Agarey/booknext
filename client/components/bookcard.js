import React, {useEffect, useState, useContext} from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useRouter} from "next/router"
import {deleteBook} from '../http/bookAPI';
import {fetchOneAuthor} from '../http/authorAPI'

const BookCard = ({book}) => {
	const [author, setAuthor] = useState({info: []})

	const navigate = useRouter()
	return (
		<Col md={3} className={"mt-3 bookCard"} >
			<Card className={"bookInfo"} style={{cursor: 'pointer'}} border={'light'}>
				<Image className={"bookPic"}  onClick={() => navigate.replace('/bookcard')}/>
				<button onClick={() => navigate.replace('bookedit/')}>&#9998;</button>
				<button onClick={() => {
					
					window.location.reload()}
				}>&#128465;</button>
				<div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
					<div>Автор: </div>
					
				</div>
				<div></div>
				<div>Год: </div>

			</Card>
		</Col>
	);
};

export default BookCard;