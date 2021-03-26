import React, { useEffect, useRef } from 'react';
import './App.css';
import { Grid } from '@material-ui/core'
import { Detail } from './components/Details/Detail'
import { Main } from './components/Main/Main'
import useStyles from './style'
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui";
import { SpeechState, useSpeechContext } from '@speechly/react-client';
function App() {
  const classes = useStyles();
  const { speechState } = useSpeechContext()
  const main = useRef(null);
  const executeScroll = () => main.current.scrollIntoView();

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      executeScroll()
    }
  }, [speechState])
  return (
    <div style={{ position: "relative" }}>
      <Grid container className={classes.grid} spacing={0} alignItems="center"
        justify="center" style={{ minHeight: "100vh" }}>
        <Grid item xs={12} sm={3} className={classes.mobile}>
          <Detail title="Income" />
        </Grid>
        <Grid ref={main} item xs={12} sm={4} className={classes.main}>
          <Main />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.desktop}>
          <Detail title="Income" />
        </Grid>
        <Grid item xs={12} sm={3} className={classes.last}>
          <Detail title="Expense" />
        </Grid>
      </Grid>
      <PushToTalkButtonContainer>
        <PushToTalkButton size="4rem" />
        <ErrorPanel />

      </PushToTalkButtonContainer>
    </div>
  );
}

export default App;
