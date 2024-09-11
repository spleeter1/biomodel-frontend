import { Button } from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import CollapseShowFile from './CollapseShowFile';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const ListHistory = () => {
    const filesObject = useSelector(
        (state: RootState) => state.historyFileStore
    );
    const files = Object.values(filesObject);
    return (
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    background: '#dee1e6',
                }}
            >
                <Button>
                    <SettingsIcon />
                </Button>
            </div>
            <div style={{ marginTop: '10px', height: '50px', padding: '5px' }}>
                {files.map((file, index) => (
                    <CollapseShowFile
                        key={index}
                        idx={index}
                        nameFile={file.file.name}
                        data={file}
                    />
                ))}
            </div>
        </div>
    );
};
export default ListHistory;
