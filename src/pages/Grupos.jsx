import React from 'react'
import Grupo from '../components/Grupo'
import { Grid } from "@material-ui/core";


function Grupos() {

// TODO: Esto va a renderizar el total de los grupos del torneo

  return (
      <Grid container spacing={2}>
        <Grid item><Grupo /></Grid>
      </Grid>
  )
}

export default Grupos