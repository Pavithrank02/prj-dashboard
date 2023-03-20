
import {BasicCard} from './views/BasicCard';
import './App.css';
import { Route, Routes } from 'react-router';
import Home from './views/Home';
import Posts from './views/Posts';
import Gallery from './views/Gallery';
import Todo from './views/Todo';

function App() {
  return (
    
        <Routes>
        <Route path="/" element={<BasicCard />} />

          <Route path="/home/:profile/:id" element={<Home />} />
          <Route path="/home/:post/:id" element={<Posts />} />
          <Route path="/home/:gallery/:id" element={<Gallery />} />
          <Route path="/home/:todo/:id" element={<Todo />} />
        </Routes>


  );
}

export default App;
