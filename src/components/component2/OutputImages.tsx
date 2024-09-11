import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const OutputImages = () => {
    const files = useSelector((state: RootState) => state.fileStore);
    const results = useSelector((state: RootState) => state.resultsStringStore);
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '10px',
                justifyContent: 'center',
            }}
        >
            <div
                style={{
                    flex: '1',
                    display: 'flex',
                    flexWrap: 'wrap',
                    padding: '0% 2% 0% 2%',
                }}
            >
                {files.map((item, idx) => (
                    <div
                        key={item.key}
                        style={{
                            width: '100%',
                            boxSizing: 'border-box',
                        }}
                    >
                        <img
                            src={URL.createObjectURL(item.file)}
                            alt={item.key}
                            style={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: '8px',
                                boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                            }}
                        />
                        <div
                            style={{
                                margin: '20px 0 20px 0',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                fontFamily: 'cursive',
                            }}
                        >
                            Prediction: {results[idx]}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default OutputImages;
