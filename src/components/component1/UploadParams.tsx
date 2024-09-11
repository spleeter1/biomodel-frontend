import { Typography, Box, TextField } from '@mui/material';
import UploadButton from './UploadButton';
import { useDispatch } from 'react-redux';
// import { RootState } from '../../redux/store';
import { ChangeEvent } from 'react';
import { updateValue } from '../../redux/stringParamSlice';

type UploadParamsProps = {
    uploadTitle: string;
};

const UploadParams: React.FC<UploadParamsProps> = ({ uploadTitle }) => {
    const dispatch = useDispatch();

    // const stringParam = useSelector(
    //     (state: RootState) => state.stringParamStore
    // );
    const handleStringParam =
        (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(updateValue({ key, value: e.target.value }));
        };
    return (
        <div style={{ paddingBottom: '20px' }}>
            <div
                style={{
                    borderLeft: '4px solid #e8ecee',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}
            >
                <Typography
                    sx={{
                        background: '#e8ecee',
                        fontWeight: 'bold',
                        borderTopRightRadius: 5,
                        padding: '5px',
                        paddingLeft: '3%',
                        color: '#505398',
                    }}
                >
                    {uploadTitle}
                </Typography>

                <Box
                    sx={{
                        paddingLeft: '2%',
                        display: 'flex',
                        flexDirection: 'row',
                        borderStyle: '',
                        paddingTop: '3%',
                    }}
                >
                    <UploadButton />
                    {}
                </Box>

                <Typography
                    sx={{
                        paddingBottom: '2%',
                        paddingLeft: '3%',
                        paddingTop: '10px',
                    }}
                >
                    Explain: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsum id ducimus neque at numquam maiores alias saepe
                    quis, quas, maxime deleniti nisi quia praesentium tempore
                    fuga, labore optio quidem. Eum.
                </Typography>

                <Box sx={{ paddingLeft: '3%' }}>
                    <TextField
                        id="input-region"
                        label="Region"
                        onChange={handleStringParam('region')}
                        // value={stringParam}
                    ></TextField>
                </Box>
            </div>
        </div>
    );
};
export default UploadParams;
