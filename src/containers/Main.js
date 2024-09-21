import React, { Component } from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/HomeComponent";
import Splash from "../pages/splash/Splash";
import Aboutus from "../pages/aboutus/AboutusComponent.js";
import Career from "../pages/career/Career.js";
import Blog from "../pages/blog/Blog.js";
import Contact from "../pages/contact/ContactComponent";
import ServicesPage from "../pages/services/ServicesPage.js";
import { settings } from "../portfolio.js";
import Error404 from "../pages/errors/error404/Error";

export default class Main extends Component {
  render() {
    return (
      <BrowserRouter basename="/">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) =>
              settings.isSplash ? (
                <Splash {...props} theme={this.props.theme} />
              ) : (
                <Home {...props} theme={this.props.theme} />
              )
            }
          />
          <Route
            path="/home"
            render={(props) => <Home {...props} theme={this.props.theme} />}
          />
          <Route
            path="/career"
            exact
            render={(props) => <Career {...props} theme={this.props.theme} />}
          />
          <Route
            path="/aboutus"
            render={(props) => <Aboutus {...props} theme={this.props.theme} />}
          />
          <Route
            path="/blog"
            render={(props) => <Blog {...props} theme={this.props.theme} />}
          />
          <Route
            path="/contact"
            render={(props) => <Contact {...props} theme={this.props.theme} />}
          />

          {settings.isSplash && (
            <Route
              path="/splash"
              render={(props) => <Splash {...props} theme={this.props.theme} />}
            />
          )}

          <Route
            path="/services"
            render={(props) => (
              <ServicesPage {...props} theme={this.props.theme} />
            )}
          />
          <Route
            path="*"
            render={(props) => <Error404 {...props} theme={this.props.theme} />}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}
