import React, { useState } from 'react';
import './styles/SearchBar.css';
import Quote from './Quote';
import SearchBar from './SearchBar';
import {Row} from 'react-bootstrap';


const Search1 = () => {

    const [quotes, setQuotes] = useState([]);

    const onSearchSubmit = async term => {
        const res = await fetch(`http://localhost:8080/api/products`);
        const quotesArray = await res.json();
        setQuotes(quotesArray);
      }

      const clearResults = () => setQuotes([]);

      const renderedQuotes = quotes
      .filter(quote => {
                if (quotes === '') {
                  return quote;
                }
              })
      .map((quote, i) => {
        return <Quote quote={quote} key={i} />
      })


    return (
      <div className='search'>
        <SearchBar
          onSearchSubmit={onSearchSubmit} clearResults={clearResults} />
        <Row xs={2} sm={3} md={5}>
        {renderedQuotes}
        </Row>
      </div>
    );
};

export default Search1;