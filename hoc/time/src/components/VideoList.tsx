import { VideoData } from "../interfaces/VideoData";
import { Video } from "./Video";

type VideoListProps = {
  list: VideoData[]
}

const VideoList: React.FC<VideoListProps> = ({ list }) => {
  return list.map(item => <Video url={item.url} date={item.date} />);
}

export default VideoList