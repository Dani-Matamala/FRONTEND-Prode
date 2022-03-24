import './App.css';
import { Grid } from '@material-ui/core';
// import Grupos from './pages/Grupos';
import Grupo from './components/Grupo';

function App() {
  return (
    <Grid container direction="column">
      <Grid item container>
        <Grid item xs={12}>
          <Grupo />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
