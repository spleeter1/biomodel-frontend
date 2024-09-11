import {
    Box,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
    Select,
    TextField,
    Typography,
} from '@mui/material';

const SelectInputType = () => {
    return (
        <div>
            <div
                style={{
                    borderLeft: '4px solid #e8ecee',
                    borderTopLeftRadius: 5,
                    borderTopRightRadius: 5,
                }}
            >
                <Typography
                    sx={{
                        background: '#e8ecee',
                        fontWeight: 'bold',
                        borderTopRightRadius: 5,
                        padding: '5px',
                        paddingLeft: '3%',
                        color: '#505398',
                    }}
                >
                    Select Input Type
                </Typography>

                <Box
                    sx={{
                        paddingLeft: '3%',
                        paddingTop: '1%',
                        olor: '#505398',
                    }}
                >
                    <Select sx={{ width: '100%', height: '40px' }}>
                        {/* <Option> </Option> */}
                    </Select>
                </Box>
                <Typography
                    style={{
                        fontWeight: 'bold',
                        paddingLeft: '3%',
                        color: '#505398',
                    }}
                >
                    Accession
                </Typography>
                <Box sx={{ paddingLeft: '3%' }}>
                    <TextField
                        sx={{
                            width: '100%',
                        }}
                        InputProps={{
                            sx: { padding: '0px 10px', height: '40px' },
                        }}
                    >
                        {' '}
                    </TextField>
                </Box>
                <Typography
                    sx={{
                        paddingBottom: '2%',
                        paddingLeft: '3%',
                        paddingTop: '10px',
                    }}
                >
                    Explain: Lorem ipsum dolor sit amet, consectetur adipisicing
                    elit. Ipsum id ducimus neque at numquam maiores alias saepe
                    quis, quas, maxime deleniti nisi quia praesentium tempore
                    fuga, labore optio quidem. Eum.
                </Typography>
            </div>
            <div style={{ paddingTop: '1%' }}>
                <FormControl>
                    <FormLabel
                        id="demo-controlled-radio-buttons-group"
                        sx={{ fontWeight: 'bold', color: '#505398' }}
                    >
                        Select output format
                    </FormLabel>
                    <RadioGroup
                    // aria-labelledby="demo-controlled-radio-buttons-group"
                    // name="controlled-radio-buttons-group"
                    // value={value}
                    // onChange={handleChange}
                    >
                        <FormControlLabel
                            // value=""
                            control={<Radio />}
                            label="selection 1"
                        />
                    </RadioGroup>
                </FormControl>
            </div>
            <Typography sx={{ paddingTop: '10px' }}>
                {' '}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Adipisci nihil repudiandae sint soluta quod ab. Modi cum
                deserunt, ullam aut voluptatibus optio veniam quae provident
                obcaecati, numquam, deleniti fugit placeat!{' '}
            </Typography>
        </div>
    );
};
export default SelectInputType;
