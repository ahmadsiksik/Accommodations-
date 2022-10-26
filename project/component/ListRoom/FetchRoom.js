import ListRoom from "./ListRoom";
import classes from './Fetch.module.css'

const FetchRoom=(props)=>{
    return(
    <div>
        
    {props.Rooms.map((product) => (
                    <div className={classes.card}>
                    <ListRoom
                        key={product.id}
                        id={product.id}
                        firstname={product.firstname}
                        lastname={product.lastname}
                        Phon={product.Phon}
                        LocationHome={product.LocationHome}
                        BathRoomNum={product.BathRoomNum}
                        HomeCost={product.HomeCost}
                        BedRoomNum={product.BedRoomNum}
                        HomeAria={product.HomeAria}
                        Image={product.Image}
                        Vid={product.Vid}
                        RoomCost={product.RoomCost}
                    />
         </div>))}

    </div>);
}
export default FetchRoom;