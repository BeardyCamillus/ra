import withChangesStyle from "../hooks/withChangesStyle";

/* eslint-disable react/prop-types */
const Video = withChangesStyle((props) => {
  return (
      <div className="item item-video">
          <iframe
          src={props.url}
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
          ></iframe>
          <p className="views">Просмотров: {props.views}</p>
      </div>
  )
})

export default Video;