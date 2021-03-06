import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Login from "./pages/Login/index";
import Home from "./pages/Home/homeAfter";
import Profile from "./pages/Profile";
import Signup from "./pages/SignUp";
import Booking from "./pages/Vehicle-detail";
import NotFound from "./pages/NotFound";
import VehicleType from "./pages/vehicle-type";
import Chat from "./pages/Chat/index";
import RoomChat from "./pages/Chat/chatDetail";
import SetPassword from "./pages/forgot-password";
import History from "./pages/History";
import Reservation from "./pages/Reservation";
import Payment from "./pages/Payment";
import ChangePass from "./pages/Change-pass";
import AddVehicle from "./pages/AddVehicle";
import SecReservation from "./pages/Reservation/secondRev";
import EditVehicle from "./pages/EditVehicle";
import VehicleCategory from "./pages/vehicle-category";

import React, { Component } from "react";
import { Provider as ReduxProvider } from "react-redux";
import store from "./redux/store";

export default class Router extends Component {
  render() {
    const state = JSON.parse(localStorage.getItem("state"));
    const accessToken = state ? state.auth.token : null;
    return (
      <BrowserRouter>
        <ReduxProvider store={store}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/login"
              render={(routerProps) => {
                if (accessToken) return <Redirect from="/login" to="/" />;
                return <Login {...routerProps} />;
              }}
            />
            <Route
              path="/signup"
              render={(routerProps) => {
                if (accessToken) return <Redirect from="/signup" to="/" />;
                return <Signup {...routerProps} />;
              }}
            />
            <Route
              path="/profile"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/profile" to="/" />;
                return <Profile {...routerProps} />;
              }}
            />
            <Route
              path="/vehicle/detail/:id"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/vehicle/detail/:id" to="/" />;
                return <Booking {...routerProps} />;
              }}
            />
            <Route
              path="/vehicle/edit/:id"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/vehicle/edit/:id" to="/" />;
                return <EditVehicle {...routerProps} />;
              }}
            />
            <Route
              path="/chat"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/chat" to="/" />;
                return <Chat {...routerProps} />;
              }}
            />
            <Route
              path="/room"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/room" to="/" />;
                return <RoomChat {...routerProps} />;
              }}
            />
            <Route path="/forgot_password" component={SetPassword} />
            <Route
              path="/history"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/history" to="/" />;
                return <History {...routerProps} />;
              }}
            />
            <Route
              path="/reservation/gopayment"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/reservation/gopayment" to="/" />;
                return <SecReservation {...routerProps} />;
              }}
            />
            <Route
              path="/reservation/:id"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/reservation" to="/" />;
                return <Reservation {...routerProps} />;
              }}
            />
            <Route
              path="/payment/:id"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/payment" to="/" />;
                return <Payment {...routerProps} />;
              }}
            />
            <Route
              path="/change_password"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/change_password" to="/" />;
                return <ChangePass {...routerProps} />;
              }}
            />
            <Route
              path="/add_vehicle"
              render={(routerProps) => {
                if (!accessToken) {
                  return <Redirect from="/add_vehicle" to="/" />;
                }
                return <AddVehicle {...routerProps} />;
              }}
            />
            <Route
              path="/vehicle/:category"
              render={(routerProps) => {
                if (!accessToken) return <Redirect from="/vehicle/:category" to="/" />;
                return <VehicleCategory {...routerProps} />;
              }}
            />
            <Route path="/vehicle" component={VehicleType} />
            <Route path="*" component={NotFound} />
          </Switch>
        </ReduxProvider>
      </BrowserRouter>
    );
  }
}
