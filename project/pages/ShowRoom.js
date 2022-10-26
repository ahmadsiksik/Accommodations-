import { Fragment, useCallback, useState } from "react";
import FetchRoom from "../component/ListRoom/FetchRoom";
import classes from'./ShowRoom.module.css';
import Nav from '../component/Home/Nav';
const ShowRoom=()=>{
    const [butt, setbutt] = useState(true);
    const [Room, setRoom] = useState([]);

    const ListROomHandler = useCallback(async () => {
        setbutt(false);
        try {
          const response = await fetch('https://rooms-513e7-default-rtdb.firebaseio.com/m1.json');
          if (!response.ok) {
            throw new Error('Something went wrong!');
          }
    
          const data = await response.json();
    
          const loadedRoom = [];
    
          for (const key in data) {
            loadedRoom.push({

                id:key,
                firstname:data[key].firstname,
                lastname:data[key].lastname,
                Phon:data[key].Phon,
                LocationHome:data[key].LocationHome,
                BathRoomNum:data[key].BathRoomNum,
                HomeCost:data[key].HomeCost,
                BedRoomNum:data[key].BedRoomNum,
                HomeAria:data[key].HomeAria,
                Image:data[key].Image,
                Vid:data[key].Vid,
                RoomCost:data[key].RoomCost,
                });
          }
    
          setRoom(loadedRoom);
        } 
        catch (error) {
        }
      }, []);


    return(
    <Fragment>  
    <Nav />
   {butt && (<button className={classes.button} onClick={ListROomHandler}> اضغط هنا لرؤيه السكنات المتاحه</button>)}
   <FetchRoom Rooms={Room} />
    </Fragment>
    ); 

}
export default ShowRoom;

