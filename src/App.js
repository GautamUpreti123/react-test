import './App.css';
import Assessments from './components/Assessments/Assessments'
import {AccountProvider} from './context/account.context'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <AccountProvider>
        <Assessments />
      </AccountProvider>
    </div>
  );
}

export default App;
