import './css/main.css';
import creator1 from '../assets/creator1.png';
function Creators() {
    return (
        <div className="location" style={{marginTop:20}}>
            <div className='font20'>Similar creators</div>
            <div style={{display:'flex', marginTop:9, gap:10}}>
                <img src={creator1} alt='' />
                <div className='font12'>@mechventures</div>
            </div>
            <div style={{display:'flex', marginTop:9, gap:10}}>
                <img src={creator1} alt='' />
                <div className='font12'>@mechventures</div>
            </div>
            <div style={{display:'flex', marginTop:9, gap:10}}>
                <img src={creator1} alt='' />
                <div className='font12'>@mechventures</div>
            </div>
            <div style={{display:'flex', marginTop:9, gap:10}}>
                <img src={creator1} alt='' />
                <div className='font12'>@mechventures</div>
            </div>
            <div style={{display:'flex', marginTop:9, gap:10}}>
                <img src={creator1} alt='' />
                <div className='font12'>@mechventures</div>
            </div>
        </div>
    )
}
export default Creators;