import { Switch } from "react-router-dom"
import { Dashboard } from "../pages/Dashboard"
import { Login } from "../pages/Login"
import { Signup } from "../pages/Signup"
import {Route} from "./Route"

export const Routes = () => (
    <Switch>
        <Route exact path="/" component={Dashboard}/>
        {/* <Route path = "/dashboard" component={Dashboard}/> */}
        <Route path="/login" component={Login}/>
        <Route path = "/signup" component={Signup}/>
    </Switch>
)