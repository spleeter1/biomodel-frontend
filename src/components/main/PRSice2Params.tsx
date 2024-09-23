import LineSeparator from '../component1/lineSeparator';
import PRSice2Tool from '../component1/PRSice2Tool';

const PRSice2Params = () => {
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
            <PRSice2Tool />
            {/* {url !== '' ? <Output url={url} /> : <></>} */}
            {/* {isLoading === true ? <Loading /> : <></>} */}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default PRSice2Params;
