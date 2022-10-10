import Header from "../components/Author/Header";
import Channels from "../components/Author/Channels";
import Main from "../components/Author/Main";

function Author() {
    return (
        <>
            <Header />
            <div className="author_body">
                <Channels />
                <Main />
            </div>
        </>
    )
}
export default Author;