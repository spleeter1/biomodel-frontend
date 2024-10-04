import { Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import axios from 'axios';

type StorageButtonProps = {
    data: Blob | string;
    filename: string;
};
const StorageButton: React.FC<StorageButtonProps> = ({ data, filename }) => {
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('user', 'biomodel');

        const newPic = new File([data], filename + '.jpg');
        formData.append('image', newPic);
        try {
            const resq = await axios.post(
                'http://127.0.0.1:5000/storeSkinCancer/',
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (resq.status === 200) {
                alert(JSON.stringify(resq.data).toString());
            }
        } catch (error) {
            console.error('Cannot store files', error);
        }
    };

    return (
        <Box
            component="div"
            sx={{
                borderRadius: 1,
                bgcolor: '#e8ecee',
                '&:hover': {
                    background: 'linear-gradient(to right, #891731, #133f6e)',
                    color: 'white',
                },
                display: 'flex',
                flexDirection: 'column',
                padding: '5px',
                justifyContent: 'center',
                alignItems: 'center',
            }}
            onClick={handleFileUpload}
        >
            <div>
                <StorageIcon />
            </div>
            <div>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Save your result
                </Typography>
            </div>
        </Box>
    );
};
export default StorageButton;
