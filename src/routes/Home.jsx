import './home.css'
import { useContext } from 'react';
import { DataContext } from '../components/context/DataContext';

const Home = () => {
    const { main, setMain } = useContext(DataContext)
    return (
        <>
          
            <div className="home">

                <div className='message'>
                    <h1>Welcome to Cake sugar!</h1>
                    <p>we have amazing cakes, cookies and pies </p>
                    {
                        main === false ?
                            <button onClick={() => setMain(true)}>Let´s Start</button> : null
                    }
                </div>
            </div>
        </>
    );
}

export default Home