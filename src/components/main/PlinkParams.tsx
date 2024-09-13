import { Typography, Box, TextField } from '@mui/material';
import getParams from '../../data/dataParams';
import LineSeparator from '../component1/lineSeparator';
import UploadButton from '../component1/UploadButton';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../component2/LoadingGif';
import Output from '../component2/Output';
import { RootState } from '../../redux/store';
import { ChangeEvent } from 'react';
import { updateValue } from '../../redux/stringParamSlice';
import { setFileKeys } from '../../redux/fileKeysSlice';
import ToolHeaderPlink from '../component1/toolHeaderPlink';

const PlinkParams = () => {
    const listParam = getParams('Plink');
    const url = useSelector((state: RootState) => state.urlStore.value);
    const dispatch = useDispatch();

    const fileKeys = ['base_files', 'target_files'];
    dispatch(setFileKeys(fileKeys));
    const isLoading = useSelector(
        (state: RootState) => state.loadingStore.value
    );
    // const stringParams = useSelector(
    //     (state: RootState) => state.stringParamStore
    // );
    // console.log(stringParams);

    const handleStringParam =
        (key: string) => (e: ChangeEvent<HTMLInputElement>) => {
            dispatch(updateValue({ key, value: e.target.value }));
        };
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                maxWidth: '55%',
                flexDirection: 'column',
            }}
        >
            <div style={{ maxWidth: '100%' }}>
                <ToolHeaderPlink
                    model={listParam[0].toUpperCase()}
                    url="http://192.168.1.135:32100/plink"
                />
            </div>
            <LineSeparator content="Tool Parameters" />
            <div>
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
                            {/* {uploadTitle} */}
                            Data
                        </Typography>

                        <Typography
                            sx={{
                                paddingBottom: '15px',
                                paddingLeft: '3%',
                                paddingTop: '10px',
                            }}
                        >
                            Explain: Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ipsum id ducimus neque at numquam
                            maiores alias saepe quis, quas, maxime deleniti nisi
                            quia praesentium tempore fuga, labore optio quidem.
                            Eum.
                        </Typography>

                        <Box
                            sx={{
                                paddingLeft: '2%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        >
                            <Box>
                                <Typography>Base File Name</Typography>
                                <UploadButton />
                            </Box>
                            <Box>
                                <Typography>Target File Name</Typography>
                                <UploadButton />
                            </Box>

                            <TextField
                                id="input-Pvalue"
                                label="P value"
                                onChange={handleStringParam('p_value')}
                                // value={stringParams[2]}
                            ></TextField>
                        </Box>
                    </div>
                </div>
            </div>
            {url !== '' ? <Output url={url} /> : <></>}
            {isLoading === true ? <Loading /> : <></>}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default PlinkParams;
