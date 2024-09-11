// import DataArr from '../../data/dataArr';
import { useDispatch, useSelector } from 'react-redux';
import getParams from '../../data/dataParams';
import LineSeparator from '../component1/lineSeparator';
import ToolHeader from '../component1/toolHeader';
import UploadParams from '../component1/UploadParams';
import OutputGRUD from '../component2/OutputGRUD';
import { RootState } from '../../redux/store';
import Loading from '../component2/LoadingGif';
import { setFileKeys } from '../../redux/fileKeysSlice';

// const data1 = getParams('GRUD');
// console.log(data1);
const GRUDparams = () => {
    const listParam = getParams('GRUD');

    const dispatch = useDispatch();
    const fileKeys = ['files', 'files', 'files'];
    dispatch(setFileKeys(fileKeys));
    const url = useSelector((state: RootState) => state.urlStore.value);
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
                <ToolHeader
                    model={listParam[0].toUpperCase()}
                    url="http://192.168.1.135:5000/grud"
                />
            </div>
            <LineSeparator content="Tool Parameters" />
            <div>
                <UploadParams uploadTitle={`Data GRUD`.toUpperCase()} />
            </div>
            {url !== '' ? <OutputGRUD url={url} /> : <></>}
            {isLoading === true ? <Loading /> : <></>}
            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default GRUDparams;
