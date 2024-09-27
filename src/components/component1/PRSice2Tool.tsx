import { Typography, Box, Button } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { setIsLoadingState } from '../../redux/loadingSlice';
import Loading from '../component2/LoadingGif';
import { useState } from 'react';
import UploadButton20 from './UploadButton20';
import Output from '../component2/Output';
// import StorageButton from '../component2/StorageButton';
const PRSice2Tool = () => {
    const fetchKeys = ['base_file', 'target_file'];
    const dispatch = useDispatch();
    const [url, setURL] = useState('');
    const isLoading = useSelector(
        (state: RootState) => state.loadingStore.value
    );
    const [files, setFiles] = useState<{ file: File; key: string }[]>([]);
    const [fileNameDownload, setFileNameDownload] = useState('');
    const handleFileChange = (
        event: React.ChangeEvent<HTMLInputElement>,
        fileKey: string
    ) => {
        const selectedFiles = event.target.files;
        if (selectedFiles && selectedFiles.length > 0) {
            const newFile = selectedFiles[0];
            setFiles(prevFiles => {
                const existingFileIndex = prevFiles.findIndex(
                    f => f.key === fileKey
                );
                if (existingFileIndex >= 0) {
                    const updatedFiles = [...prevFiles];
                    updatedFiles[existingFileIndex] = {
                        file: newFile,
                        key: fileKey,
                    };
                    return updatedFiles;
                } else {
                    return [...prevFiles, { file: newFile, key: fileKey }];
                }
            });
        }
    };
    const handleRunTool = async (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(setIsLoadingState());

        e.preventDefault();
        const formData = new FormData();
        // console.log(files);

        files.forEach(({ file, key }) => {
            formData.append(key, file);
        });

        for (const [key, value] of formData.entries()) {
            console.log(key, value);
        }
        try {
            const response = await axios.post(
                'http://192.168.1.135:32100/prsice-2',
                formData,
                { responseType: 'blob' }
            );

            const contentDisposition = response.headers['content-disposition'];

            const filename =
                contentDisposition?.split('=')[1].trim() || 'default-filename';
            console.log(filename);
            // const filename = contentDisposition;
            setFileNameDownload(filename);
            console.log(filename);

            const blob = new Blob([response.data], {
                type: response.headers['content-type'],
            });
            setURL(window.URL.createObjectURL(blob));
            console.log(response);
        } catch (error) {
            alert(error);
            console.error('Error sending data: ', error);
        } finally {
            dispatch(setIsLoadingState());
        }
    };
    return (
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
                    Explain: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsum id ducimus neque at numquam maiores alias saepe
                    quis, quas, maxime deleniti nisi quia praesentium tempore
                    fuga, labore optio quidem. Eum.
                </Typography>

                <Box
                    sx={{
                        paddingLeft: '2%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                    }}
                >
                    <Box sx={{ padding: '0 10% 0 0' }}>
                        <Typography>Base File Name</Typography>
                        <UploadButton20
                            onChange={handleFileChange}
                            fileKey={fetchKeys[0]}
                        />
                    </Box>
                    <Box>
                        <Typography>Target File Name</Typography>
                        <UploadButton20
                            onChange={handleFileChange}
                            fileKey={fetchKeys[1]}
                        />
                    </Box>
                </Box>
            </div>
            <Button
                sx={{
                    display: 'flex',
                    backgroundColor: '#133f6e',
                    width: '150px',
                    justifyContent: 'space-around',
                    margin: '2% 0% 0% 0%',
                }}
                variant="contained"
                onClick={handleRunTool}
                type="submit"
            >
                <PlayArrowIcon />
                <Typography>Run Tool</Typography>
            </Button>
            <div style={{ paddingTop: '20px' }}>
                {url !== '' ? (
                    <div>
                        <Output url={url} filename={fileNameDownload} />
                        <div style={{ padding: '1%' }}></div>
                        {/* <StorageButton /> */}
                    </div>
                ) : (
                    <></>
                )}
            </div>
            {isLoading === true ? <Loading /> : <></>}
        </div>
    );
};
export default PRSice2Tool;
