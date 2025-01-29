import React from 'react'
import UseCategory from '../hooks/UseCategory'
// import UseCategory from '../hooks/UseCategory'

const Categories = () => {
    // const categories = UseCategory
  const categories = UseCategory()

  return (
    <div>
       {categories?.map((c)=>(
        <div key={c._id}>
            <a href={`/category/${c.slug}`}>
            {c.name}
            </a>
            </div>
       ))}
    </div>
  )
}

export default Categories
