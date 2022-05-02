import React from 'react';
import {Row, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import star from '../assets/star.png'
import {useRouter} from "next/router"
import {deleteAuthor} from '../http/authorAPI';

const AuthorCard = ({author}) => {
	const navigate = useRouter()
	return (
			<Row className={"authorInfo"} border={'light'}>
				<Col>
				<div >
					{author.surname + ' ' + author.name}
				</div>
				
				<div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
					<div>Год: {author.year}</div>
					
				</div>
				
				<button onClick={() => navigate.replace('/authoredit' + author.id)} className="editButton">&#9998;</button>
				<button onClick={() => {
					deleteAuthor(author.id)
					window.location.reload()}
				} className="deleteButton">&#128465;</button>
				</Col>
			</Row>

	);
};

export default AuthorCard;