import { useState } from "react";
import {
  Box,
  Container,
  Stack,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar";
import Feeds from "./components/Feeds/Feeds";
import Rightbar from "./components/Rightbar";
import AddPost from "./components/Feeds/AddPost";
const App = () => {
  const [mode, setMode] = useState("light");
  const ThemeMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={ThemeMode}>
      <Box
        className="div"
        bgcolor={"background.default"}
        color={"text.primary"}
      >
        <Navbar />
        <Stack direction="row" gap={2} justifyContent="space-between">
          <Sidebar mode={mode} changeMode={setMode} />
          <Feeds />
          <Rightbar />
        </Stack>
        <AddPost />
      </Box>
    </ThemeProvider>
  );
};

export default App;
