import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import Pais from './Pais';

/*
    Este componente va a renderizar como estan coformados los grupos

    TODO: Ver el tema de las key, ya que nos esta largando un error de renderizado por falta de key
*/

const StyledTableCell = withStyles((theme) => ({
    head: {
        padding: 0,
        color: "white",
        border: 0,
    },
    body: {
        fontSize: 14,
        padding: 0,
        color: "white",
        border: 0,
        paddingBlock: 5
    }
}))(TableCell);

const StyledTableHead = withStyles((theme) => ({
    root: {
        background: '#6d0019'
    }
}))(TableHead)

const StyledTableRow = withStyles((theme) => ({
    root: {
        background: '#550B26'
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        maxWidth: 200
    },
    container: {
        minWidth: "200px",
        scrollbarWidth: "none" /* Firefox */,
        maxHeight: 440,
        "&::-webkit-scrollbar": {
            display: "none"
        } /* Chrome */

    }
});


function Grupo(props) {

    const { grupo, equipos } = props;

    const classes = useStyles();

    return (
        <TableContainer component={Paper} className={classes.container} >
            <Table className={classes.table} aria-label="customized table">
                <StyledTableHead>
                    <TableRow>
                        <StyledTableCell align="center">{grupo}</StyledTableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    {equipos.map((pais) => (
                        <StyledTableRow >
                            <StyledTableCell align="center"><Pais name={pais} /></StyledTableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Grupo