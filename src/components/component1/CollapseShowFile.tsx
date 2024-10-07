import { Box, Collapse, Tooltip } from '@mui/material';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
// import { useDispatch } from 'react-redux';
// import { delFile } from '../../redux/fileStoreSlice';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import axios from 'axios';
// import listParams from '../../data/listParams.json';

type CollapseShowFileProps = {
    idx: number;
    user_id: number;
    id: number;
    file_name: string;
    date: string;
    file_path: string;
};
const CollapseShowFile: React.FC<CollapseShowFileProps> = ({
    idx,
    // user_id,
    id,
    file_name,
    file_path,
    date,
}) => {
    const [checked, setChecked] = React.useState(false);
    // const dispatch = useDispatch();
    // const data = listParams;

    const [wrapFileName, setWrapFileName] = useState('nowrap');
    const handleDisplay = () => {
        setWrapFileName(prev => (prev === 'wrap' ? 'nowrap' : 'wrap'));
        setChecked(prev => !prev);
    };

    const handleDel = async (id: number) => {
        // dispatch(delFile(idx));
        const formData = new FormData();
        formData.append('id', id.toString());
        try {
            const response = await axios.post(
                `http://127.0.0.1:5000/deleteFileResult/`,
                formData
            );
            if (response.status === 200) {
                alert(JSON.stringify(response.data));
            }
        } catch (error) {}
    };

    return (
        <Box sx={{ marginBottom: '5px' }}>
            <Collapse
                in={checked}
                collapsedSize={30}
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
                        flexWrap: 'wrap',
                        alignItems: 'center',
                    }}
                >
                    <div
                        style={{
                            flexGrow: 3,
                            overflow: 'hidden',
                            whiteSpace: wrapFileName,
                            textOverflow: 'ellipsis',
                            maxWidth: '65%',
                            paddingLeft: '3%',
                        }}
                    >
                        {idx} : {file_name}
                    </div>
                    <div
                        style={{
                            paddingTop: '1%',
                            display: 'flex',
                            justifyContent: 'center',
                            width: '30%',
                        }}
                    >
                        <Tooltip title="Display" onClick={handleDisplay}>
                            <VisibilityIcon />
                        </Tooltip>
                        <Tooltip title="Download">
                            <FileDownloadIcon />
                        </Tooltip>
                        <Tooltip
                            key={idx}
                            title="Delete"
                            onClick={() => handleDel(id)}
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
                        <p>Preview is not supported!</p>
                        <p>Details:</p>
                        <p>{`id: ${id}`}</p>
                        <p>{`Name: ${file_name}`}</p>
                        <p>{`Path: ${file_path}`}</p>
                        <p>{`Date: ${date}`}</p>

                        <a href={file_path} target="_blank">
                            Click here to show content!
                        </a>
                    </Box>
                </div>
            </Collapse>
        </Box>
    );
};
export default CollapseShowFile;
