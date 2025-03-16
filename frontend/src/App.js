import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import CreateMemory from './components/CreateMemory';
import Account from './components/Account';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Layout from './components/Layout';
import Error from './components/Error';
import EditProfile from './components/EditProfile';

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create_memory" element={<CreateMemory />} />
            <Route path="/account" element={<Account />} />
            <Route path="/settings" element={<EditProfile />} />
            {/* Catch-all route for invalid URLs */}
            <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
