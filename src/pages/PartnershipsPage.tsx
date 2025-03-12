import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const PartnershipsContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const HeroSection = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  
  h2 {
    font-size: 2.5rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
  
  p {
    font-size: 1.25rem;
    color: var(--text-secondary);
    max-width: 700px;
    margin: 0 auto 2rem;
    line-height: 1.7;
  }
`;

const BenefitsSection = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const BenefitCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  text-align: center;
  
  svg {
    width: 50px;
    height: 50px;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
  
  h4 {
    font-size: 1.25rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const ProgramsSection = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }
`;

const ProgramCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  margin-bottom: 2rem;
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--primary-color);
  }
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  ul {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
  }
`;

const TestimonialsSection = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }
`;

const TestimonialCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  margin-bottom: 2rem;
  
  .quote {
    font-style: italic;
    font-size: 1.125rem;
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.7;
    position: relative;
    padding: 0 1.5rem;
    
    &::before, &::after {
      content: '"';
      font-size: 2rem;
      color: var(--primary-color);
      position: absolute;
      opacity: 0.5;
    }
    
    &::before {
      top: -0.5rem;
      left: 0;
    }
    
    &::after {
      bottom: -1.5rem;
      right: 0;
    }
  }
  
  .author {
    display: flex;
    align-items: center;
    
    img {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
      margin-right: 1rem;
    }
    
    .info {
      h4 {
        font-size: 1.125rem;
        margin-bottom: 0.25rem;
        color: var(--text-color);
      }
      
      p {
        font-size: 0.875rem;
        color: var(--text-secondary);
      }
    }
  }
`;

const ContactSection = styled.div`
  text-align: center;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 2rem;
    line-height: 1.7;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }
`;

const PartnershipsPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Flash USDT trc20 Trust wallet | USDT FLASHER PRO"
        description="Flash USDT PRO integrates well with Flash USDT trc20 Trust wallet, flash usdt binance p2p, and more."
        keywords="Flash USDT trc20 Trust wallet, flash usdt binance p2p, flash usdt binance, flash usdt trust wallet, USDT flasher partners"
      />
      
      <Section
        background="light"
        padding="large"
      >
        <PartnershipsContainer>
          <HeroSection>
            <h2>Partner With USDT FLASHER PRO</h2>
            <p>
              Join forces with the leading USDT flashing software provider and unlock new revenue streams. Our partnership programs are designed to help you grow your business while providing value to your customers.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Become a Partner
            </Button>
          </HeroSection>
          
          <BenefitsSection>
            <h3>Why Partner With Us</h3>
            <BenefitsGrid>
              <BenefitCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"/>
                </svg>
                <h4>Competitive Commissions</h4>
                <p>
                  Earn up to 30% commission on every sale you refer through our affiliate program, with timely payouts and transparent tracking.
                </p>
              </BenefitCard>
              
              <BenefitCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                <h4>Marketing Support</h4>
                <p>
                  Access to professional marketing materials, including banners, product descriptions, and promotional content to boost your conversion rates.
                </p>
              </BenefitCard>
              
              <BenefitCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z"/>
                </svg>
                <h4>Dedicated Partner Manager</h4>
                <p>
                  Receive personalized support from a dedicated partner manager who will help you maximize your success and address any questions.
                </p>
              </BenefitCard>
              
              <BenefitCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
                <h4>Proven Product</h4>
                <p>
                  Partner with a trusted brand that has a proven track record of delivering high-quality software and excellent customer support.
                </p>
              </BenefitCard>
              
              <BenefitCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
                </svg>
                <h4>Comprehensive Training</h4>
                <p>
                  Access to detailed product training and resources to ensure you understand the software and can effectively promote it.
                </p>
              </BenefitCard>
              
              <BenefitCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2z"/>
                  <path d="M9.5 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                  <path d="M5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5v-7A1.5 1.5 0 0 1 5.5 3z"/>
                </svg>
                <h4>Regular Updates</h4>
                <p>
                  Stay ahead of the competition with regular product updates and new features that you can offer to your customers.
                </p>
              </BenefitCard>
            </BenefitsGrid>
          </BenefitsSection>
          
          <ProgramsSection>
            <h3>Our Partnership Programs</h3>
            
            <ProgramCard>
              <h4>Affiliate Program</h4>
              <p>
                Our affiliate program is perfect for bloggers, content creators, and influencers in the cryptocurrency space. Earn commissions by promoting USDT FLASHER PRO to your audience.
              </p>
              <ul>
                <li>Up to 30% commission on every sale</li>
                <li>90-day cookie duration</li>
                <li>Real-time tracking and reporting</li>
                <li>Monthly payouts in cryptocurrency</li>
                <li>Custom affiliate links and promo codes</li>
              </ul>
              <Button to="/contact" variant="outline">
                Join Affiliate Program
              </Button>
            </ProgramCard>
            
            <ProgramCard>
              <h4>Reseller Program</h4>
              <p>
                Become an authorized reseller of USDT FLASHER PRO and offer our software to your clients. Ideal for cryptocurrency service providers, consultants, and businesses in the blockchain industry.
              </p>
              <ul>
                <li>Bulk license discounts up to 40%</li>
                <li>White-label options available</li>
                <li>Priority technical support</li>
                <li>Dedicated account manager</li>
                <li>Co-marketing opportunities</li>
              </ul>
              <Button to="/contact" variant="outline">
                Become a Reseller
              </Button>
            </ProgramCard>
            
            <ProgramCard>
              <h4>Strategic Partnerships</h4>
              <p>
                We're always open to strategic partnerships with complementary businesses and services. If you have an innovative idea for collaboration, we'd love to hear from you.
              </p>
              <ul>
                <li>API integration opportunities</li>
                <li>Co-branded marketing campaigns</li>
                <li>Joint product development</li>
                <li>Cross-promotion initiatives</li>
                <li>Custom partnership terms</li>
              </ul>
              <Button to="/contact" variant="outline">
                Explore Strategic Partnerships
              </Button>
            </ProgramCard>
          </ProgramsSection>
          
          <TestimonialsSection>
            <h3>What Our Partners Say</h3>
            
            <TestimonialCard>
              <div className="quote">
                Partnering with USDT FLASHER PRO has been a game-changer for my business. The commission rates are excellent, and their team provides outstanding support. My audience loves the product, which makes it easy to promote.
              </div>
              <div className="author">
                <img src="https://via.placeholder.com/60" alt="John Smith" />
                <div className="info">
                  <h4>John Smith</h4>
                  <p>Crypto Influencer & Affiliate Partner</p>
                </div>
              </div>
            </TestimonialCard>
            
            <TestimonialCard>
              <div className="quote">
                As a reseller, I've been impressed with the quality of USDT FLASHER PRO and the level of support provided. My clients are extremely satisfied with the software, and the generous margins allow me to build a profitable business.
              </div>
              <div className="author">
                <img src="https://via.placeholder.com/60" alt="Sarah Johnson" />
                <div className="info">
                  <h4>Sarah Johnson</h4>
                  <p>Blockchain Solutions Provider & Reseller</p>
                </div>
              </div>
            </TestimonialCard>
          </TestimonialsSection>
          
          <ContactSection>
            <h3>Ready to Partner With Us?</h3>
            <p>
              Take the first step towards a profitable partnership. Contact our partnership team today to discuss how we can work together to achieve mutual success.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Contact Partnership Team
            </Button>
          </ContactSection>
        </PartnershipsContainer>
      </Section>
    </Layout>
  );
};

export default PartnershipsPage;
