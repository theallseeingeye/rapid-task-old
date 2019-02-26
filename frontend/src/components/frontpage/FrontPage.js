import React, { Component } from 'react';
import styled from 'styled-components';

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

const MainFlexBox = styled.div`
	display: flex;
	flex-direction: column;
	height: auto;
`;

class FrontPage extends Component {
  render() {
    return (
      <MainFlexBox role="main">
        <MainPage/>
        <Features/>
        <FinancialFeatures/>
        <Quotes/>
        <PainterLadder/>
        <EmployeeFeatures/>
        <ClientFeatures/>
        <CityAnimation/>
        <CalendarFeatures/>
        <AnalyticsFeatures/>
        <About/>
        <SubscriptionForm/>
        <Footer/>
			</MainFlexBox>
    );
  }
}

export default FrontPage;
