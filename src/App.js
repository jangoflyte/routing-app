// import logo from './logo.svg';
import React, {useState, useEffect, useContext} from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import './App.css';

const UserContext = React.createContext({user: {}, setUser: () => {}});

const App = () => {
  const [data, setData] = useState([]);
  const [user, setUser] = useState({
    name : {
      first: "",
      last: "",
      title: ""
    },
    location: {
      street: {
        number: "",
        name: ""
      },
      city: "",
      state: "",
      postcode: ""
    }
  });

  useEffect(() => {
    fetch(`https://randomuser.me/api/?results=5`)
    .then((res) => res.json())
    .then((data) => {setData(data.results)});
  }, []);

  const value = {user, setUser};
  const navigate = useNavigate ();
  const location = useLocation ();
  console.log(location);

  return (
    <>
      <UserContext.Provider value={value}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/userprofile">User Profile</Link>
        </li>
        <li>
          <Link to="/user">Users</Link>
        </li>
      </ul>
      <button onClick={() => {navigate("/signup", { state: {info:"some info"}})}}>Sign Up</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/user" element={<List list={data}/>} />
        <Route path="/:userName" element={<Details/>} />
      </Routes>
      </UserContext.Provider>
    </>
  );

}

const List = ({list}) => {
  return (
    <ul>
      {list.map((user) => 
        <User key={user.name.first} user={user}/>
      )}
    </ul>
  )
}

const User = ({user}) => {
  const {setUser} = useContext(UserContext);
  return (
    <Link to={`/${user.login.username}`}>
      <li onClick={() => {setUser(user)}}>
        {user.name.first} {user.name.last}
      </li>
    </Link>
  );
}

const Details = () => {
  const {user} = useContext(UserContext);
  return (
    <div>
      <div>
        Name: {user.name.title} {user.name.first} {user.name.last}
      </div>
      <div>
        Address: {user.location.street.number} {user.location.street.name}
        {user.location.city}, {user.location.state}, {user.location.postcode}
      </div>
    </div>
  );
}

const Home = () => {
  return <h1>Home</h1>;
};

const SignUp = () => {
  return <h1>Sign Up</h1>;
};

const UserProfile = () => {
  return <h1>User Profile</h1>;
};

export default App;

