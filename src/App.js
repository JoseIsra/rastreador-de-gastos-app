
import './App.css';
import {Grid } from '@material-ui/core'
import {Detail } from './components/Details/Detail'
import {Main } from './components/Main/Main'
import useStyles from './style'
function App() {
  const classes = useStyles();
  return (
    
      <Grid container  className={classes.grid} spacing={0} alignItems="center" 
      justify="center" style={{minHeight:"100vh"}}>
        <Grid  item xs={12} sm={3}>
      <Detail title="Ingresos" />
        </Grid>
        <Grid  item xs={12} sm={4}>
        <Main />
        </Grid>
        <Grid  item xs={12} sm={3}>
      <Detail title="Salidas"/>
        </Grid>

      </Grid>
    
  );
}

export default App;
