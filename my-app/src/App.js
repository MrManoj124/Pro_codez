import './App.css';
import Categories from './Components/JsFiles/Categories';
import LoginForm from './Components/JsFiles/LoginForm';
import RegisterForm from './Components/JsFiles/RegisterForm';

function App() {
  return (
    <div className="App">
      <LoginForm/>
      <RegisterForm/>
      <Categories/>
    </div>
  );
}

export default App;
