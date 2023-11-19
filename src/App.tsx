import React from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Sidebar } from "./components/Sidebar/Sidebar";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Box>
        <Grid container>
          <Grid item xs={12} className="header"></Grid>
          <Grid xs={4}>
            <div>
              <Sidebar />
            </div>
          </Grid>
          <Grid xs={8}>
            <div>
              <Layout />
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
