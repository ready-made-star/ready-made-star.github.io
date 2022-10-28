import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import GlobalView from "../components/GlobalView";

function GlobeMap() {
    return (
        <>
            <AuthorHeader />
            <div className="author_body w-100">
                <Channels />
                <GlobalView />
            </div>
        </>
    )
}
export default GlobeMap;