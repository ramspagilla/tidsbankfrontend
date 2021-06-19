import { Route, Switch } from "react-router-dom";
import Menu from "../Menu";
import NoMatch from "../NoMatch";
import RolesRoute from "../RolesRoute";
import ListOfRequests from "./ListOfRequests";
import RequestDetails from './RequestDetails';
import AddingRequest from './AddingRequest';
import AddInigiblP from "../IneligiblePeriod/AddInigiblP";
import '../App.css';



const RequestBox = () => (
  <>
    <Menu/>
    <Switch>
      <Route exact path="/">
      <AddingRequest/>
      <ListOfRequests/>
      <AddInigiblP/>
      </Route>
      <Route path="/requests/:requestId">
      <RequestDetails/>
      </Route>
      <RolesRoute path="/secret" roles={['admin']}>
      <Route >
      <AddInigiblP/>
      </Route>
      </RolesRoute>
      <Route path="*">
        <NoMatch/>
      </Route>
    </Switch>
  </>
)

export default RequestBox
