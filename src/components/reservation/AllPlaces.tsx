import {ReservationObject} from "../../types/ReservationType.ts";
import {enqueueSnackbar} from "notistack";

type AllPlacesProps={
    data : ReservationObject[],
    handleSelect : (el:ReservationObject)=>void
}

export function AllPlaces({data,handleSelect}: AllPlacesProps) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            border: '2px solid rgba(28, 200, 208, 0.21)'
        }}>
            {data ?
                <div style={{
                    flexWrap: 'wrap',
                    display: 'flex',
                    justifyContent: 'center',
                    width: '100%',
                    height: '100%'
                }}>
                    {data.map((el: ReservationObject) => (
                        <div style={el.dateTime ? {backgroundColor: "black", width: "4rem"} : {width: "4rem"}}
                             key={el.id}
                             onClick={() =>el.dateTime?enqueueSnackbar('Место уже забронировано') :handleSelect(el)} className="reservationElement">
                            {el.id}
                        </div>
                    ))}
                </div>
                : ""}
        </div>);
}
