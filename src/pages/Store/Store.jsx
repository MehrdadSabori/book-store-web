import React, { memo, useEffect, useMemo, useState } from 'react'
import './store.css'
import Card from '../../components/card/Card'
import { allBooks } from '../../data';
import { useParams } from 'react-router-dom';


function Store() {
  const {categoryName} = useParams()
  const categoryBoxes = [
    { text: 'تمام کتاب ها', category: 'all_books' },
    { text: 'محبوب ترین کتاب ها', category: 'popular_books' },
    { text: 'جدید ترین کتاب ها', category: 'new_books' },
  ]
  const [category, setCategory] = useState({ text: 'تمام کتاب ها', category: 'all_books' });

  useEffect(()=>{

    if(Boolean(categoryName)){
      const categoryparam = categoryBoxes.find(box => box.category == categoryName)
      setCategory(categoryparam)
    }
    
  }, [categoryName])

  const handelCategory = (item) => {
    setCategory({ text: item.text, category: item.category })
  }

  return (
    <>
      <div className="store_section">
        <div className="category_box">
          <span>{category.text}</span>
          <ul name="category" className="category_list">
            {categoryBoxes.map((categoryBox, index) => (
              <li
                key={index}
                className={category.text === categoryBox.text ? 'category_active_li' : ''}
                value={categoryBox.category}
                onClick={() => handelCategory(categoryBox)}>
                {categoryBox.text}
              </li>
            ))}
          </ul>
        </div>
        {/* ---pagination_section ---- start */}
        <div className="pagination_section">
          {useMemo(()=>{
            return category.category === 'all_books' ? (allBooks.map(book => (

              <Card key={book.id} {...book} hideButton={true} />
  
            ))) : (allBooks.filter(book => book.category === category.category).map(book => (
  
              <Card key={book.id} {...book} hideButton={true} />
  
            )))
          }, [category])}
        </div>
      </div>
    </>
  )
}

export default memo(Store)