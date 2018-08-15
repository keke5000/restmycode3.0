import React, {Component} from 'react';
import './App.css';
import HeaderComponent from "./Components/HeaderComponent";
import Switch from "react-router-dom/es/Switch";
import Route from "react-router-dom/es/Route";
import ListingPage from "./Components/ListingPage";
import AddPage from "./Components/AddPage";
import Navikation from "./Components/Navikation";
import BrowserRouter from "react-router-dom/es/BrowserRouter";
import Grid from "react-bootstrap/es/Grid";
import Col from "react-bootstrap/es/Col";


class App extends Component {

    render() {
        return (
            <BrowserRouter>
                <div className="container">
                    <HeaderComponent/>
                    <Navikation/>
                    <Switch>
                        <Route exact path="/" component={ListingPage}/>
                        <Route path="/add" component={AddPage}/>
                        {/*<Route path="/update" component={}></Route>*/}
                    </Switch>
                </div>

            </BrowserRouter>
        );
    }
}

export default App;