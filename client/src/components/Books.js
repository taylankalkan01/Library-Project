import React from 'react'

export default function Books({books ,lentBook,deleteBook,backBook}) {
  return (
    <div className='container mt-5'>
        <table className='table table table-hover table-dark  '>
            <thead>
                <tr>
                    <th scope='col'>ID</th>
                    <th scope='col'>Book Name</th>
                    <th scope='col'>Author</th>
                    <th scope='col'>Department</th>
                    <th scope='col'>Quantity</th>
                    <th scope='col' colSpan="3">Process</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.map((book,index)=>{
                        return(
                            // scope="col"
                            <tr  key={index}>
                                <td >{book._id}</td>
                                <td data-toggle='tooltip' data-placement='top' title={book.comments} >{book.bookName}</td>
                                <td>{book.author}</td>
                                <td>{book.department}</td>
                                <td>{book.quantity}</td>
                               <td><button onClick={()=>deleteBook(book._id)} className='btn btn-danger'>Delete</button></td>
                               <td><button onClick={()=>lentBook(book._id)} className='btn btn-danger'>Lent</button></td>
                               <td><button onClick={()=>backBook(book._id)} className='btn btn-danger'>Back</button></td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
