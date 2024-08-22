import {formatDateTime} from "../../globalsFunction/globalsFunction.ts";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import {ReservationObject} from "../../types/ReservationType.ts";
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import _ from "lodash";
import {setReservation} from "../../redux/slices/reservationSlice.ts";


type OrderProps = {
    orders: ReservationObject[],
}



export function Order({orders}: OrderProps) {
    const allReservation = useAppSelector(selector => selector.reservation.data)
    const dispatch = useAppDispatch();
    function deleteOreder (id:number){
        const cloneData = _.cloneDeep(allReservation);
        const findIndex = cloneData.findIndex((el)=>el.id===id)
        cloneData[findIndex] = {
            id,
            status: false,
            dateTime: "",
            nick:""
        }
        dispatch(setReservation(cloneData))
    }
    setInterval(() => {
        const now = new Date();
        allReservation.forEach((obj) => {
            if (new Date(obj.dateTime) < now) {
                deleteOreder(obj.id)
            }
        });
    }, 60 * 1000);

   if(orders.length>0){
       return (
           <div style={{marginTop: '3rem',width:"100%"}}>
               <h2>Вы забранировали</h2>
               {orders.map((el: ReservationObject) => (
                   <div key={el.id} style={{marginTop: '1rem', display: "flex",alignItems:"center",justifyContent:"center"}}>
                       <p>{`${formatDateTime(el.dateTime)} место номер ${el.id}`}</p>
                       <DeleteForeverIcon onClick={()=>deleteOreder(el.id)} sx={{fill:"red",color:'white'}}/>
                   </div>
               ))}
           </div>
       );
   }
   return <></>
}
