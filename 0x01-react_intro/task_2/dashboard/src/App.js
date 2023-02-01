import logo from './logo.jpg';
import './App.css';
import { getFullYear, getFooterCopy } from "./utils";

function App() {
  return (
    <div>
      <div className="App-header">
        <img src={logo}  alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <hr className="line-break"></hr>
      <div className="App-body">
        <p>
          Login to access the full dashboard
        </p>
        <form>
          <label htmlFor="email">Email</label>
          <input type="email" id="email"></input>
          <label htmlFor="password">Password</label>
          <input type="password" id="password"></input>
          <button>OK</button>
        </form>
      </div>
      <hr className="line-break"></hr>
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy()}</p>
      </div>

    </div>
  );
}

export default App;
