import React, { Component } from 'react';
import styled from 'styled-components';

import Introduction from "./introduction/Introduction";
import Features from "./features/Features";
import Quotes from "./quote-features/QuoteFeatures";
import EmployeeFeatures from "./employee-features/EmployeeFeatures";
import ClientFeatures from "./client-features/ClientFeatures";
import CalendarFeatures from "./calendar-features/CalendarFeatures";
import InventoryFeatures from "./inventory-features/InventoryFeatures";
import FinancialFeatures from "./financial-features/FinancialFeatures";
import AnalyticsFeatures from "./analytics-features/AnalyticsFeatures";
import About from "./about/About";
import Contact from "./contact/Contact";
import Footer from "./footer/Footer";
import MainPage from "./main-page/MainPage";

import CityAnimation from "./map-features/MapFeatures";




const Arrow = styled.div`
  height: 30vh;
`;

const FeaturesContainer = styled.div`
  height: 130vh;
  background-color: ${props => props.theme.logoblue};
  clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);// Order of polygon- (x,y) (TL, TR, BR, BL) 
`;

const QuotesContainer = styled.div`
  height: 200vh;
`;

const JobCostsContainer = styled.div`
  //margin: auto;
  height: 200vh;
  background-color: greenyellow;
  //position: relative;
`;

const MapsContainer = styled.div`
  height: 90vh;
  //border: 40px double aqua;
`;

const EmployeeContainer = styled.div`
  height: 90vh;
  background-color: darkorange;
`;

const ClientContainer = styled.div`
  //height: 200vh;
  //border: 8px solid gold;
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
        <QuotesContainer>
          <Quotes/>
        </QuotesContainer>
        <MapsContainer>
          <CityAnimation/>
        </MapsContainer>
        <EmployeeContainer>
          <EmployeeFeatures/>
        </EmployeeContainer>
        <ClientContainer>
          Client Features go here. Talk about how we communicate with clients and keep track of them.
          <ClientFeatures/>
        </ClientContainer>
        <div>
          Calendar/Scheduling- Talk about calendar features and how it is seamlessly integrated with everything
          <CalendarFeatures/>
        </div>
        <div>
          <InventoryFeatures/>
        </div>
        <div>
          <FinancialFeatures/>
        </div>
        <div>
          <AnalyticsFeatures/>
        </div>
        <div>
          <About/>
        </div>
        <div>
          <Contact/>
        </div>
        <div>
          <Footer/>
        </div>
      </div>
    );
  }
}

export default FrontPage;
