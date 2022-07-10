import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Home, Misc } from '../../../pages';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/'
                    element={
                        <Home />
                    }
                />
                <Route
                    path='/misc'
                    element={
                        <Misc />
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
