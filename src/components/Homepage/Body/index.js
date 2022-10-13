import ProfileCard from "../ProductCard";
import AvatarGroup from "../AvatarGroup";
import CardGroup from "../CardGroup";

function Header(props) {
    return (
        <div className='main'>
            <div className="main_first_part" style={{width: '100%'}}>
                <div style={{width:'91%'}}>
                    <AvatarGroup />
                </div>
                <div style={{ flex: 1, overflow: "auto" }} className='scroll'>
                    <CardGroup show={props.show}/>
                </div>
            </div>
        </div>
    )
}
export default Header;