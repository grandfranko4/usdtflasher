import React from 'react';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import styled from 'styled-components';

const RefundContainer = styled.div`
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

const RefundPage: React.FC = () => {
  return (
    <Layout>
      <SEO
        title="Refund Policy | USDT FLASHER PRO"
        description="Learn about our refund policy for USDT FLASHER PRO software. Understand the conditions and process for requesting a refund."
        keywords="refund policy, money back, return policy, USDT flasher refund, purchase refund"
        canonicalUrl="https://usdtflasher.pro/refund"
      />
      
      <Section
        title="Refund Policy"
        subtitle="Please read our refund policy carefully before making a purchase."
        background="light"
        padding="large"
      >
        <RefundContainer>
          <LastUpdated>Last Updated: March 1, 2025</LastUpdated>
          
          <h3>1. Overview</h3>
          <p>
            This Refund Policy outlines the terms and conditions for refunds related to the purchase of USDT FLASHER PRO software ("the Software"). We strive to provide high-quality software and excellent customer service, but we understand that in some cases, a refund may be necessary.
          </p>
          
          <h3>2. Eligibility for Refunds</h3>
          <p>
            Due to the digital nature of our Software and the potential for unauthorized use or copying, our refund policy is limited to the following circumstances:
          </p>
          <ul>
            <li><strong>Technical Issues:</strong> If you experience significant technical issues that prevent the Software from functioning as described, and our support team is unable to resolve these issues within a reasonable timeframe (typically 7 business days).</li>
            <li><strong>Unauthorized Charges:</strong> If your payment method was charged without your authorization.</li>
            <li><strong>Non-Delivery:</strong> If you did not receive access to the Software after completing your purchase.</li>
          </ul>
          
          <h3>3. Refund Request Period</h3>
          <p>
            Refund requests must be submitted within 14 days of the purchase date. Requests submitted after this period will not be considered except in extraordinary circumstances at our sole discretion.
          </p>
          
          <h3>4. Non-Refundable Items</h3>
          <p>
            The following are not eligible for refunds:
          </p>
          <ul>
            <li>Purchases made more than 14 days prior to the refund request</li>
            <li>Software that has been used for flashing operations</li>
            <li>Software that has been tampered with or modified</li>
            <li>Purchases where the license key has been shared with others</li>
            <li>Purchases made with promotional discounts of 50% or more</li>
          </ul>
          
          <h3>5. How to Request a Refund</h3>
          <p>
            To request a refund, please follow these steps:
          </p>
          <ol>
            <li>Contact our support team at <a href="mailto:support@usdtflasherpro.com">support@usdtflasherpro.com</a> with the subject line "Refund Request"</li>
            <li>Include your order number, the email address used for the purchase, and the date of purchase</li>
            <li>Provide a detailed explanation of why you are requesting a refund</li>
            <li>If applicable, include any error messages, screenshots, or other evidence of technical issues</li>
          </ol>
          
          <h3>6. Refund Processing</h3>
          <p>
            Once we receive your refund request, we will:
          </p>
          <ol>
            <li>Review your request within 3 business days</li>
            <li>Contact you if we need additional information</li>
            <li>Notify you of our decision regarding your refund request</li>
            <li>If approved, process the refund to your original payment method within 5-10 business days</li>
          </ol>
          <p>
            Please note that the time it takes for the refund to appear in your account depends on your payment provider and may take an additional 5-10 business days.
          </p>
          
          <h3>7. Refund Amount</h3>
          <p>
            If your refund request is approved, you will receive:
          </p>
          <ul>
            <li>A full refund of the purchase price if the Software was not delivered or could not be used at all due to technical issues</li>
            <li>A partial refund, at our discretion, if you were able to use the Software for some period before encountering issues</li>
          </ul>
          <p>
            Refunds will be issued using the same payment method used for the original purchase.
          </p>
          
          <h3>8. License Termination</h3>
          <p>
            Upon processing a refund, your license to use the Software will be terminated, and you must uninstall the Software from all devices and cease using it immediately.
          </p>
          
          <h3>9. Special Circumstances</h3>
          <p>
            We understand that exceptional circumstances may arise. If you believe your situation warrants special consideration outside of this policy, please contact our support team, and we will review your case individually.
          </p>
          
          <h3>10. Changes to This Policy</h3>
          <p>
            We reserve the right to modify this Refund Policy at any time. Any changes will be effective immediately upon posting the updated policy on our website. Your continued use of our Software after such changes constitutes your acceptance of the new Refund Policy.
          </p>
          
          <h3>11. Contact Us</h3>
          <p>
            If you have any questions about this Refund Policy, please contact us at:
          </p>
          <p>
            Email: <a href="mailto:support@usdtflasherpro.com">support@usdtflasherpro.com</a>
          </p>
        </RefundContainer>
      </Section>
    </Layout>
  );
};

export default RefundPage;
