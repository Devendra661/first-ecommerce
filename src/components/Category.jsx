import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Category({ setfinalProductRes }) {
  let [finalCategory, setfinalCategory] = useState([])
  let [catName, setcatName] = useState('')

  let getCategory = () => {
    axios.get('https://dummyjson.com/products/category-list')
      .then((res) => res.data)
      .then((finalRes) => {
        setfinalCategory(finalRes)
      })
  }

  useEffect(() => {
    getCategory();
  }, [])

  useEffect(() => {
    if (catName !== "") {
      axios.get(`https://dummyjson.com/products/category/${catName}`)
      .then((productRes) => productRes.data)
      .then((finalRes) => {
        setfinalProductRes(finalRes.products)
      })
    }
  }, [catName, setfinalProductRes])

  let cat = finalCategory.map((v, i) => {
    return (
      <li onClick={() => setcatName(v)} key={i} className='bg-[#ccc] p-2 cursor-pointer text-[20px] font-serif font-[500] mb-2'>{v}</li>
    )
  })

  return (
    <div>
      <h3 className='p-2.5 text-2xl font-500'>Product Category </h3>

      <ul>
        {cat}
      </ul>
    </div>
  )
}
