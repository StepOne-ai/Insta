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
import NotificationFeed from './components/Events';
import CommentSection from './components/CommentSection';
import LikesList from './components/LikesList';
import Discover from './components/Discover';

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
            <Route path="/notifications" element={<NotificationFeed />} />
            <Route path="/comment_section" element={<CommentSection />} />
            <Route path="/likes_list" element={<LikesList />} />
            <Route path="/discover" element={<Discover />} />
            {/* Catch-all route for invalid URLs */}
            <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </div>
  );
}

export default App;
