import React from 'react'
import { Grid } from '@material-ui/core'
import Grupos from './Grupos'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: 'relative',
        background: 'linear-gradient(to left, #6F102E, #FF004C, #6F102E)',
    }
}))
function Home() {

    const classes = useStyles()
    return (
        <Grid container
            direction="row"
            justifyContent="center"
            alignItems="center"
            className={classes.root}>
            <Grupos />
        </Grid>
    )
}

export default Home