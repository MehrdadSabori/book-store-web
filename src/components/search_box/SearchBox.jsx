import React, { memo, useCallback, useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { allBooks } from '../../data';
import { ContextDatas } from '../../context/context';

// icons
import { AiOutlineSearch } from 'react-icons/ai'

function SearchBox({ className }) {
    const contextData = useContext(ContextDatas);
    const navigate = useNavigate()

    const [query, setQuery] = useState('');
    const [focusSearch, setFocusSearch] = useState(false);

    const key = ['author', 'search_key'];

    const chengeHandeler = (event) => {
        setFocusSearch(true)
        setQuery(event.target.value)
    }

    const navigateHandeler = (id) => {
        navigate(`/book-details/${id}`)
        contextData.setShowMenu(false)
    }

    return (
        <div className={`search_section ${className ? className : 'respons_search'}`}>
            <input type="search" className="search_box" placeholder='نام کتاب نام نویسنده ...'
                onChange={(event) => chengeHandeler(event)}
                onBlur={() => setTimeout(() => setFocusSearch(false), 100)}
            />
            <button className='btn btn_search'><AiOutlineSearch /></button>
            <ul className="search_list">
                {focusSearch && allBooks.filter(data => key.some(k => data[k].includes(query))).slice(0, 5).map(data =>
                    <li key={data.id} className="list_item"
                        onClick={() => navigateHandeler(data.id)}
                    >{data.author + ' ، ' + data.search_key.split(' ').slice(0, 2).join(' ')} </li>
                )}
            </ul>
        </div>
    )
}

export default SearchBox
// import React, { memo, useCallback, useContext, useEffect, useMemo, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { allBooks } from '../../data';
// import { ContextDatas } from '../../context/context';
// import { AiOutlineSearch } from 'react-icons/ai';

// function SearchBox({ className }) {
//   const contextData = useContext(ContextDatas);
//   const navigate = useNavigate();
//   const [query, setQuery] = useState('');
//   const [focusSearch, setFocusSearch] = useState(false);

//   const key = ['author', 'search_key'];

//   const filteredBooks = useMemo(
//     () =>
//       allBooks.filter((data) =>
//         key.some((k) => data[k].includes(query))
//       ),
//     [query]
//   );

//   const chengeHandeler = useCallback((event) => {
//     setFocusSearch(true);
//     setQuery(event.target.value);
//   }, []);

//   const navigateHandeler = useCallback(
//     (id) => {
//       navigate(`/book-details/${id}`);
//       contextData.setShowMenu(false);
//     },
//     [navigate, contextData]
//   );

//   return (
//     <div className={`search_section ${className ? className : 'respons_search'}`}>
//       <input
//         type="search"
//         className="search_box"
//         placeholder="نام کتاب نام نویسنده ..."
//         onChange={chengeHandeler}
//         onBlur={() => setTimeout(() => setFocusSearch(false), 100)}
//       />
//       <button className="btn btn_search">
//         <AiOutlineSearch />
//       </button>
//       <ul className="search_list">
//         {focusSearch &&
//           filteredBooks.slice(0, 5).map((data) => (
//             <li
//               key={data.id}
//               className="list_item"
//               onClick={() => navigateHandeler(data.id)}
//             >
//               {data.author + ' ، ' + data.search_key.split(' ').slice(0, 2).join(' ')}{' '}
//             </li>
//           ))}
//       </ul>
//     </div>
//   );
// }

// export default memo(SearchBox);
