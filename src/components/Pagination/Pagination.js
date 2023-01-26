import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import './Pagination.css'

const Pagination = () => {
    return (
        <article>
            <span><RiArrowLeftSLine /></span>
            <span>1</span>
            <span><RiArrowRightSLine /></span>
        </article>
    )
}

export default Pagination