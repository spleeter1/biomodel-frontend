import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { ChangeEvent } from 'react';
import { pushFile } from '../../redux/fileStoreSlice';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
// import { updateValue } from '../../redux/stringParamSlice';
// import { RootState } from '../../redux/store';

// import CollapseShowFile from './CollapseShowFile';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

// type UploadButtonProps = {
//     typeFileKeys: string[];
// };
export default function UploadButton() {
    const dispatch = useDispatch();
    const fileKeys = useSelector((state: RootState) => state.fileKeysStore);
    // console.log(fileKeys);
    const handleChangeFile = async (e: ChangeEvent<HTMLInputElement>) => {
        const selectedFiles = e.target.files;
        if (selectedFiles) {
            const files = Array.from(selectedFiles);
            files.forEach((file, index) => {
                const key = fileKeys[index];
                dispatch(pushFile({ key, file }));
            });
        }

        // console.log(files);
        // console.log(e.target);
        // if (e.target.files && e.target.files.length > 0) {
        //     setFile(e.target.files?.[0]);
        // console.log(e.target.files);
        // console.log(e.target.files[0]);
        // console.log(typeof e.target.files);
        // const reader = new FileReader();
        // reader.onload = event => {
        //     const fileContent = event.target?.result;
        //     // console.log(fileContent);
        //     dispatch(increase());
        //     dispatch(pushFile(JSON.stringify(fileContent)));
        // };
        // reader.readAsText(e.target.files[0]);
        // onUploadSuccess(e.target.files[0]);
        // }
    };

    return (
        <div>
            <Button
                component="label"
                role={undefined}
                variant="contained"
                tabIndex={-1}
                startIcon={<CloudUploadIcon />}
                sx={{
                    background: 'linear-gradient(to right, #891731, #133f6e)',
                }}
            >
                Upload file
                <VisuallyHiddenInput
                    type="file"
                    onChange={handleChangeFile}
                    multiple
                />
                {/* <p>{count}</p> */}
            </Button>

            {/* <Button onClick={handleClickUpload}>Predict</Button> */}
        </div>
    );
}
