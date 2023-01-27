import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import './Pagination.css'

const Pagination = ({ currentPage, setCurrentPage }) => {


    const forwardPage = () => {
        setCurrentPage(currentPage + 1)
    }


    const backwardPage = () => {
        if (currentPage != 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    return (
        <article>
            {
                currentPage != 1 ? (
                    <span className='pagination' onClick={backwardPage} ><RiArrowLeftSLine /></span>
                ) : (
                    <span></span>
                )
            }
            <span>{currentPage}</span>
            <span className='pagination' onClick={forwardPage}><RiArrowRightSLine /></span>
        </article>
    )
}

export default Pagination