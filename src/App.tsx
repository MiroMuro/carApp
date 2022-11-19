import React from "react";
import { AppBar } from "@mui/material";
import "./App.css";
import ToolBar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CarList from "./components/Carlist";
function App() {
  return (
    <div className="App">
      <AppBar position="static">
        <ToolBar>
          <Typography variant="h6"></Typography>
          My kebab restaurant
        </ToolBar>
      </AppBar>
      <CarList />
    </div>
  );
}

export default App;
