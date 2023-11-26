import dataNew1 from '../../data/dataNew1.json'
import NewsItem from '../NewsItem/NewsItem';

/**
 * Делается запрос на сервер по переданному URL 
 * получает список новостей и поштучно передает их в NewsItem
 */

type NewsListProps = {
  url: string
}

const NewsList: React.FC<NewsListProps> = ({ url }) => {
  const newsList = url;
  console.log(newsList);  

  return (
    <ul className='news-list'>
      {
        dataNew1.map(item => <NewsItem news={item} key={item.id}/>)
      }
    </ul>
  )
}

export default NewsList