import { StarBorder } from '@mui/icons-material';
import { Select, Tooltip, MenuItem, FormControl, Box } from '@mui/material';

const PanelLeftTop = () => {
    return (
        // <div
        //     style={{
        //         maxWidth: '100%',
        //         borderRadius: '5px',
        //         padding: '5%',
        //     }}
        // >
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
            }}
        >
            <FormControl sx={{ flexGrow: 2 }}>
                <Select sx={{ width: '100%', height: '40px' }}>
                    <MenuItem>Full Tool Panel</MenuItem>
                    <MenuItem>EDAM Operations</MenuItem>
                    <MenuItem>EDAM Topics</MenuItem>
                    <MenuItem>Vertebrate Genomes Project</MenuItem>
                    <MenuItem>Single Cell</MenuItem>
                </Select>
            </FormControl>

            <Tooltip title="Favorite Tools" sx={{ paddingLeft: '20px' }}>
                <StarBorder />
            </Tooltip>
        </Box>
    );
};
export default PanelLeftTop;
