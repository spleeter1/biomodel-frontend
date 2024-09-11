import { Typography } from '@mui/material';
import ToolHeader from '../component1/toolHeader';
import SelectInputType from '../component1/selectInput';

const FrameContent = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                width: '85%',
                flexDirection: 'column',
            }}
        >
            <div style={{ maxWidth: '100%' }}>
                <ToolHeader model="" url="" />
            </div>
            {/* kẻ */}
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
                <Typography
                    sx={{ fontWeight: 'bold', padding: '1%', color: '#2f2f65' }}
                >
                    {' '}
                    Tool Parameters
                </Typography>
                <div
                    style={{
                        background: '#eff0f2',
                        height: '2px',
                        flexGrow: '7',
                    }}
                ></div>
            </div>
            {/* kẻ */}

            <div style={{ maxWidth: '100%' }}>
                <SelectInputType />
            </div>

            {/* kẻ */}
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
                <Typography
                    sx={{ fontWeight: 'bold', padding: '1%', color: '#2f2f65' }}
                >
                    {' '}
                    Help
                </Typography>
                <div
                    style={{
                        background: '#eff0f2',
                        height: '2px',
                        flexGrow: '7',
                    }}
                ></div>
            </div>
            {/* kẻ */}
            {/* kẻ */}
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
                <Typography
                    sx={{ fontWeight: 'bold', padding: '1%', color: '#2f2f65' }}
                >
                    {' '}
                    Tutorials
                </Typography>
                <div
                    style={{
                        background: '#eff0f2',
                        height: '2px',
                        flexGrow: '7',
                    }}
                ></div>
            </div>
            {/* kẻ */}
            {/* kẻ */}
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
                <Typography
                    sx={{ fontWeight: 'bold', padding: '1%', color: '#2f2f65' }}
                >
                    {' '}
                    Help Forum
                </Typography>
                <div
                    style={{
                        background: '#eff0f2',
                        height: '2px',
                        flexGrow: '7',
                    }}
                ></div>
            </div>
            {/* kẻ */}
        </div>
    );
};
export default FrameContent;
