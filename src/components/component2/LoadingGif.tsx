import logo from '../../assets/logo-vinbigdata-transparent.gif';
const Loading = () => {
    return (
        <div
            style={{
                display: 'flex',
                maxWidth: '100%',

                paddingBottom: '10px',
                justifyContent: 'center',
            }}
        >
            <img
                src={logo}
                alt="isLoading"
                style={{
                    width: '20%',
                    background: 'rgba( 255,255,255, 0.5)',
                    zIndex: 1000,
                }}
            />
        </div>
    );
};
export default Loading;
