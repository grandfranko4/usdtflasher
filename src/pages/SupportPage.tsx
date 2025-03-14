import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const SupportContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const SupportOptions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-bottom: 3rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const SupportCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
  
  svg {
    width: 60px;
    height: 60px;
    margin-bottom: 1.5rem;
    color: var(--primary-color);
  }
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    color: var(--text-secondary);
    margin-bottom: 1.5rem;
    line-height: 1.6;
  }
`;

const FAQSection = styled.div`
  margin-top: 4rem;
  
  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
    color: var(--primary-color);
    text-align: center;
  }
`;

const FAQItem = styled.div`
  margin-bottom: 1.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius);
  overflow: hidden;
`;

const FAQQuestion = styled.button<{ isOpen: boolean }>`
  width: 100%;
  text-align: left;
  padding: 1.25rem;
  background-color: ${({ isOpen }) => (isOpen ? 'var(--primary-color)' : 'var(--background-light)')};
  color: ${({ isOpen }) => (isOpen ? 'white' : 'var(--text-color)')};
  border: none;
  font-size: 1.125rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ isOpen }) => (isOpen ? 'var(--primary-color)' : 'var(--background-dark)')};
  }
  
  svg {
    transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.3s ease;
  }
`;

const FAQAnswer = styled.div<{ isOpen: boolean }>`
  padding: ${({ isOpen }) => (isOpen ? '1.25rem' : '0 1.25rem')};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.7;
  color: var(--text-color);
  
  p {
    margin-bottom: 1rem;
    
    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const SupportPage: React.FC = () => {
  const [openFAQ, setOpenFAQ] = React.useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqs = [
    {
      question: 'How do I get started with USDT FLASHER PRO?',
      answer: (
        <>
          <p>
            Getting started with USDT FLASHER PRO is easy! After purchasing a license, you'll receive an email with download instructions and your license key. Follow these steps:
          </p>
          <ol>
            <li>Download the software from the link provided in your email</li>
            <li>Install the software on your computer</li>
            <li>Launch the application and enter your license key when prompted</li>
            <li>Connect your wallet using the "Connect Wallet" button</li>
            <li>You're ready to start flashing USDT!</li>
          </ol>
          <p>
            For more detailed instructions, please refer to our <Link to="/documentation">Documentation</Link> or watch our <Link to="/tutorials">Video Tutorials</Link>.
          </p>
        </>
      ),
    },
    {
      question: 'What payment methods do you accept?',
      answer: (
        <>
          <p>
            We accept the following cryptocurrency payment methods:
          </p>
          <ul>
            <li>Bitcoin (BTC)</li>
            <li>USDT (TRC20)</li>
          </ul>
          <p>
            All payments are processed securely through our payment system. After completing your purchase, you'll receive an email with your license key and download instructions within 24 hours.
          </p>
        </>
      ),
    },
    {
      question: 'Is USDT FLASHER PRO compatible with my operating system?',
      answer: (
        <>
          <p>
            USDT FLASHER PRO is compatible with the following operating systems:
          </p>
          <ul>
            <li>Windows 10 and 11 (64-bit)</li>
            <li>macOS 10.15 (Catalina) and newer</li>
            <li>Linux (Ubuntu 20.04 LTS and newer)</li>
          </ul>
          <p>
            The software requires at least 4GB of RAM and 500MB of free disk space. A stable internet connection is also required for the software to function properly.
          </p>
        </>
      ),
    },
    {
      question: 'How long does the flashed USDT remain valid?',
      answer: (
        <p>
          All USDT flashed with our software remains valid for a minimum of 365 days. This means you can use, trade, or transfer the flashed USDT for at least one year without any issues. Our advanced technology ensures that the flashed USDT is fully tradable, swappable, and transferable across all supported networks.
        </p>
      ),
    },
    {
      question: 'What networks does USDT FLASHER PRO support?',
      answer: (
        <>
          <p>
            USDT FLASHER PRO supports flashing USDT on the following networks:
          </p>
          <ul>
            <li>TRON (TRC20) - Recommended for beginners due to lower fees</li>
            <li>Ethereum (ERC20)</li>
            <li>Binance Smart Chain (BEP20)</li>
            <li>Polygon (MATIC)</li>
            <li>Avalanche (AVAX)</li>
            <li>Solana (SOL)</li>
          </ul>
          <p>
            You can select your preferred network in the software interface before initiating a flash operation.
          </p>
        </>
      ),
    },
    {
      question: 'Can I upgrade my license to a higher tier?',
      answer: (
        <p>
          Yes, you can upgrade your license to a higher tier at any time. To upgrade, simply purchase the higher tier license, and our system will automatically detect your existing license and apply a discount based on your previous purchase. If you have any issues with the upgrade process, please contact our support team at <a href="mailto:support@usdtflasherpro.com">support@usdtflasherpro.com</a>.
        </p>
      ),
    },
  ];
  
  return (
    <Layout>
      <SEO
        title="Support | USDT FLASHER PRO"
        description="Get help and support for USDT FLASHER PRO. Find answers to frequently asked questions, contact our support team, or access our knowledge base."
        keywords="support, help, FAQ, customer service, USDT flasher support, troubleshooting"
        canonicalUrl="https://usdtflasher.pro/support"
      />
      
      <Section
        title="Support Center"
        subtitle="We're here to help you get the most out of USDT FLASHER PRO. Choose from the options below to get the support you need."
        background="light"
        padding="large"
      >
        <SupportContainer>
          <SupportOptions>
            <SupportCard>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z"/>
              </svg>
              <h3>Knowledge Base</h3>
              <p>
                Browse our comprehensive knowledge base to find answers to common questions and learn how to use USDT FLASHER PRO effectively.
              </p>
              <Button to="/documentation" variant="outline">
                View Documentation
              </Button>
            </SupportCard>
            
            <SupportCard>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9.06 9.06 0 0 0 8 15z"/>
              </svg>
              <h3>Contact Support</h3>
              <p>
                Need personalized assistance? Our support team is ready to help you with any issues or questions you may have.
              </p>
              <Button to="/contact" variant="primary">
                Contact Us
              </Button>
            </SupportCard>
          </SupportOptions>
          
          <FAQSection>
            <h2>Frequently Asked Questions</h2>
            
            {faqs.map((faq, index) => (
              <FAQItem key={index}>
                <FAQQuestion
                  isOpen={openFAQ === index}
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                </FAQQuestion>
                <FAQAnswer isOpen={openFAQ === index}>{faq.answer}</FAQAnswer>
              </FAQItem>
            ))}
          </FAQSection>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <p style={{ marginBottom: '1.5rem', color: 'var(--text-secondary)' }}>
              Still have questions? Check out our full documentation or contact our support team.
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              <Button to="/documentation" variant="outline">
                Documentation
              </Button>
              <Button to="/contact" variant="primary">
                Contact Support
              </Button>
            </div>
          </div>
        </SupportContainer>
      </Section>
    </Layout>
  );
};

export default SupportPage;
