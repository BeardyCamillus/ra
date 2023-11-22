import { ITraining } from "../interface/ITraining";

type TrainingProps = {
  training: ITraining;
  removeTraining: (date: string) => void
}
const Training: React.FC<TrainingProps> = ({ training, removeTraining }) => {
  const date = training.date && new Date(training.date).toLocaleDateString() || '';

  return (
    <div className='content-row'>
      <div>{date}</div>
      <div>{training.distance}</div>
      <div>
        <button className="content-btn">&#9998;</button>
        <button 
          className="content-btn"
          onClick={() => training.date && removeTraining(training.date)}
        >&#10008;</button>
      </div>
    </div>
  )
}

export default Training