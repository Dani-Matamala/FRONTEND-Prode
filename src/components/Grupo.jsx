import React from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'
import Game from './Game';

/*
    Este componente va a renderizar como estan coformados los grupos
*/

const StyledTableCell = withStyles((theme) => ({
    head: {
        background: '#53112A',
        padding: 0,
        color: "white",
        border: 0

    },
    body: {
        background: '#882947',
        fontSize: 14,
        padding: 0,
        color: "white",
        border:0,
        paddingBlock: 5
    }
}))(TableCell);

const StyledTableHead = withStyles((theme) => ({
    root: {
        background: '#53112A',
    }
}))(TableHead)

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        maxWidth: 700
    },
});

function Grupo() {

    const classes = useStyles();

    return (
        <TableContainer component={Paper} style={{ width: "400px"}}>
            <Table className={classes.table} aria-label="customized table">
                <StyledTableHead>
                    <TableRow>
                        <StyledTableCell align="center">Grupo X</StyledTableCell>
                    </TableRow>
                </StyledTableHead>
                <TableBody>
                    <StyledTableRow>
                        <StyledTableCell align="center"><Game /></StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="center">Argentina</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="center">Argentina</StyledTableCell>
                    </StyledTableRow>
                    <StyledTableRow>
                        <StyledTableCell align="center">Argentina</StyledTableCell>
                    </StyledTableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Grupo