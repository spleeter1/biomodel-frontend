import { Box, Collapse, Tooltip } from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useDispatch } from 'react-redux';
import { delFile } from '../../redux/fileStoreSlice';

// import listParams from '../../data/listParams.json';

type CollapseShowFileProps = {
    idx: number;
    nameFile: string;
    data: Object;
};
const CollapseShowFile: React.FC<CollapseShowFileProps> = ({
    idx,
    nameFile,
    data,
}) => {
    const [checked, setChecked] = React.useState(false);
    const dispatch = useDispatch();
    // const data = listParams;
    const handleDisplay = () => {
        setChecked(prev => !prev);
    };
    const handleDel = (idx: string) => {
        dispatch(delFile(idx));
    };

    return (
        <Box sx={{ marginBottom: '5px' }}>
            <Collapse
                in={checked}
                collapsedSize={30}
                // onClick={handleDisplay}
                sx={{
                    borderLeft: '.25rem solid #25537b',
                    borderRadius: '10px',
                    backgroundColor: '#94db94',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0px 10px',
                    }}
                >
                    <div style={{}}>
                        {idx} : {nameFile}
                        {/* 1: listParams */}
                    </div>
                    <div style={{}}>
                        <Tooltip title="Display" onClick={handleDisplay}>
                            <VisibilityIcon />
                        </Tooltip>
                        <Tooltip title="Edit">
                            <ModeEditIcon />
                        </Tooltip>
                        <Tooltip
                            key={idx}
                            title="Delete"
                            onClick={() => handleDel(idx.toString())}
                        >
                            <DeleteIcon />
                        </Tooltip>
                    </div>
                </div>
                <div style={{ padding: '0px 10px' }}>
                    <Box
                        component="pre"
                        sx={{
                            backgroundColor: '#fff',
                            padding: '10px',
                            whiteSpace: 'pre-wrap',
                            borderRadius: '8px',
                            maxHeight: '200px',
                            overflow: 'auto',
                        }}
                    >
                        {data.toString()}
                    </Box>
                </div>
            </Collapse>
        </Box>
    );
};
export default CollapseShowFile;
