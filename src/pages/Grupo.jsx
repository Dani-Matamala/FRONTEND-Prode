import { TableContainer, Paper, Table, TableCell, TableHead, TableRow, TableBody } from '@mui/material'
import React from 'react'
import Pais from '../components/Pais'

function Grupo() {
    return (
        <TableContainer component={Paper} className="TablaGrupo">
            <Table sx={{ minWidth: 350 }} aria-label="simple table">
                <TableHead className='TituloTableGrupo'>
                    <TableRow className='FilaTablaGrupo'>
                        <TableCell align="center">Grupo x</TableCell>
                    </TableRow>
                    <TableBody>
                <TableRow >
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                    <TableCell>
                        Rsultado
                    </TableCell>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                    <TableCell>
                        Rsultado
                    </TableCell>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                    <TableCell>
                        Rsultado
                    </TableCell>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                    <TableCell>
                        Rsultado
                    </TableCell>
                    <TableCell>
                        <Pais></Pais>
                    </TableCell>
                </TableRow>

                </TableBody>
                </TableHead>
            </Table>
        </TableContainer>
    )
}

export default Grupo