import React, {useContext} from 'react';
import {Context} from '../index';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "next/link";
import {Button} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import Container from "react-bootstrap/Container";
import {useRouter} from 'next/router'

const JarvisUI = observer(() => {
    const navigate = useRouter()

    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Link style={{color:'white'}} href="/authors">База авторов</Link>
                <Link style={{color:'white'}} href="/books">Библиотека</Link>
                <Link style={{color:'white'}} href="/bookworm">Админка</Link>
            </Container>
        </Navbar>

    );
});

export default JarvisUI;