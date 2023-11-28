import React, { useEffect } from 'react'
import './App.css';
import DashView from './components/DashBoard/DashView';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Actions/DataAction';
import NavBar from './components/NavBar/NavBar.jsx';

const App = () => {
  const dispatch = useDispatch(); 
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <NavBar/>
      <hr style={{marginTop : "10px"}} />
      <DashView/>
    </div>
  ) : <p>No Data</p>
}

export default App