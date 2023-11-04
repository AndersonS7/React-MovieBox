import ContentFeedCasts from "./ContentFeedCasts/ContentFeedCasts.js";
import ContentFeedMovie from "./ContentFeedMovie/ContentFeedMovie.js";
import ContentFeedVideo from "./ContentFeedVideo/ContentFeedVideo.js";
import FeedCSS from "./Feed.module.css";

function Feed() {
    return (
        <div className={FeedCSS.Container}>
            <ContentFeedMovie 
                title="Feactured Movie"
            />
            <ContentFeedMovie 
                title="New Arrival"
            />
            <ContentFeedVideo 
                title="Exclusive Videos"
            />

            <ContentFeedCasts 
                title="Featured Casts"
            />
        </div>
    )
}

export default Feed;