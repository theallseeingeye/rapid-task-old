import React, { Component } from 'react';
import styled from 'styled-components';

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


const Div = styled.div`
  //width: 100%;
  //height: 100%;
`;

class FrontPage extends Component {
  render() {
    return (
      <Div>
        <MainPage/>
        <Features/>
        <CityAnimation/>
        <Quotes/>
        <PainterLadder/>
        <EmployeeFeatures/>
        <ClientFeatures/>
        <CalendarFeatures/>
        <FinancialFeatures/>
        {/*<AnalyticsFeatures/>*/}
        <About/>
        <SubscriptionForm/>
        <Footer/>
      </Div>
    );
  }
}

export default FrontPage;
