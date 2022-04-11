import React from 'react'
import Pais from './Pais';
import Typography from '@mui/material/Typography'
import { makeStyles } from '@material-ui/core/styles';

/*
    Este componente va a renderizar como estan coformados los grupos

    TODO: Ver el tema de las key, ya que nos esta largando un error de renderizado por falta de key
*/


const useStyles = makeStyles({
    p: {
        backgroundColor: '#6d0019',
        color: 'white',
        borderRadius: '5px 5px 0px 0px',
    },
    div: {
        backgroundColor: '#550B26',
        color: 'white',
        borderRadius: '5px',
    }
});


function Grupo(props) {

    const { grupo, equipos } = props;

    const classes = useStyles();

    return (
        <div className={classes.div}>
            <Typography align='center'
                variant="body1"
                className={classes.p}>{grupo}</Typography>
            {equipos.map((pais) => (
                <Pais country={pais.country} code={pais.code} />
            ))}
        </div>
    )
}

export default Grupo