import { Typography } from '@mui/material';

type LineSeparatorProps = {
    content: string;
};
const LineSeparator: React.FC<LineSeparatorProps> = ({ content }) => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                paddingTop: '0%',
                paddingBottom: '1%',
                alignItems: 'center',
            }}
        >
            <div
                style={{
                    backgroundColor: '#eff0f2',
                    height: '2px',
                    flexGrow: '0.5',
                }}
            ></div>
            {/* <Typography
                sx={{ fontWeight: 'bold', padding: '1%', color: '#2f2f65' }}
            >
                {' '}
                {content}
            </Typography> */}
            {content && (
                <Typography
                    sx={{ fontWeight: 'bold', padding: '1%', color: '#2f2f65' }}
                >
                    {content}
                </Typography>
            )}
            <div
                style={{
                    background: '#eff0f2',
                    height: '2px',
                    flexGrow: '7',
                }}
            ></div>
        </div>
    );
};
export default LineSeparator;
