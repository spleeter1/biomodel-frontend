import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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

interface UploadButtonProps {
    onChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        fileKeys: string
    ) => void;
    fileKey: string;
}

const UploadButton20: React.FC<UploadButtonProps> = ({ onChange, fileKey }) => {
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
                    accept="*/*"
                    type="file"
                    onChange={e => onChange(e, fileKey)}
                    // multiple
                />
            </Button>
        </div>
    );
};
export default UploadButton20;
