import React, { Component } from 'react';

import Features from "./features-list/Features";
import Quotes from "./features-quote/QuoteFeatures";
import PainterLadder from "./features-employee/svg/PainterLadder";
import EmployeeFeatures from "./features-employee/EmployeeFeatures";
import ClientFeatures from "./features-client/ClientFeatures";
import CalendarFeatures from "./features-calendar/CalendarFeatures";
import FinancialFeatures from "./features-financial/FinancialFeatures";
import AnalyticsFeatures from "./features-analytics/AnalyticsFeatures";
import About from "./about/About";
import SubscriptionForm from './contact/SubscriptionForm';
import Footer from "./footer/Footer";
import MainPage from "./first-page/MainPage";
import CityAnimation from "./features-map/MapFeatures";

class FrontPage extends Component {
  render() {
    return (
      <div>
        <MainPage/>
        <Features/>
        <CityAnimation/>
        <Quotes/>
        <PainterLadder/>
        <EmployeeFeatures/>
        <ClientFeatures/>
        <CalendarFeatures/>
        <FinancialFeatures/>
        <AnalyticsFeatures/>
        <About/>
        <SubscriptionForm/>
        <Footer/>
      </div>
    );
  }
}

export default FrontPage;
