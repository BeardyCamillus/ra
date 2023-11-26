import { VideoData } from '../interfaces/VideoData';
import { DateTimePretty } from './DateTimePretty';

export const Video: React.FC<VideoData> = ({ url, date}) => {
  return (
    <div className="video">
        <iframe
          src={url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
        {/* <DateTime date={date} /> */}
        <DateTimePretty date={date} />
    </div>
  )
};