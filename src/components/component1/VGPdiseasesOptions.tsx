import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Typography,
} from '@mui/material';
import React, { useState } from 'react';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { setIsLoadingState } from '../../redux/loadingSlice';
import { RootState } from '../../redux/store';
import Loading from '../component2/LoadingGif';
const options = [
    'PRSice-2 (EAS)',
    'LDpred2-auto (EAS)',
    'LDpred2-grid (EAS)',
    'PRS-CS (EAS)',
    'PRS-CSx (EAS + EUR)',
    'PRSice-2 (CKB)',
    'LDpred2-auto',
    'LDpred2-grid (CKB)',
    'PRS-CS (CKB)',
    'PGS catalog',
];

const VGPdiseasesOptions = () => {
    const dispatch = useDispatch();
    const [checkedItems, setCheckedItems] = useState<boolean[]>(
        Array(options.length).fill(false)
    );
    const allChecked = checkedItems.every(Boolean);
    const isLoading = useSelector(
        (state: RootState) => state.loadingStore.value
    );

    const [images, setImages] = useState([]);
    const handleCheckboxChange =
        (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
            const { checked } = event.target;
            setCheckedItems(prevCheckedItems => {
                const updatedCheckedItems = [...prevCheckedItems];
                updatedCheckedItems[index] = checked;
                return updatedCheckedItems;
            });
        };

    const handleCheckboxAll = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { checked } = event.target;
        setCheckedItems(Array(options.length).fill(checked));
    };
    const handleRunTool = async () => {
        dispatch(setIsLoadingState());

        try {
            const selectedOptions = options.filter(
                (_, index) => checkedItems[index]
            );
            const tmp = selectedOptions.map(option => `'${option}'`).join(',');
            const res = `[${tmp}]`;
            const formData = new FormData();
            formData.append('methods', res);

            const response = await axios.post(
                'http://192.168.1.135:32100/vgp-diseases',
                formData
            );
            // console.log(data);
            console.log('Server response:', response.data);
            setImages(response.data.images);
            // console.log(images);
            // console.log(images.length);
        } catch (error) {
            console.error('Error sending data:', error);
        } finally {
            dispatch(setIsLoadingState());
        }
    };

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    flexWrap: 'wrap',
                    gap: 1,
                    padding: '0 7%',
                }}
            >
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={allChecked}
                            onChange={handleCheckboxAll}
                            inputProps={{ 'aria-label': 'All' }}
                        />
                    }
                    label="All"
                />

                {options.map((option, i) => (
                    <FormControlLabel
                        key={option}
                        control={
                            <Checkbox
                                onChange={handleCheckboxChange(i)}
                                checked={checkedItems[i]}
                                inputProps={{ 'aria-label': option }}
                            />
                        }
                        label={option}
                    />
                ))}
            </Box>

            <Button
                sx={{
                    display: 'flex',
                    backgroundColor: '#133f6e',
                    width: '150px',
                    justifyContent: 'space-around',
                    margin: '0 7%',
                }}
                variant="contained"
                onClick={handleRunTool}
            >
                <PlayArrowIcon />
                <Typography>Run Tool</Typography>
            </Button>
            {images.length
                ? images.map((image, index) => (
                      <Box
                          component="img"
                          key={index}
                          src={`data:image/jpeg;base64,${image}`}
                          alt={`Image ${index}`}
                      />
                  ))
                : ''}
            {isLoading === true ? <Loading /> : <></>}
        </Box>
    );
};

export default VGPdiseasesOptions;
