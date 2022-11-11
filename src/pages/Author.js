import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import Main from "../components/Author/Main";

function Author() {
    return (
        <>
            <div className="author_body">
                <Channels />
                <Main />
            </div>
        </>
    )
}
export default Author;