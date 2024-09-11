import ToolHeader from '../component1/toolHeader';

const Minimac4Params = () => {
    return (
        <div
            style={{
                display: 'flex',
                padding: '1%',
                maxWidth: '55%',
                flexDirection: 'column',
            }}
        >
            <div style={{ maxWidth: '100%' }}>
                <ToolHeader model="Minimac" url={''} />
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus sint debitis doloribus voluptate numquam illo,
                reprehenderit asperiores, est excepturi minima natus, similique
                exercitationem aperiam ut ad vel a eos suscipit?
            </div>
        </div>
    );
};
export default Minimac4Params;
