import { Box, Typography } from '@mui/material';
import FolderZipOutlinedIcon from '@mui/icons-material/FolderZipOutlined';
import { useDispatch, useSelector } from 'react-redux';
import { setURL } from '../../redux/urlStoreSlice';
import { RootState } from '../../redux/store';
import SaveResultButton from './SaveReusultButton';

type OutputGRUDprops = {
    url: string;
};
const OutputGRUD: React.FC<OutputGRUDprops> = ({ url }) => {
    const dispatch = useDispatch();

    const files = useSelector((state: RootState) => state.fileStore);
    console.log(files[0].file.name);
    const handleDownload = () => {
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = files[0].file.name;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        alert('File downloaded.');
        dispatch(setURL(''));
    };
    return (
        <>
            <Box
                sx={{
                    borderRadius: 1,
                    bgcolor: '#e8ecee',
                    '&:hover': {
                        background:
                            'linear-gradient(to right, #891731, #133f6e)',
                        color: 'white',
                    },
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '5px',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                onClick={handleDownload}
                marginBottom="10px"
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
            <SaveResultButton
                data={files[0].file}
                filename={files[0].file.name}
                endpoint="storeGRUD"
            />
        </>
    );
};
export default OutputGRUD;
