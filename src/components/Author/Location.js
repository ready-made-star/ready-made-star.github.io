import './css/main.css';
import redlocation from '../assets/redlocation.png';
function Location() {
    return (
        <div className="location">
            <div className='font20'>Location</div>
            <div style={{display:'flex', marginTop:9, gap:10}}>
                <img src={redlocation} alt='' />
                <div className='font12'>Los Angeles, CA</div>
            </div>
        </div>
    )
}
export default Location;