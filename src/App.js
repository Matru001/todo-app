import './App.css';
import Home from './components/Home';
import Add from './components/Add';
import Edit from './components/Edit';
import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
