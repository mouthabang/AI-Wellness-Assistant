import React from 'react'

export const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    return (
        <nav className="text-center" aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px">
                {pageNumbers.map( (number, i) => (
                    <li  key={number}>
                        <button onClick={() => paginate(number)}
                       
                         className="px-3  py-2 border border-gray-300 bg-[#E60000] text-white  ">
                            {number} 
                         </button>
                    </li> 
                ))}
            </ul>
        </nav>
    )
}
