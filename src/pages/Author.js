import AuthorHeader from "../components/Author/AuthorHeader";
import Channels from "../components/Author/Channels";
import Main from "../components/Author/Main";
import spotify from '../components/assets/spotify.png';

function Author() {
    return (
        <>
            <div className="author_body">
                <Channels />
                <Main />
            </div>
            <img className='mobile_spotify' src={spotify} alt='spotify' style={{ bottom: '1%' }} />
        </>
    )
}
export default Author;