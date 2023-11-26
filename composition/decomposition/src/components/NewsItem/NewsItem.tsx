import React from 'react'
import { News } from '../../interface/News'

type NewsItemProps = {
  news: News
}

const NewsItem: React.FC<NewsItemProps> = ({ news }) => {
  return (
    <li className='news-item'>
      <img src={news.icon} alt={news.icon} />
      <a href={news.url}>{news.title}</a>
    </li>
  )
}

export default NewsItem