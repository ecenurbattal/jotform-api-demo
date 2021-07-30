import { AppWrapper } from "./App.styles";
import { useHistory } from "react-router-dom";
import {
  Switch,
  Route
} from "react-router-dom";
import Forms from "./components/Forms/Forms";
import Home from "./components/Home/Home";
import Submissions from "./components/Submissions/Submissions";
//import { useState } from "react";



function App() {

  const jotform = window.JF;
  const history = useHistory();
  //const [apiKey, setApiKey] = useState();

  const getLoginForm = () => {
    jotform.login(
      
      function success(){
        //setApiKey(jotform.getAPIKey())
        window.localStorage.setItem('apiKey',jotform.getAPIKey())
        history.push('/forms')
      },
      function error(){
        window.alert('Giriş başarısız')
      }
    )
  }

  return (
    <AppWrapper>
      <Switch>
        <Route exact={true} path='/'>
          <Home
            onButtonClick={getLoginForm}
          />
        </Route>
        <Route exact={true} path='/forms'>
          <Forms/>
        </Route>
        <Route path='/forms/:formId/submissions'>
          <Submissions/>
        </Route>
      </Switch>
    </AppWrapper>
  );
}

export default App;
