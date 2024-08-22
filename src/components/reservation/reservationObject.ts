import {ReservationObject} from "../../types/ReservationType.ts";

export const reservationObject :ReservationObject[] =
    [...Array(40).keys()].map((id) => ({ id: id + 1, status: false, dateTime: "", nick:""}))
;

