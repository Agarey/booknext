import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../pages/index";
import {Pagination} from "react-bootstrap";
import BookZone from '../biblio/BookZone'


const Pages = observer(() => {
    const {book} = new BookZone()
    const pageCount = 2
    const pages = []

    for (let i = 0; i < pageCount; i++) {
        pages.push(i + 1)
    }

    return (
        <Pagination className="mt-3">
            {pages.map(page =>
                <Pagination.Item
                    key={page}
                    active={page}
                    
                >
                    {page}
                </Pagination.Item>
            )}
        </Pagination>
    );
});

export default Pages;