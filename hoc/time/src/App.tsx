import VideoList from './components/VideoList';
import list from './data/videoList.json';

export default function App() {

  return (
    <VideoList list={list} />
  );
}