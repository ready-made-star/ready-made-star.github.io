import Header from "../components/Header";
import Channels from "../components/Channels";
import Main from "../components/Main";

function Author() {
    return (
        <>
            <Header />
            <div style={{ display: 'flex' }}>
                <Channels />
                <Main />
            </div>
        </>
    )
}
export default Author;