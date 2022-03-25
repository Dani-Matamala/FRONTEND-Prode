import React from 'react'
import Typography from '@mui/material/Typography'
import Avatar from '@material-ui/core/Avatar'
import logoPais from '../pictures/descarga.jpeg'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid'



/*
    game va a respresentar los juegos, entre local y visitante,
    le llegaran props como resultado nombre de los paises que se enfrentan,
    estadio y hora a la que se jugaria el mismo.
*/
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(0),
        },
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: 5,
        marginLeft: 5,
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));



function Game() {

    const classes = useStyles();

    return (
        <Grid container className={classes.root} style={ {flex:'100'}} justifyContent="space-between">
            <Grid container style={{ flex: '100' }} >
                <Grid item style={{ flex: '20' }}  >
                    <Avatar alt="Logo Pais" src={logoPais} className={classes.small} />
                </Grid>
                <Grid item style={{ flex: '80' }}>
                    <Typography variant="body1" color="initial">Argentina</Typography>
                </Grid>
            </Grid>
            <Grid>Resultado</Grid>
            <Grid container style={{flex: '100'}} >
                <Grid item style={{ flex: '80' }} >
                    <Typography variant="body1" color="initial">Argentina</Typography>
                </Grid>
                <Grid item style={{ flex: '20' }}>
                    <Avatar alt="Logo Pais" src={logoPais} className={classes.small} />
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Game