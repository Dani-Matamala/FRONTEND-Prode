import React from 'react'
import Grupo from '../components/Grupo'
import { Grid, Paper } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

function newGrupo(grupo, equipos, key) {
  return { grupo, equipos, key };
}

function newPais(code, country) {
  return { code, country };
}

const ARG = newPais('ar', 'Argentina');
const AUS = newPais('au', 'Australia');
const BRA = newPais('br', 'Brasil');
const CHI = newPais('ch', 'China');
// const COL = newPais('co', 'Colombia');
const ESP = newPais('es', 'España');
const FRA = newPais('fr', 'Francia');
const GER = newPais('de', 'Alemania');
const ITA = newPais('it', 'Italia');
const MEX = newPais('mx', 'Mexico');
const SUI = newPais('ch', 'Suiza');
const URU = newPais('uy', 'Uruguay');
const CRI = newPais('cr', 'Costa Rica');
const CMR = newPais('cm', 'Camerun');
const NGA = newPais('ng', 'Nigeria');
const CIV = newPais('ci', 'Costa de Marfil');
const ENG = newPais('gb', 'Inglaterra');
const ECU = newPais('ec', 'Ecuador');
const JPN = newPais('jp', 'Japon');
const POR = newPais('pt', 'Portugal');
const SEN = newPais('sn', 'Senegal');
const KOR = newPais('kr', 'Corea del Sur');
const NED = newPais('nl', 'Paises Bajos');
const IRN = newPais('ir', 'Iran');
const HRV = newPais('hr', 'Croacia');
const SAU = newPais('sa', 'Arabia Saudita');

const grupos = [
  newGrupo('A', [BRA, ESP, CRI, URU], 1),
  newGrupo('B', [CMR, NGA, CIV, ENG], 2),
  newGrupo('C', [GER, FRA, ARG, MEX], 3),
  newGrupo('D', [SUI, ECU, AUS, JPN], 4),
  newGrupo('E', [ITA, POR, SEN, KOR], 5),
  newGrupo('F', [CHI, NED, CMR, IRN], 6),
  newGrupo('G', [URU, HRV, ESP, BRA], 7),
  newGrupo('H', [ENG, CIV, NGA, SAU], 8),
]

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '214px 214px 214px 214px',
    gridGap: theme.spacing(3),
    margin: 0,
  }
}));

function Grupos() {
  // TODO: Esto va a renderizar el total de los grupos del torneo
  // TODO: eliminar scroll, renderizar 2 filas de 4 grupos, 

  const classes = useStyles();

  return (
    <Grid container
      spacing={2}
      direction="row"
      justifyContent="center"
      alignItems="center"
      className={classes.root}>
      {grupos.map(({ grupo, equipos, key }) => (
        <Grid item
          key={key}>
          <Grupo grupo={grupo} equipos={equipos} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Grupos