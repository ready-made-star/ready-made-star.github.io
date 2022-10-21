import ProfileCard from "../ProductCard";
import AvatarGroup from "../AvatarGroup";
import CardGroup from "../CardGroup";
import Banner from "../Banner";

function Header(props) {
    return (
        <div className='home_main'>
            <div className="main_first_part" style={{width: '100%'}}>
                <div style={{width:'100%'}}>
                    <AvatarGroup />
                </div>
                <Banner />
                <div style={{ flex: 1, overflow: "auto" }} className='scroll'>
                    <CardGroup show={props.show}/>
                </div>
            </div>
        </div>
    )
}
export default Header;