import React from 'react'
import { Route, Switch } from "react-router-dom"
import MenuAppBar from "./navbar/NavBar"
import Home from "./home/Home"
import Resume from "./resume/Resume"
import "fontsource-roboto"

const App = () => {
  return (
    <div>
      <MenuAppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </Switch>
    </div>
    )
    // {/* <Route exact path="/" component={Airlines}/> */}
    // {/* <Route exact path="/airlines/:slug" component={Airline}/> */}
}

export default App
