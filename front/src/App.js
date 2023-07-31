import { Route } from 'react-router-dom';
import './App.css';
// import { Button} from '@chakra-ui/react'
import Homepage from './Pages/Homepage';
import Chatpage from './Pages/Chatpage';
function App() {
  return (
    <div className="App">
        <Route path="/" component={Homepage} exact/>
          <Route path="/chat" component={Chatpage}/>
    </div>
  );
}

export default App;
 