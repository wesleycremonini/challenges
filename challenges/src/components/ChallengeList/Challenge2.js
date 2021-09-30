import React, { useState, useEffect } from 'react';
import Spinner from '../Spinner'


function Challenge2() {
    const [books, setBooks] = useState(null);
    const [loading, setLoading] = useState(null)

  useEffect(() => {
    getData();

    async function getData() {
        setLoading(true)
        const response = await fetch("https://www.anapioficeandfire.com/api/books");
        const data = await response.json();
        setBooks(data);
        setLoading(false);  
    }
  }, []);

  if(loading) return <Spinner/>

  return (
    <div>
      <h1>Game of Thrones Books</h1>
        {books && (
            <div className="books">
                {books.map((book, index) => (
                <div key={index}>
                    <h2>{book.name}</h2>
                </div>
                ))}
            </div>
        )}
    </div>
  )
}

export default Challenge2;
