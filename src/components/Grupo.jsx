import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import Pais from './Pais';

/*
    Este componente va a renderizar como estan coformados los grupos
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
        border:0,
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
});

function Grupo() {

    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{ width: "190px"}}>
            <Table className={classes.table} aria-label="customized table">
                <StyledTableHead>
                    <TableRow>
                        <StyledTableCell align="center">Grupo X</StyledTableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell align="center"><Pais /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="center"><Pais /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="center"><Pais /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="center"><Pais /></StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Grupo