// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router , Routes, Route, Link} from 'react-router-dom';
import './App.css';

const Home = () => {
  return <h1>Home</h1>
};

const SignUp = () => {
  return <h1>Sign Up</h1>;
};

const UserProfile = () => {
  return <h1>User Profile</h1>;
};

const App = () => {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signup">Sign Up</Link>
        </li>
        <li>
          <Link to="/userprofile">User Profile</Link>
        </li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
      </Routes>
    </Router>
  );

}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
