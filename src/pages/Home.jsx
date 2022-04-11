import React from 'react'
import { Grid } from '@material-ui/core'
import Grupos from './Grupos'
import { makeStyles } from '@material-ui/core/styles'
import  Container from '@material-ui/core/Container/Container'

const useStyles = makeStyles((theme) => ({
    grupo: {
        
    }
}))
function Home() {

    const classes = useStyles()
    return (
            <Grupos className={classes.grupo} />
            )
        }
        
        export default Home