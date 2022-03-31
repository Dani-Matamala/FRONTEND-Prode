import React from 'react'
import Grupo from '../components/Grupo'
import { Grid } from "@material-ui/core";

function newGrupo(grupo, equipos, key) {
  return { grupo, equipos, key };
}

const grupos = [
  newGrupo('A', ['BRA', 'ESP', 'CRC', 'URU'], 1),
  newGrupo('B', ['CAM', 'NGA', 'CIV', 'ENG'], 2),
  newGrupo('C', ['GER', 'FRA', 'ARG', 'PER'], 3),
  newGrupo('D', ['SUI', 'ECU', 'AUS', 'JPN'], 4),
  newGrupo('E', ['ITA', 'POR', 'SEN', 'KOR'], 5),
  newGrupo('F', ['CHI', 'NED', 'CMR', 'IRN'], 6),
  newGrupo('G', ['URU', 'CRC', 'ESP', 'BRA'], 7),
  newGrupo('H', ['ENG', 'CIV', 'NGA', 'CAM'], 8),
]

function Grupos() {
  // TODO: Esto va a renderizar el total de los grupos del torneo
  return (
    <Grid container spacing={2}>
      {grupos.map(({grupo, equipos, key}) => (
        <Grid item key={key}><Grupo grupo={grupo} equipos={equipos}/></Grid>
      ))}
    </Grid>
  )
}

export default Grupos