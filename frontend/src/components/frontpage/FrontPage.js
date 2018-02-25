import React, { Component } from 'react';

import Features from "./features/Features";
import Quotes from "./quote-features/QuoteFeatures";
import PainterLadder from "./employee-features/PainterLadder";
import EmployeeFeatures from "./employee-features/EmployeeFeatures";
import ClientFeatures from "./client-features/ClientFeatures";
import CalendarFeatures from "./calendar-features/CalendarFeatures";
import FinancialFeatures from "./financial-features/FinancialFeatures";
import AnalyticsFeatures from "./analytics-features/AnalyticsFeatures";
import About from "./about/About";
import SubscriptionForm from './contact/SubscriptionForm';
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";
import CityAnimation from "./map-features/MapFeatures";

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
