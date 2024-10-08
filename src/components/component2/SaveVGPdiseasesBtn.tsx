import { Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import axios from 'axios';

type SaveVGPdiseasesBtnProps = {
    data: Blob[]
    endpoint: string;
};
const SaveVGPdiseasesBtn: React.FC<SaveVGPdiseasesBtnProps> = ({
    data,
    endpoint,
}) => {
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('user', 'biomodel');

        data.map((file) => {
            formData.append('image', file);
        })
        
        
        try {
            const response = await axios.post(
                `http://127.0.0.1:5000/${endpoint}/`,
                formData,
                {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                }
            );

            if (response.status === 200) {
                alert(JSON.stringify(response.data).toString());
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
export default SaveVGPdiseasesBtn;
