import { Box, Button, Typography } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsLoadingState } from '../../redux/loadingSlice';
import { resetAllValues } from '../../redux/stringParamSlice';
import { resetFiles } from '../../redux/fileStoreSlice';
import { pushResultsString } from '../../redux/resultsStringSlice';
import { setFileKeys } from '../../redux/fileKeysSlice';
import axios from 'axios';

type ToolHeaderProps = {
    model: string;
    url: string;
};
const ToolHeaderSkinCancer: React.FC<ToolHeaderProps> = ({ model, url }) => {
    const dispatch = useDispatch();
    // const stringParam = useSelector(
    //     (state: RootState) => state.stringParamStore
    // );
    const filesStore = useSelector((state: RootState) => state.fileStore);
    const files = filesStore;
    // const params = stringParam;
    const fileKeys = ['files'];
    dispatch(setFileKeys(fileKeys));
    const handleClickUpload = async () => {
        const formData = new FormData();
        files.forEach(fileItem => {
            formData.append(fileItem.key, fileItem.file);
        });

        // params.forEach(param => {
        //     formData.append(param.key, param.value);
        // });
        // formData.forEach(x => console.log(x));
        dispatch(setIsLoadingState());
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 200) {
                const results = response.data; // Lấy dữ liệu từ phản hồi
                dispatch(pushResultsString([results]));
            } else {
                const errorData = response.data;
                console.error('Prediction failed:', errorData);
                alert('Prediction failed');
            }
        } catch (error) {
            console.error('Error:', error);
            dispatch(resetFiles());
            dispatch(resetAllValues());
        } finally {
            dispatch(setIsLoadingState());
            // dispatch(resetFiles());
            // dispatch(resetAllValues());
        }
    };
    return (
        <Box
            sx={{
                borderRadius: 1,
                bgcolor: '#e8ecee',
                display: 'flex',
                flexDirection: 'row',
                padding: '20px',
                justifyContent: 'flex-start',
                alignItems: 'center',
            }}
        >
            <div style={{ flexGrow: '3' }}>
                <Typography sx={{}}>{model}</Typography>
            </div>

            <Button
                sx={{
                    height: '50%',
                    backgroundColor: '#133f6e',
                    justifyContent: 'flex-end',
                }}
                variant="contained"
                onClick={handleClickUpload}
            >
                <PlayArrowIcon />
                Run tool
            </Button>
        </Box>
    );
};
export default ToolHeaderSkinCancer;
