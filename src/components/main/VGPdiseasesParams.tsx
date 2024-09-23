// import { Output } from '@mui/icons-material';
// import { Typography, Box, TextField } from '@mui/material';
// import getParams from '../../data/dataParams';
import LineSeparator from '../component1/lineSeparator';
import VGPdiseasesOptions from '../component1/VGPdiseasesOptions';

const VGPdiseasesParams = () => {
    // const listParam = getParams('VGPdiseases');

    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                maxWidth: '55%',
                flexDirection: 'column',
                flexGrow: 3,
            }}
        >
            <div style={{ maxWidth: '100%' }}></div>
            <LineSeparator content="Tool Parameters" />
            <VGPdiseasesOptions />
            {/* {url !== '' ? <Output url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default VGPdiseasesParams;
