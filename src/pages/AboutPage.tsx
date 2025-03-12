import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const AboutImage = styled.div`
  img {
    width: 100%;
    border-radius: var(--border-radius);
    box-shadow: var(--box-shadow);
  }
`;

const AboutContent = styled.div`
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    color: var(--text-color);
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

const TeamSection = styled.div`
  margin-top: 4rem;
`;

const TeamGrid = styled.div`
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

const TeamMember = styled.div`
  text-align: center;
  
  img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 1rem;
    border: 3px solid var(--primary-color);
  }
  
  h4 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-secondary);
    font-size: 0.875rem;
  }
`;

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Flash USDT trc20 | USDT FLASHER PRO"
        description="Learn about the team behind flash USDT trc20 and our mission to provide the most reliable USDT flashing software in the market."
        keywords="flash usdt trc20, mission, USDT flasher, about us, flash usdt software, flash usdt binance p2p, flash usdt binance"
      />
      
      <Section
        title="About USDT FLASHER PRO"
        subtitle="Learn about our mission, vision, and the team behind the most reliable USDT flashing software."
        background="light"
        padding="large"
      >
        <AboutContainer>
          <AboutImage>
            <img src="/Assets/flash_team.jpg" alt="USDT FLASHER PRO Team" />
          </AboutImage>
          
          <AboutContent>
            <h3>Our Mission</h3>
            <p>
              At USDT FLASHER PRO, our mission is to provide the most reliable, secure, and user-friendly USDT flashing software in the market. We believe in empowering individuals and businesses with the tools they need to maximize their cryptocurrency potential.
            </p>
            
            <h3>Our Story</h3>
            <p>
              Founded in 2022 by a team of blockchain experts and cryptocurrency enthusiasts, USDT FLASHER PRO was born out of the need for a reliable USDT flashing solution. After experiencing the limitations and security issues with existing tools, our founders decided to create a better alternative.
            </p>
            <p>
              Since our launch, we've helped thousands of users flash over $500 million in USDT across various blockchain networks. Our commitment to continuous improvement and customer satisfaction has made us the preferred choice for USDT flashing.
            </p>
            
            <h3>Why Choose Us</h3>
            <ul>
              <li>Industry-leading security measures to protect your assets</li>
              <li>365+ days of live flash validity</li>
              <li>Support for all major blockchain networks</li>
              <li>Dedicated customer support team</li>
              <li>Regular software updates and improvements</li>
              <li>Transparent pricing with no hidden fees</li>
            </ul>
          </AboutContent>
        </AboutContainer>
        
      </Section>
    </Layout>
  );
};

export default AboutPage;
