import { Fragment, useRef, useState } from 'react';
import Link from 'next/link';
import Nav from '../Home/Nav';
import classes from './Form.module.css'
const Form=(props)=>{
    const[Empty,useEmpty]=useState(false);
    const fname = useRef();
    const lname = useRef();
    const phonNum = useRef();
    const Location = useRef();
    const Numofbathroom = useRef();
    const Numofbedroom = useRef();
    const CostOfHome = useRef();
    const AriaOfHome = useRef();
    const img = useRef();
    const video = useRef();
    const CostOfRoom = useRef();

    const AddRoom = (event)=>{
        event.preventDefault();
        const obj={
            firstname:fname.current.value,
            lastname:lname.current.value,
            Phon:phonNum.current.value,
            LocationHome:Location.current.value,
            BathRoomNum:Numofbathroom.current.value,
            BedRoomNum:Numofbedroom.current.value,
            HomeCost:CostOfHome.current.value,
            HomeAria:AriaOfHome.current.value,
            Image:img.current.value,
            Vid:video.current.value,
            RoomCost:CostOfRoom.current.value
        }

        if(obj.firstname.length==0||obj.lastname.length==0||obj.LocationHome.length==0||obj.Phon.length==0||obj.BathRoomNum.length==0||obj.HomeCost.length==0||obj.HomeAria.length==0||obj.RoomCost.length==0){
            useEmpty(false);
        }
        console.log(Empty);

        useEmpty(true);

        props.onAddRoom(obj)
    }

    return(
    <Fragment>
    <Nav/>
    <div className={classes.card}>
   <form onSubmit={AddRoom}>
        <div className={classes.flex}>
            <input className={classes.input} ref={lname} />
            <label className={classes.label} >: الاسم الثاني </label >

            <input className={classes.input} ref={fname} />
            <label className={classes.label} >: الاسم الاول </label >


        </div>

        <br/>

            <input className={classes.input} type={'number'} ref={phonNum} />
            <label > : رقم الهاتف</label >

        <br/>
        <br/>
        <br/>
        
            <input className={classes.input} ref={Location} />
            <label > : الموقع الخاص بالسكن </label >

        <br/>
        <br/>
        <br/>

        <div className={classes.flex}>
            <input className={classes.input} type={'number'} ref={Numofbathroom} />
            <label className={classes.label1} > : عدد غرف الحمام </label >


            <input className={classes.input} type={'number'} ref={Numofbedroom}/>
            <label className={classes.label1} > : عدد غرف النوم </label >
        </div>
        
        <br/>

        <div className={classes.flex}>
            <input className={classes.input} type={'number'} ref={CostOfHome} />
            <label className={classes.label1} > : شهريه السكن بالدولار </label >


            <input className={classes.input} type={'number'} ref={AriaOfHome}/>
            <label className={classes.label1} > :  مساحه السكن بالمتر</label >

        </div>

        <br/>

        <div className={classes.flex}>
            <input className={classes.input} type={'file'} accept={"image/jpeg"} ref={img} />
            <label className={classes.label2} > : اضافه صوره </label >

            <input className={classes.input} type={'file'} ref={video} />
            <label className={classes.label2} > : اضافه فيديو </label >

            <input className={classes.input} type={'number'} ref={CostOfRoom}/>
            <label className={classes.label2} > : شهريه الغرفه  </label >
        </div>
        <button  className={classes.button} type={'submit'}>  اضافه غرفه </button>
        </form>
        </div>
        </Fragment>
    )
}
export default Form;