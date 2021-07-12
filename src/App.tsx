import Header from './components/Header';
import Login from './pages/Login';
import './App.css'
import Footer from './components/Footer';

const App = (): JSX.Element => {
  return (
    <div >
      <Login />
      <Footer />
    </div>
  );
}

export default App;
