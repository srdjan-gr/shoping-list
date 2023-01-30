import React from 'react'
import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri'
import './Pagination.css'

const Pagination = ({ currentPage, setCurrentPage, recordList, setrecordList, perPage, totalPosts, setNPage, nPage }) => {

    let pages = []

    for (let i = 1; i <= Math.ceil(totalPosts / perPage); i++) {
        pages.push(i)
    }


    const forwardPage = () => {
        if (currentPage !== recordList) {
            setCurrentPage(currentPage + 1)
        }
    }


    const backwardPage = () => {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }


    return (
        <article>
            {
                // currentPage !== 1 ? (
                //     <span className='pagination' onClick={backwardPage} ><RiArrowLeftSLine /></span>
                // ) : (
                //     <span></span>
                // )
            }

            {
                pages.map((page, idx) => {
                    return (
                        <span className={`${page == currentPage ? 'activePage' : ''} pagination`}
                            key={idx}
                            onClick={() => setCurrentPage(page)}  > {page}</span>
                    )
                })
            }

            {
                // currentPage !== totalPosts ? (
                //     <span className='pagination' onClick={forwardPage}><RiArrowRightSLine /></span>
                // ) : (
                //     <span></span>
                // )
            }
        </article>
    )
}

export default Pagination