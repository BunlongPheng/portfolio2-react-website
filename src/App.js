import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import ContactUs from './pages/contact_us';
import AboutUs from './pages/about_us';
import OurPartners from './pages/our_partners';
import Career from './pages/career';
import KnowledgeResources from './pages/knowledge_resources';
import OurServices from './pages/our_services';
import SidePage from './pages/home/SidePage';
import ScrollToTop from './components/ScrollToTop';
import LiveChatForm from './components/LiveChatForm';
import Insights from './pages/insights';
import Login from './pages/login_and_registration/login';
import Register from './pages/login_and_registration/register';

class App extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/live_chat">
            <LiveChatForm />
          </Route>
          <Route path="/about_us">
            <AboutUs />
          </Route>
          <Route path="/our_partners">
            <OurPartners />
          </Route>
          <Route path="/contact_us">
            <ContactUs />
          </Route>
          <Route path="/career">
            <Career />
          </Route>
          <Route path="/knowledge_resources">
            <KnowledgeResources />
          </Route>
          <Route path="/our_services">
            <OurServices />
          </Route>
          <Route path="/insights">
            <Insights />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/sp">
            <SidePage />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
