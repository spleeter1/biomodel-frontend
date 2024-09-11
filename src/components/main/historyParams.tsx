import { TextField, Tooltip, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RepeatSharpIcon from '@mui/icons-material/RepeatSharp';
import SearchBar from '../component1/searchBar';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CreateIcon from '@mui/icons-material/Create';
import StorageIcon from '@mui/icons-material/Storage';
import ListHistory from '../component1/ListHistory';
import { ChangeEvent, useState } from 'react';

const HistoryParams = () => {
    const [nameHistory, setNameHistory] = useState('Unnamed History');
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNameHistory(e.target.value);
    };

    const [isEditing, setIsEditing] = useState(false);
    const handelClick = () => {
        setIsEditing(!isEditing);
    };

    const handleBlur = () => {
        if (isEditing) {
            setIsEditing(false);
        }
    };
    return (
        <div
            style={{
                width: '20%',
                borderLeft: '2px solid #e8ecee',
                display: 'flex',
                flexDirection: 'column',
                justifyItems: 'center',
            }}
        >
            <div
                className="label-history-management"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '1%',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        padding: '5%',
                    }}
                >
                    <Typography style={{ flexGrow: 2, fontSize: 18 }}>
                        History
                    </Typography>
                    <div
                        style={{
                            flexGrow: 1,
                            display: 'flex',
                            justifyContent: 'space-around',
                        }}
                    >
                        <Tooltip title="Create History">
                            <AddIcon />
                        </Tooltip>
                        <Tooltip title="Switch History">
                            <RepeatSharpIcon />
                        </Tooltip>
                        <Tooltip title="History Options">
                            <DehazeIcon />
                        </Tooltip>
                    </div>
                </div>
                <div style={{ padding: '0 5% ' }}>
                    <SearchBar />
                </div>
            </div>
            <div
                className="label-history-management"
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '5%',
                }}
            >
                <div
                    style={{
                        paddingTop: '10px',
                        display: 'flex',
                        flexDirection: 'row',
                    }}
                >
                    <Typography
                        className="history-name"
                        style={{ flexGrow: 2, fontSize: 20 }}
                    >
                        <TextField
                            id=""
                            variant="standard"
                            sx={{ padding: '0px' }}
                            value={nameHistory}
                            onChange={handleInputChange}
                            onBlur={handleBlur}
                            disabled={!isEditing}
                        />
                    </Typography>
                    <Tooltip title="Create History" onClick={handelClick}>
                        <CreateIcon />
                    </Tooltip>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        paddingTop: '20px',
                    }}
                >
                    <Tooltip title="History Size">
                        <StorageIcon />
                    </Tooltip>
                </div>
            </div>
            <ListHistory />
        </div>
    );
};
export default HistoryParams;
