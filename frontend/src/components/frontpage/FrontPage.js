import React, { Component } from 'react';
import styled from 'styled-components';

import Introduction from "./introduction/Introduction";
import Features from "./features/Features";
import Quotes from "./quote-features/QuoteFeatures";
import EmployeeFeatures from "./employee-features/EmployeeFeatures";
import ClientFeatures from "./client-features/ClientFeatures";
import CalendarFeatures from "./calendar-features/CalendarFeatures";
import FinancialFeatures from "./financial-features/FinancialFeatures";
import AnalyticsFeatures from "./analytics-features/AnalyticsFeatures";
import About from "./about/About";
import ContactMask from "./contact/ContactMask";
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
  //clip-path: polygon(0 0, 100% 0, 100% 93%, 0 100%);// Order of polygon- (x,y) (TL, TR, BR, BL) 
`;

const QuotesContainer = styled.div`
  height: 600vh;
`;

const MapsContainer = styled.div`
  height: 110vh;
`;

const EmployeeContainer = styled.div`
  height: 260vh;
`;

const ClientContainer = styled.div`
  height: 150vh;
  border: 8px solid gold;
`;

const CalendarContainer = styled.div`
  height: 130vh;
`;

const FinancialContainer = styled.div`
  height: 450vh;
`;

const AnalyticsContainer = styled.div`
  height: 100vh;
`;

const AboutContainer = styled.div`
  height: 100vh;
  background-color: rgba(113, 130, 161, 1);
  
`;

const ContactContainer = styled.div`
  height: 75vh;
`;

const FooterContainer = styled.div`
  height: 0vh;
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
        <EmployeeContainer>
          <EmployeeFeatures/>
        </EmployeeContainer>
        <ClientContainer>
          <ClientFeatures/>
        </ClientContainer>
        <CalendarContainer>
          <CalendarFeatures/>
        </CalendarContainer>
        <FinancialContainer>
          <FinancialFeatures/>
        </FinancialContainer>
        <AnalyticsContainer>
          <AnalyticsFeatures/>
        </AnalyticsContainer>
        <AboutContainer>
          <About/>
        </AboutContainer>
        <ContactContainer>
          <ContactMask/>
          <Contact/>
        </ContactContainer>
        <FooterContainer>
          <Footer/>
        </FooterContainer>
      </div>
    );
  }
}

export default FrontPage;
