import React from 'react'
import { nanoid } from 'nanoid'

export default function NewsCard({newsItem}) {
  return (
    <li key={nanoid()} className='newsCard'>  
            <h1>{newsItem.title}</h1>
            <a href={newsItem.url}>{newsItem.url}</a>
            <p>{newsItem.summary}</p>
    </li>
  )
}
