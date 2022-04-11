import React from 'react'
import '../App.css'
import { makeStyles } from '@material-ui/core';
import { Avatar, Grid, Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        margin: 0,
        maxWidth: '214px',
    },
    small: {
        width: theme.spacing(3),
        height: theme.spacing(3),
        marginRight: 5,
        marginLeft: 5,
        alignItems: "center"
    },
    large: {
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
}));



function Pais(props = 'Pais') {
    const classes = useStyles()

    return (
        <Grid container spacing={2} alignItems='center' className={classes.root} >
            <Grid item>
                <Avatar variant='rounded' alt="Logo Pais" src={`https://flagcdn.com/40x30/${props.code}.png`
                } className={classes.small} />
            </Grid>
            <Grid item>
                <Typography noWrap variant="body1" color="initial">{props.country}</Typography>
            </Grid>
        </Grid>
    )
}

export default Pais