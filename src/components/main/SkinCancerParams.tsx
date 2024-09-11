import { Typography, Box } from '@mui/material';
import LineSeparator from '../component1/lineSeparator';
import UploadButton from '../component1/UploadButton';
import getParams from '../../data/dataParams';
import ToolHeaderSkinCancer from '../component1/ToolHeaderSkinCancer';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import OutputImages from '../component2/OutputImages';
import Loading from '../component2/LoadingGif';
const SkinCancerParams = () => {
    const listParam = getParams('SkinCancer');
    const results = useSelector((state: RootState) => state.resultsStringStore);
    const isLoading = useSelector(
        (state: RootState) => state.loadingStore.value
    );
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
                <ToolHeaderSkinCancer
                    model={listParam[0].toUpperCase()}
                    url="http://192.168.1.135:5000/skin-cancer"
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
                            Explain: Lorem ipsum dolor sit amet, consectetur
                            adipisicing elit. Ipsum id ducimus neque at numquam
                            maiores alias saepe quis, quas, maxime deleniti nisi
                            quia praesentium tempore fuga, labore optio quidem.
                            Eum.
                        </Typography>

                        <Box
                            sx={{
                                paddingLeft: '3%',
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-between',
                            }}
                        ></Box>
                    </div>
                </div>
            </div>
            {results.length !== 0 ? <OutputImages /> : <></>}
            {isLoading === true ? <Loading /> : <></>}

            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default SkinCancerParams;
