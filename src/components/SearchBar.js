import React, { useState } from 'react'


//ova e kontrolirana input komponenta

function SearchBar({ onFormSubmit }) {


   const [term, setTerm] = useState('');

   const onSubmit = (e) => {
      e.preventDefault();

      //TODO: make sure we call callback from parent comp.
      onFormSubmit(term)
   }

   return (
      // ui segment e od semantic 
      <div className="search-bar ui segment">
         <form className='ui form' onSubmit={onSubmit}>
            <div className="field">
               <label>Video Search</label>
               <input type='text' value={term} onChange={e => setTerm(e.target.value)} />
            </div>
         </form>
      </div>
   )
}

export default SearchBar
