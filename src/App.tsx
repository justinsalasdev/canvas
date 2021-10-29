// import Xdefi from "./components/Xdefi/Xdefi";
import { Grid } from "@mui/material";
import Ethereum from "./components/Ethereum/Ethereum";
import Subscriber from "./Subscriber";
import { Switch, Route } from "react-router-dom";
import { Box } from "@mui/system";

function App() {
  return (
    <Grid container>
      <Grid item>
        <Box {...{ bgcolor: "primary.main" }}>side bar</Box>
      </Grid>
      <Grid item>
        <Switch>
          <Route path="/ethereum" component={Ethereum} />
          <Route path="/subscriber" component={Subscriber} />
          <Route exact path="/" />
        </Switch>
      </Grid>
    </Grid>
  );
}

export default App;
