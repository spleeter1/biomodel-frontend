import {
    InputBase,
    Tooltip,
    Button,
    styled,
    List,
    ListItem,
    Paper,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import { ChangeEvent, useState } from 'react';
import listParams from '../../data/listParams.json';
import { useNavigate } from 'react-router-dom';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    padding: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        // marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    },
}));

const data = () => {
    let x: String[] = [];
    Object.entries(listParams).flatMap(([k, v]) => {
        x.push(k);
        Object.entries(v).map(([key]) => {
            x.push(key);
        });
    });
    return x;
};
const arrData = data();
const SearchBar = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();
    // const search = x => {
    //     return data.filter(item => {
    //         console.log(item.toLowerCase().includes(query));
    //     });
    // };
    const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const searchTerm = e.target.value;
        setQuery(searchTerm);
    };

    const filteredItems = arrData.filter(item =>
        item.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    const handleClear = () => {
        setQuery('');
    };
    const handeItemClick = (item: string) => {
        navigate(`/${item}`);
        setQuery('');
    };
    return (
        <div
            style={{
                display: 'flex',
                flexWrap: 'nowrap',
            }}
        >
            <Search
                sx={{
                    border: '1px solid grey',
                    borderTopRightRadius: '0px',
                    borderBottomRightRadius: '0px',
                }}
            >
                <SearchIconWrapper>
                    <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                    value={query}
                    onChange={handleInputChange}
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                />
                {query && (
                    <Paper
                        sx={{
                            position: 'absolute',
                            top: '100%',
                            left: 0,
                            right: 0,
                            zIndex: 2,
                            maxHeight: '200px',
                            overflowY: 'auto',
                        }}
                    >
                        <List>
                            {filteredItems.map((item, idx) => (
                                <ListItem
                                    button
                                    key={idx}
                                    onClick={() =>
                                        handeItemClick(item.toString())
                                    }
                                >
                                    {item}
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                )}
            </Search>

            <Tooltip title="esc">
                <Button
                    sx={{
                        border: '1px solid grey',
                        borderTopLeftRadius: '0px',
                        borderBottomLeftRadius: '0px',
                    }}
                    onClick={handleClear}
                >
                    <ClearIcon />
                </Button>
            </Tooltip>
        </div>
    );
};
export default SearchBar;
