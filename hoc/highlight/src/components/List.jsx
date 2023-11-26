import Article from "./Article";
import Video from "./Video";

function List(props) {
  return props.list.map(item => {
      switch (item.type) {
          case 'video':
              return (
                  <Video {...item} />
              );

          case 'article':
              return (
                  <Article {...item} />
              );
      }
  });
}

export default List;