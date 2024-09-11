// import React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
// import Collapse from '@mui/material/Collapse';
// import ExpandLess from '@mui/icons-material/ExpandLess';
// import ExpandMore from '@mui/icons-material/ExpandMore';

import listParams from '../../data/listParams.json';
import { Link } from 'react-router-dom';

const tmp = listParams;
const data = Object.entries(tmp);

const NestedList = () => {
    // const [open, setOpen] = React.useState<boolean[]>([]);

    return (
        <div>
            {data.map(([key, value]) => {
                return (
                    <List
                        sx={{
                            width: '100%',
                            bgcolor: 'background.paper',
                        }}
                        component="nav"
                        aria-labelledby="nested-list-subheader"
                        key={key}
                        subheader={
                            <ListSubheader
                                component="div"
                                id="nested-list-subheader"
                                sx={{
                                    background:
                                        'linear-gradient(to right, #891731, #133f6e)',
                                    maxWidth: '100%',
                                    maxHeight: '80%',
                                    fontStyle: 'bold',
                                    color: 'white',
                                    fontFamily: 'sans-serif',
                                }}
                            >
                                {key.toUpperCase()}
                            </ListSubheader>
                        }
                    >
                        {Object.entries(value).map(([subKey], subIdx) => {
                            // console.log(typeof k);
                            // console.log(
                            //     `${idx.toString()}${subIdx.toString()}`
                            // );
                            // const x = Object.entries(v);
                            return (
                                <div key={`${subIdx}`}>
                                    <ListItemButton
                                        // onClick={() =>
                                        //     handleClick(
                                        //         Number(
                                        //             `${idx.toString()}${subIdx.toString()}`
                                        //         ),
                                        //         v
                                        //     )
                                        // }
                                        key={subKey.toString()}
                                        component={Link}
                                        to={`/${subKey}`}
                                    >
                                        <ListItemText primary={subKey} />
                                        {/* {open[
                                            Number(
                                                `${idx.toString()}${subIdx.toString()}`
                                            )
                                        ] ? (
                                            <ExpandLess />
                                        ) : (
                                            <ExpandMore />
                                        )} */}
                                    </ListItemButton>

                                    {/* <Collapse
                                        in={
                                            open[
                                                Number(
                                                    `${idx.toString()}${subIdx.toString()}`
                                                )
                                            ]
                                        }
                                        timeout="auto"
                                        unmountOnExit
                                    > */}
                                    {/* <List component="div" disablePadding>
                                            <ListItemButton sx={{ pl: 4 }}>
                                                <ListItemText primary="" />
                                            </ListItemButton>
                                        </List> */}
                                    {/* </Collapse> */}
                                </div>
                            );
                        })}
                    </List>
                );
            })}
        </div>
    );
};

export default NestedList;
