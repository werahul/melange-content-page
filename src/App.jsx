import React, {useState, useEffect} from 'react'
import { Preloader } from './Components/Layout';
import { Home } from './Components/Pages';


const App = () => {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate some asynchronous task (e.g., API call) that takes time
    const fetchData = async () => {
      // Your asynchronous task here
      // For demonstration purposes, using a setTimeout to simulate loading
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    };

    fetchData();
  }, []);
  return (
    <div>

      {loading ? <Preloader /> : <Home/>}



    </div>
  )
}

export default App