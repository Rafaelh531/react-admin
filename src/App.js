import Topbar from "./scenes/global/Topbar";
import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team"
import Invoices from "./scenes/invoices"
import DadosAluno from "./scenes/dadosAluno"
//import Bar from "./scenes/bar"
import Form from "./scenes/form"
//import Line from "./scenes/line"
//import Pie from "./scenes/pie"
//import FAQ from "./scenes/faq"
//import Geography from "./scenes/geography"
import Calendar from "./scenes/calendar"
import { useState } from "react";
import RegistrationForm from "./scenes/dadosAluno/formAddAluno";


function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          <Sidebar isSidebar={isSidebar} />
          <main className="content">
            <Topbar setIsSidebar={setIsSidebar} />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              
              <Route path="/dadosAluno" element={<DadosAluno/>}/>
              <Route path="/team" element={<Team/>}/>
              <Route path="/invoices" element={<Invoices/>}/>
              <Route path="/form" element={<Form/>}/>
              {/* <Route path="/bar" element={<Bar/>}/> */}
              {/* <Route path="/pie" element={<Line/>}/> */}
              {/* <Route path="/line" element={<Pie/>}/> */}
              {/* <Route path="/faq" element={<FAQ/>}/> */}
              {/* <Route path="/Geography" element={<Geography/>}/> */}
              <Route path="/calendar" element={<Calendar/>}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
