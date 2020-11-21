import React, { useContext } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Menu from '../components/Menu'
import HomePage from '../pages/HomePage'
import Footer from '../components/Footer'
import ThisSitePage from '../pages/ThisSitePage'
import AcquirementsPage from '../pages/AcquirementsPage'
import ProjectsPage from '../pages/ProjectsPage'
import ContactsPage from '../pages/ContactsPage'
import MenuContext from '../contexts/MenuContext';
import MenuCollapsed from '../components/MenuCollapsed'

function Router() {
  const { showMenu } = useContext(MenuContext);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Menu/>
          <HomePage/>{showMenu ? <MenuCollapsed/> : ""}
          <Footer/>
        </Route>

        <Route exact path="/acquirements" >
          <Menu/>
          <AcquirementsPage/>{showMenu ? <MenuCollapsed/> : ""}
          <Footer/>
        </Route>

        <Route exact path="/projects" >
          <Menu/>
          <ProjectsPage/>{showMenu ? <MenuCollapsed/> : ""}
          <Footer/>
        </Route>

        <Route exact path="/contacts" >
          <Menu/>
          <ContactsPage/>{showMenu ? <MenuCollapsed/> : ""}
          <Footer/>
        </Route>

        <Route exact path="/thisSite" >
          <Menu/>
          <ThisSitePage/>{showMenu ? <MenuCollapsed/> : ""}
          <Footer/>
        </Route>

        <Route path="/" >
          <Menu/>
          <h3>Página não encontrada... (404)</h3>{showMenu ? <MenuCollapsed/> : ""}
          <Footer/>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router