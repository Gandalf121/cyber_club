import { Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

export default function NotFoundPage() {
    return (
        <div style={{ height: "100vh", display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', color: 'var(--mixColor25)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <Typography variant='h4' sx={{ fontWeight: 'bold' }}>
                    Данная страница не найдена
                </Typography>
                <ErrorOutlineIcon sx={{ fontSize: 75 }} />
            </div>
            <Button variant='contained' component={Link} to='/' sx={{ mt: 2 }}><Typography sx={{ fontWeight: 'bold' }}>Вернуться на главную</Typography></Button>
        </div>
    );
};
