import { Box, Typography } from '@mui/material';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import { useDispatch } from 'react-redux';
import { setURL } from '../../redux/urlStoreSlice';

type OutputProps = {
    url: string;
};
const Output: React.FC<OutputProps> = ({ url }) => {
    const dispatch = useDispatch();
    const handleDownload = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'result.vcf.gz'; // Specify the desired file name
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert('File downloaded.');
        dispatch(setURL(''));
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
            onClick={handleDownload}
        >
            <div>
                <FolderZipOutlinedIcon />
            </div>
            <div>
                <Typography
                    sx={{
                        fontWeight: 'bold',
                        textAlign: 'center',
                    }}
                >
                    Click here to download result
                </Typography>
            </div>
        </Box>
    );
};
export default Output;
