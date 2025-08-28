import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { Route, Routes, Router, HashRouter } from "react-router-dom";


import { Main } from './Main.jsx';
import { EnterPG } from "./Components/EnterPG/index.jsx";
import { PrintPG }  from "./Components/PrintPG/index.jsx";
import { SearchPG }  from "./Components/SearchPG/index.jsx";
import { ActivatePG }  from "./Components/ActivatePG/index.jsx";
import { Options }  from "./Components/MorePG/index.jsx";

const View = () => {
    return(
        <HashRouter>
            <Routes>
                <Route path="/" element={<Main />}>
                    <Route index element={<EnterPG />} />
                    <Route path="/printPG" element={<PrintPG />} />
                    <Route path="/searchPG" element={<SearchPG />} />
                    <Route path="/activatePG" element={<ActivatePG />} />
                    <Route path="/options" element={<Options />} />
                </Route>
            </Routes>
        </HashRouter>
    )
}

const root = createRoot(document.body);
root.render(<View />);