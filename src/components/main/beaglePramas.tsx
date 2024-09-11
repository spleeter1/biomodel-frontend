import SelectInputType from '../component1/selectInput';
import ToolHeader from '../component1/toolHeader';
import LineSeparator from '../component1/lineSeparator';

const BeagleParams = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                maxWidth: '55%',
                flexDirection: 'column',
            }}
        >
            <div>
                <ToolHeader model="Beagle" url={''} />
            </div>
            <LineSeparator content="Tool Parameters" />

            <div style={{ maxWidth: '100%' }}>
                <SelectInputType />
            </div>

            <LineSeparator content="Help" />
            <LineSeparator content="Tutorial" />
            <LineSeparator content="Help Forum" />
        </div>
    );
};
export default BeagleParams;
