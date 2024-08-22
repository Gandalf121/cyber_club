import {useState} from 'react';
import BasicModal from '../modalWindow/ModalWindow';
import {ReservationContentForModal} from './ReservationContentForModal';
import './reservation.css';
import {useAppSelector} from "../../redux/hooks.ts";
import {Order} from "./Order.tsx";
import {AllPlaces} from "./AllPlaces.tsx";

type ReservationData = {
    id: number;
    status: boolean;
    dateTime: string;
}


const Reservation = () => {
    const data = useAppSelector(selector => selector.reservation.data)
    const {fullName} = useAppSelector(selector => selector.user.data)
    const [stateModal, setStateModal] = useState(false);
    const [dataSelected, setSelected] = useState<ReservationData | null>(null);
    const orders = data.filter((el) => el.nick === fullName)
    const handleSelect = (el: ReservationData) => {
        setSelected(el);
        setStateModal(true);
    };


    return (
        <>
            <h2 style={{marginTop: '3rem'}}>Бронирование мест</h2>
            <AllPlaces data={data} handleSelect={handleSelect} />
            <Order orders={orders}/>
            <BasicModal
                content={
                    dataSelected && (
                        <ReservationContentForModal id={dataSelected.id} state={dataSelected.status}/>
                    )
                }
                isButton={false}
                state={stateModal}
                onUpdate={setStateModal}
            />
        </>
    );
};

export default Reservation;
