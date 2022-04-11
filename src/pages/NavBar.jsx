import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SportsSoccerIcon from '@material-ui/icons/SportsSoccer';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import TodayIcon from '@material-ui/icons/Today';
import Home from './Home';
import { autocompleteClasses } from '@mui/material';
import Grupos from './Grupos';


const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        background: '#6F102E',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        margin: 0,
        paddingTop: '80px',
        position: 'static',
        background: 'linear-gradient(to left, #6F102E, #FF004C, #6F102E)',
        border: "solid 1px black",
        height: '100vh',
        width: '100vw',
        gridTemplateRows: "1fr 1fr 1fr 1fr",
        overflowX: 'hidden',
    },
}));

function createIcons(descripcion, icon, key) {
    return { descripcion, icon, key };
}

const drawerIcons = [
    createIcons('Partidos', <SportsSoccerIcon />, 1),
    createIcons('Equipos', <GroupIcon />, 2),
    createIcons('Jugadores', <PersonIcon />, 3),
    createIcons('Estadísticas', <EqualizerIcon />, 4),
    createIcons('Grupos', <SportsSoccerIcon />, 5),
    createIcons('Calendario', <TodayIcon />, 6),

]
export default function ClippedDrawer(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Prode Poche
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        {drawerIcons.map((icon) => (
                            <ListItem button key={icon.key}>
                                <ListItemIcon>{icon.icon}</ListItemIcon>
                                <ListItemText primary={icon.descripcion} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar />
                <Grupos />
            </main>
        </div>
    );
}
