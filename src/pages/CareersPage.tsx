import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const CareersContainer = styled.div`
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

const ValuesSection = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }
`;

const ValuesGrid = styled.div`
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

const ValueCard = styled.div`
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

const BenefitsSection = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }
  
  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem 2rem;
    
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
    }
    
    li {
      display: flex;
      align-items: center;
      margin-bottom: 0.5rem;
      
      svg {
        min-width: 24px;
        height: 24px;
        margin-right: 1rem;
        color: var(--primary-color);
      }
    }
  }
`;

const OpeningsSection = styled.div`
  margin-bottom: 4rem;
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 2rem;
    color: var(--text-color);
    text-align: center;
  }
`;

const JobCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  margin-bottom: 2rem;
  
  h4 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--primary-color);
  }
  
  .job-meta {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.5rem;
    
    span {
      display: flex;
      align-items: center;
      font-size: 0.875rem;
      color: var(--text-secondary);
      
      svg {
        margin-right: 0.5rem;
      }
    }
  }
  
  p {
    color: var(--text-color);
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  .requirements {
    margin-bottom: 1.5rem;
    
    h5 {
      font-size: 1.125rem;
      margin-bottom: 0.75rem;
      color: var(--text-color);
    }
    
    ul {
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
        line-height: 1.7;
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

const CareersPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Flash USDT trust wallet | USDT FLASHER PRO"
        description="Join our team at USDT FLASHER PRO. Explore current job openings and learn about our flash USDT trust wallet Partnership and flash usdt binance partnership."
        keywords="flash usdt trust wallet, flash usdt binance, flash usdt binance p2p, flash usdt download, flash usdt software, USDT flasher jobs"
      />
      
      <Section
        background="light"
        padding="large"
      >
        <CareersContainer>
          <HeroSection>
            <h2>Join Our Team</h2>
            <p>
              At USDT FLASHER PRO, we're building the future of cryptocurrency tools. We're looking for talented individuals who are passionate about blockchain technology and want to make an impact in the crypto space.
            </p>
            <Button to="#openings" variant="primary" size="large">
              View Open Positions
            </Button>
          </HeroSection>
          
          <ValuesSection>
            <h3>Our Values</h3>
            <ValuesGrid>
              <ValueCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                </svg>
                <h4>Innovation</h4>
                <p>
                  We push the boundaries of what's possible in the cryptocurrency space, constantly seeking new solutions and improvements.
                </p>
              </ValueCard>
              
              <ValueCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                  <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
                </svg>
                <h4>Integrity</h4>
                <p>
                  We operate with honesty and transparency in all our dealings, building trust with our team members and customers.
                </p>
              </ValueCard>
              
              <ValueCard>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                </svg>
                <h4>Collaboration</h4>
                <p>
                  We believe in the power of teamwork and diverse perspectives to solve complex problems and drive success.
                </p>
              </ValueCard>
            </ValuesGrid>
          </ValuesSection>
          
          <OpeningsSection id="openings">
            <h3>Current Openings</h3>
            
            <JobCard>
              <h4>Senior Blockchain Developer</h4>
              <div className="job-meta">
                <span>Full-time</span>
                <span>Remote</span>
                <span>Competitive Salary</span>
              </div>
              <p>
                We're looking for an experienced blockchain developer to join our team and help build the next generation of USDT flashing technology. In this role, you'll work on developing and maintaining our core software, implementing new features, and ensuring the security and reliability of our platform.
              </p>
              <div className="requirements">
                <h5>Requirements:</h5>
                <ul>
                  <li>5+ years of software development experience</li>
                  <li>3+ years of experience with blockchain development</li>
                  <li>Strong knowledge of Solidity, Web3.js, and Ethereum/Tron/BSC networks</li>
                  <li>Experience with smart contract development and security</li>
                  <li>Proficiency in JavaScript/TypeScript and React</li>
                </ul>
              </div>
              <Button to="/contact" variant="primary">
                Apply Now
              </Button>
            </JobCard>
            
            <JobCard>
              <h4>Frontend Developer</h4>
              <div className="job-meta">
                <span>Full-time</span>
                <span>Remote</span>
                <span>Competitive Salary</span>
              </div>
              <p>
                We're seeking a talented Frontend Developer to join our team and help create intuitive, responsive user interfaces for our USDT flashing software. You'll work closely with our design and backend teams to implement engaging user experiences.
              </p>
              <div className="requirements">
                <h5>Requirements:</h5>
                <ul>
                  <li>3+ years of frontend development experience</li>
                  <li>Strong proficiency in React, TypeScript, and modern CSS</li>
                  <li>Experience with responsive design and cross-browser compatibility</li>
                  <li>Knowledge of state management solutions (Redux, Context API)</li>
                  <li>Familiarity with web3 libraries is a plus</li>
                </ul>
              </div>
              <Button to="/contact" variant="primary">
                Apply Now
              </Button>
            </JobCard>
          </OpeningsSection>
          
          <ContactSection>
            <h3>Don't See a Perfect Fit?</h3>
            <p>
              We're always looking for talented individuals to join our team. If you don't see a position that matches your skills but are passionate about cryptocurrency and blockchain technology, we'd still love to hear from you.
            </p>
            <Button to="/contact" variant="primary" size="large">
              Send Us Your Resume
            </Button>
          </ContactSection>
        </CareersContainer>
      </Section>
    </Layout>
  );
};

export default CareersPage;
