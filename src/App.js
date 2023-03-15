import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import Payment from './Payment';
import { useStateValue } from './StateProvider';
import { auth } from './firebase'
import { useEffect } from 'react';
import Orders from './Orders';

function App() {
  const [{ basket }, dispatch] = useStateValue()
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Router>


      <Routes>
        <Route path='/'
          element={<>
            <Header />
            <Home />
          </>}
        />
        <Route path='/checkout'
          element={<>
            <Header />
            <Checkout />
          </>
          }
        />
        <Route path='/payment'
          element={<>
            <Header />
            <Payment />

          </>
          }
        />

        <Route path='/login' element={<Login />} />
        <Route path='/orders' element={
        <>
        <Header/>
        <Orders />
        </>
        } />


      </Routes>


    </Router>
  );

}

export default App;
