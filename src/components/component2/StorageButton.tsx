import { Box, Typography } from '@mui/material';
import StorageIcon from '@mui/icons-material/Storage';
import axios from 'axios';

type StorageButtonProps = {
    data: Blob;
    filename: string;
};
const StorageButton: React.FC<StorageButtonProps> = ({ data, filename }) => {
    const handleFileUpload = async () => {
        const formData = new FormData();
        formData.append('file', data);
        try {
            // const response = await axios.post('')
        } finally {
        }
    };

    return (
        <Box
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
            // onClick={}
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
                    Storage your result
                </Typography>
            </div>
        </Box>
    );
};
export default StorageButton;
