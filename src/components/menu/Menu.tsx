import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from "@mui/material/Avatar";
import {useAppDispatch} from "../../redux/hooks.ts";
import {logOut} from "../../redux/slices/userSlice.ts";
import { useNavigate } from 'react-router-dom';
type MenuProps = {
    name:string
}


export default function PositionedMenu({name}:MenuProps) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const out = () => {
        setAnchorEl(null);
        dispatch(logOut())
        navigate('/login');
    };

    return (
        <div style={{width:'15%'}}>
            <div style={{width:"100%", borderRadius:"10px",display:"flex", textAlign:"center",alignItems:"center"}}>
                <Avatar  onClick={handleClick} sx={{color:"white",backgroundColor:"#3e7b39",width:"30%",marginLeft:"1rem", height:"3rem"}}>
                    {name[0]}
                </Avatar>
                <p style={{marginLeft:"15px"}}>{name}</p>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={out} >Выйти</MenuItem>
            </Menu>
        </div>
    );
}