import React, { useEffect, useState } from 'react';

import './styles/SearchBar.css'

const SearchBar = ({onSearchSubmit}) => {
    const [term, setTerm] = useState('');

    useEffect(() => {
        if(term !== ''){
            onSearchSubmit(term);
        }
    }, [term, onSearchSubmit]);

    return (
      <div className='searchbar'>
        <input 
            className='searchbar-input' 
            type='text' 
            placeholder="Search product..."
            onChange={e => setTerm(e.target.value)}
            value={term}/>
      </div>
    );
};

export default SearchBar;