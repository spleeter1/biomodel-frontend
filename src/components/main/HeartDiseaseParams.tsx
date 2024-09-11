import { Typography, Box } from '@mui/material';
import getParams from '../../data/dataParams';
import LineSeparator from '../component1/lineSeparator';
import ToolHeader from '../component1/toolHeader';
import UploadButton from '../component1/UploadButton';
// import UploadParams from '../component1/UploadParams';

const HeartDeseaseParams = () => {
    const listParam = getParams('HeartDisease');
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
                <ToolHeader model={listParam[0].toUpperCase()} url={''} />
            </div>
            <LineSeparator content="Tool Parameters" />
            {/* {listParam.map((x, idx) => {
                if (idx !== 0)
                    return (
                        <div>
                            <UploadParams
                                key={idx}
                                uploadTitle={x.toUpperCase()}
                            />
                            
                        </div>
                    );
            })} */}

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
                            Data HeartDisease
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
                    </div>
                </div>
            </div>
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default HeartDeseaseParams;
