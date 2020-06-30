import Link from "next/link";

const StoryList = ({ stories }) => {
  return (
    <div className="storyList">
      {stories.map((story) => (
        <div className="story" key={story.id}>
          <h2 className="storyTitle">
            <a href={story.url}>{story.title}</a>
          </h2>
          <div className="storyDetails">
            <span>{story.points || 0} points</span>
            <Link href={`/story?id=${story.id}`}>
              <a>{story.comments_count || 0} comments</a>
            </Link>
          </div>
        </div>
      ))}

      <style jsx>{`
      .storyList{
          padding : 0 1em;

      }
      .story{
          padding 1em 0;
      }
      .storyTitle{
          font-size:1rem;
          font-weight:400;
          magin:0;
          margin-botton:0.5rem;
      }

      .storyTitle a{
          color:#333;
          text-decoration:none;
      }
      .storyTitle a:hover,
      .storyDetails a:hover{
          
          text-decoration:underline;
      }

      .storyDetails{
          font-size:0.8rem;
          font-weight:bold;
      }

      .storyDetails span{
          margin-right:1em;

      }

      .storyDetails a {
          color:#6600ff;
          text-decoration:none;
      }

      `}</style>
    </div>
  );
};
export default StoryList;
