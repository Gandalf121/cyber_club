import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {useEffect} from "react";
import {useAppSelector} from "../../redux/hooks.ts";

type BasicModalProps = {
    content?: React.ReactNode;
    state: boolean;
    onUpdate: (newState: boolean) => void;
    isButton:boolean
}


const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "30%",
    bgcolor: 'black',
    color: 'white',
    border: '2px solid #000',
    borderRadius: '10px',
    boxShadow: 24,
    p: 4,
};

export default function BasicModal({content, state,onUpdate,isButton}: BasicModalProps) {
    const {role} = useAppSelector(selector=>selector.user.data)
    const [open, setOpen] = React.useState(false);
    const handleClose = () =>{onUpdate(false); setOpen(false)};
    useEffect(() => {
        if (state)
            setOpen(state)
    }, [state]);
    return (
        <div>
            {isButton && role==="ADMIN"?<button style={{padding:"1rem",marginTop:"2rem"}} onClick={()=>setOpen(true)}>Создать новую новость</button>:""}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    {content}
                </Box>
            </Modal>
        </div>
    );
}
