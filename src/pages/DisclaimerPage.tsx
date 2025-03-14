import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';

const DisclaimerContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  
  h3 {
    font-size: 1.5rem;
    margin: 2rem 0 1rem;
    color: var(--text-color);
  }
  
  p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    color: var(--text-color);
  }
  
  ul, ol {
    margin-bottom: 1.5rem;
    padding-left: 1.5rem;
    
    li {
      margin-bottom: 0.5rem;
      line-height: 1.7;
    }
  }
  
  a {
    color: var(--primary-color);
    text-decoration: none;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const LastUpdated = styled.p`
  font-style: italic;
  color: var(--text-secondary);
  margin-bottom: 2rem;
`;

const DisclaimerPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Disclaimer | USDT FLASHER PRO"
        description="Read our disclaimer for USDT FLASHER PRO. Understand the risks and limitations associated with using our software."
        keywords="disclaimer, legal notice, risk disclosure, USDT flasher disclaimer, liability limitations"
        canonicalUrl="https://usdtflasher.pro/disclaimer"
      />
      
      <Section
        title="Disclaimer"
        subtitle="Please read this disclaimer carefully before using USDT FLASHER PRO."
        background="light"
        padding="large"
      >
        <DisclaimerContainer>
          <LastUpdated>Last Updated: March 1, 2025</LastUpdated>
          
          <h3>1. General Information</h3>
          <p>
            The information provided by USDT FLASHER PRO ("we," "us," or "our") on our website and software (collectively, the "Service") is for general informational purposes only. All information on the Service is provided in good faith, however, we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Service.
          </p>
          
          <h3>2. No Financial Advice</h3>
          <p>
            The information contained on the Service is not intended as, and shall not be understood or construed as, financial advice. We are not a financial advisor, and the information provided on the Service is not a substitute for professional financial advice. You should consult with a professional financial advisor before making any financial decisions.
          </p>
          <p>
            The use of any information provided on the Service is solely at your own risk, and you should always conduct your own research and due diligence before making any financial decisions.
          </p>
          
          <h3>3. Cryptocurrency Risks</h3>
          <p>
            Cryptocurrency investments are subject to high market risk. We are not responsible for your investment decisions. You should be aware that:
          </p>
          <ul>
            <li>Cryptocurrency values can fluctuate significantly</li>
            <li>Past performance is not indicative of future results</li>
            <li>Cryptocurrency investments may not be suitable for all investors</li>
            <li>The cryptocurrency market is largely unregulated</li>
            <li>There is a risk of total loss of investment</li>
          </ul>
          <p>
            You should never invest money that you cannot afford to lose.
          </p>
          
          <h3>4. No Guarantees</h3>
          <p>
            We do not guarantee any specific results from the use of our Service. The performance of USDT FLASHER PRO depends on various factors, including but not limited to network conditions, blockchain congestion, and market volatility.
          </p>
          <p>
            We do not guarantee that:
          </p>
          <ul>
            <li>The Service will meet your specific requirements</li>
            <li>The Service will be uninterrupted, timely, secure, or error-free</li>
            <li>The results that may be obtained from the use of the Service will be accurate or reliable</li>
            <li>The quality of any products, services, information, or other material purchased or obtained by you through the Service will meet your expectations</li>
          </ul>
          
          <h3>5. Use at Your Own Risk</h3>
          <p>
            Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.
          </p>
          
          <h3>6. Compliance with Laws</h3>
          <p>
            You are responsible for ensuring that your use of USDT FLASHER PRO complies with all applicable laws, regulations, and rules in your jurisdiction. Cryptocurrency regulations vary by country and region, and it is your responsibility to be aware of and comply with any relevant laws.
          </p>
          <p>
            We do not represent that the Service is appropriate or available for use in all jurisdictions. Accessing the Service from territories where it is illegal is prohibited.
          </p>
          
          <h3>7. Technical Limitations</h3>
          <p>
            USDT FLASHER PRO operates on blockchain technology, which has inherent limitations and risks. These include, but are not limited to:
          </p>
          <ul>
            <li>Network congestion and delays</li>
            <li>Blockchain forks and protocol changes</li>
            <li>Smart contract vulnerabilities</li>
            <li>Wallet security risks</li>
            <li>Third-party service dependencies</li>
          </ul>
          <p>
            We are not responsible for any losses or issues that may result from these technical limitations.
          </p>
          
          <h3>8. Third-Party Links</h3>
          <p>
            The Service may contain links to third-party websites or services that are not owned or controlled by us. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party websites or services.
          </p>
          <p>
            You acknowledge and agree that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with the use of or reliance on any such content, goods, or services available on or through any such websites or services.
          </p>
          
          <h3>9. Limitation of Liability</h3>
          <p>
            In no event shall we, our directors, employees, partners, agents, suppliers, or affiliates be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul>
            <li>Your access to or use of or inability to access or use the Service</li>
            <li>Any conduct or content of any third party on the Service</li>
            <li>Any content obtained from the Service</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content</li>
            <li>Any other matter relating to the Service</li>
          </ul>
          
          <h3>10. Changes to This Disclaimer</h3>
          <p>
            We reserve the right to modify this disclaimer at any time. Any changes will be effective immediately upon posting the updated disclaimer on our website. Your continued use of the Service after any such changes constitutes your acceptance of the new disclaimer.
          </p>
          
          <h3>11. Contact Us</h3>
          <p>
            If you have any questions about this disclaimer, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:legal@usdtflasherpro.com">legal@usdtflasherpro.com</a>
          </p>
        </DisclaimerContainer>
      </Section>
    </Layout>
  );
};

export default DisclaimerPage;
