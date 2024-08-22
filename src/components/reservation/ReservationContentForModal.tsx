import {useState} from "react";
import _ from "lodash"
import {useAppDispatch, useAppSelector} from "../../redux/hooks.ts";
import {setReservation} from "../../redux/slices/reservationSlice.ts";
import { enqueueSnackbar } from 'notistack'

type Content = {
    id: number;
    state: boolean;
};

export function ReservationContentForModal({ id, state }: Content) {
    const {fullName} = useAppSelector(selector=>selector.user.data)
    const [selectReservation, setSelectReservationDate] = useState({
        id,
        status: true,
        dateTime: "",
        nick:fullName
    });
    const dataReservation = useAppSelector(selector=>selector.reservation.data);
    const dispatch = useAppDispatch()

    function reserveSeat() {
        if (selectReservation && dataReservation) {
            const data = _.cloneDeep(dataReservation);
            const index = data.findIndex(obj=> obj.id === selectReservation.id);
            if(!selectReservation.dateTime){
              return   enqueueSnackbar('Укажите время')
            }
            if (index !== -1) {
                data[index] = selectReservation;
            }
            dispatch(setReservation(data))
            enqueueSnackbar('Место успешно забронировано')
        }
    }

    return (

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1>Место №{id}</h1>
            <p style={{ margin: "1.5rem" }}>{state ? "Забронированно" : "Свободно"}</p>
            <input type={"datetime-local"} onChange={(value) =>value? setSelectReservationDate({...selectReservation,dateTime:value.target.value}):""}/>
            <button style={{ padding: "10px", margin: "1rem" }} onClick={() => {
                reserveSeat()
            }}>
                Забронировать
            </button>
        </div>
    );
}
