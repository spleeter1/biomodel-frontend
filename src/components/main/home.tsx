// import PanelLeft from '../sidebar/panelLeft';

import { Box } from '@mui/material';
import logo from '../../assets/logo.png';
const Home = () => {
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
