import classes from './ListRoom.module.css'
import Image from 'next/image'
import imgs from './burj-al-arab.jpg'
const ListRoom=(props)=>{
   console.log(props.Image);
    return(
    <div>

        <h1>{props.LocationHome}</h1>
        <p>صاحب السكن : {props.firstname} {props.lastname}</p>
        <p>رقم الهاتف للتواصل معه : {props.Phon}</p>
        <p>عدد غرف النوم : {props.BedRoomNum}</p>
        <p>عدد غرف الحمام : {props.BathRoomNum}</p>
        <p>تكلفه السكن كامل بالشهر : ${props.HomeCost}</p>
        <p>تكلفه الغرفه الواحده : ${props.RoomCost}</p>
        <p>مساحه السكن كامل  : {props.HomeAria}متر</p>
        {/* <Image src={`./${props.Image}`} width={'400px'} height={'300px'} /> */}
        <p>{props.Vid}</p>
        <br/>
    </div>);
}
export default ListRoom;