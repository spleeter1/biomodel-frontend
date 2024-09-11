import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Tooltip,
    Typography,
} from '@mui/material';
import logo from '/src/assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/`);
    };
    return (
        <AppBar
            sx={{
                maxWidth: '100%',
                position: 'unset',
            }}
        >
            <Container
                sx={{
                    backgroundColor: 'white',
                    '@media(min-width:100px)': {
                        maxWidth: '100%',
                    },
                    boxShadow: '0px 4px 8px   rgba(172, 176, 250,2)',
                }}
            >
                <Toolbar
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                        <Box
                            component="img"
                            src={logo}
                            alt="VinBigData Logo"
                            sx={{
                                width: 'auto',
                                height: '30px',
                                paddingRight: '30px',
                            }}
                        />
                        <Box>
                            <Tooltip title="">
                                <Button
                                    sx={{
                                        fontStyle: 'bold',
                                        color: '#40406d',
                                        fontFamily: 'sans-serif',
                                    }}
                                    key="biomodel"
                                    onClick={handleClick}
                                >
                                    <strong>Biomodel Browser</strong>
                                </Button>
                            </Tooltip>
                        </Box>
                    </Box>

                    <Typography variant="h6" sx={{ color: '#40406d' }}>
                        Ver 1.0.0
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Header;
