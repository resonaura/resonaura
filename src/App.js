import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

import './App.css';
import ReleasePage from './ReleasePage';
import ReleasesPage from './ReleasesPage';
import ArtistPage from './ArtistPage';

function App() {
    return (
        <div className="app">
            <Router>
                <Routes>
                    <Route path="/releases" element={<ReleasesPage />} exact />
                    <Route path="/:link" element={<ReleasePage />} exact />
                    <Route path="/" element={<ArtistPage />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
