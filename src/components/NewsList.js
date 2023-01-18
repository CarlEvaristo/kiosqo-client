import React from 'react'
import "./NewsList.css"
import NewsCard from './NewsCard'

export default function NewsList({data}) {
    console.log(data)

    let newsElements = data.map(newsItem => <NewsCard newsItem={newsItem} />)
    return (
        <ul className='newsList'>
            {newsElements}
        </ul>
    )
}
