import React, { Component } from 'react';
import styled from 'styled-components';

import Introduction from "./introduction/Introduction";
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

const Arrow = styled.div`
  height: 30vh;
`;

const FeaturesContainer = styled.div`
  height: 130vh;
`;

const QuotesContainer = styled.div`
  height: 600vh;
  
`;

const MapsContainer = styled.div`
  height: 110vh;
`;

class FrontPage extends Component {
  render() {
    return (
      <div>
        <MainPage/>
        <Arrow>
          <Introduction/>
        </Arrow>
        <FeaturesContainer>
          <Features/>
        </FeaturesContainer>
        <MapsContainer>
          <CityAnimation/>
        </MapsContainer>
        <QuotesContainer>
          <Quotes/>
        </QuotesContainer>

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
