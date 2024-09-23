// import { Box, Button, Typography } from '@mui/material';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../redux/store';
// import { setURL } from '../../redux/urlStoreSlice';
// import { setIsLoadingState } from '../../redux/loadingSlice';
// import { resetAllValues } from '../../redux/stringParamSlice';
// import { resetFiles } from '../../redux/fileStoreSlice';
// import { updateFileKey } from '../../redux/fileKeysSlice';

// type ToolHeaderVGPdiseasesProps = {
//     model: string;
//     url: string;
// };
// const ToolHeaderVGPdiseases: React.FC<ToolHeaderVGPdiseasesProps> = ({
//     model,
//     url,
// }) => {
//     const dispatch = useDispatch();
//     const filesStore = useSelector((state: RootState) => state.fileStore);
//     const files = filesStore;
//     const handleUpdateFileKey = (index: number, value: string) => {
//         dispatch(updateFileKey({ index, value }));
//     };
//     const handleClickUpload = async () => {
//         const formData = new FormData();
//         handleUpdateFileKey(0, 'base_file');
//         handleUpdateFileKey(1, 'target_file');
//         console.log(files);
//         files.forEach((fileItem, i) => {
//             console.log(i);
//             if (i === 0) {
//                 formData.append('base_file', fileItem.file);
//             } else if (i === 1) formData.append('target_file', fileItem.file);
//         });
//         console.log(formData);
//         params.forEach(param => {
//             formData.append(param.key, param.value);
//         });
//         // formData.forEach(x => console.log(x));

//         dispatch(setIsLoadingState());
//         try {
//             const response = await fetch(url, {
//                 method: 'POST',
//                 body: formData,
//             });

//             if (response.ok) {
//                 const blob = await response.blob();
//                 dispatch(setURL(window.URL.createObjectURL(blob)));
//             } else {
//                 const errorData = await response.json();
//                 console.error('Prediction failed:', errorData);
//                 alert('Prediction failed');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             dispatch(resetFiles());
//             dispatch(resetAllValues());
//         } finally {
//             dispatch(setIsLoadingState());
//             dispatch(resetFiles());
//             dispatch(resetAllValues());
//         }
//     };
//     return (
//         <Box
//             sx={{
//                 borderRadius: 1,
//                 bgcolor: '#e8ecee',
//                 // width: '100%',
//                 // '&:hover': {
//                 //     bgcolor: 'primary.dark',
//                 // },
//                 display: 'flex',
//                 flexDirection: 'row',
//                 padding: '20px',
//                 justifyContent: 'flex-start',
//                 alignItems: 'center',
//             }}
//         >
//             <div style={{ flexGrow: '3' }}>
//                 <Typography sx={{}}>{model}</Typography>
//             </div>

//             <Button
//                 sx={{
//                     height: '50%',
//                     backgroundColor: '#133f6e',
//                     justifyContent: 'flex-end',
//                 }}
//                 variant="contained"
//                 onClick={handleClickUpload}
//             >
//                 <PlayArrowIcon />
//                 Run tool
//             </Button>
//             {/* {isLoading && <Loading />} */}
//         </Box>
//     );
// };
// export default ToolHeaderVGPdiseases;
