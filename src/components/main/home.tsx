// import PanelLeft from '../sidebar/panelLeft';

import { Box } from '@mui/material';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const Home = () => {
    const navigate = useNavigate();
    async () => {
        try {
            const response = await axios.post('http://127.0.0.1:5000', {});
            // console.log(response.status);
            console.log(response);
            if (response.status === 200) navigate('/');
        } catch (error) {
            alert('lỗi');
        }
    };
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                width: '55%',
                flexDirection: 'column',
                alignItems: 'center',
                fontFamily: 'sans-serif',
                // placeContent: ,
            }}
        >
            <h1 style={{}}>Welcome</h1>
            <Box
                component="img"
                src={logo}
                alt="VinBigData Logo"
                sx={{
                    width: 'auto',
                    height: '10%',
                    paddingRight: '30px',
                    alignSelf: '',
                }}
            />
        </div>
    );
};
export default Home;
