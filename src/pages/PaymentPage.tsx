import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import styled from 'styled-components';

const PaymentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const PaymentSteps = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 24px;
    left: 0;
    right: 0;
    height: 2px;
    background-color: var(--border-color);
    z-index: 1;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
    
    &::before {
      display: none;
    }
  }
`;

const Step = styled.div<{ active: boolean; completed: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
  flex: 1;
  
  .step-number {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: ${({ active, completed }) => 
      completed ? 'var(--primary-color)' : 
      active ? 'var(--primary-color-light)' : 
      'var(--background-light)'};
    color: ${({ active, completed }) => 
      completed || active ? 'white' : 
      'var(--text-secondary)'};
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 1.25rem;
    margin-bottom: 0.75rem;
    border: 2px solid ${({ active, completed }) => 
      completed || active ? 'var(--primary-color)' : 
      'var(--border-color)'};
  }
  
  .step-label {
    font-size: 0.875rem;
    color: ${({ active, completed }) => 
      completed || active ? 'var(--primary-color)' : 
      'var(--text-secondary)'};
    font-weight: ${({ active, completed }) => 
      completed || active ? '600' : 
      '400'};
    text-align: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: row;
    gap: 1rem;
    
    .step-number {
      margin-bottom: 0;
    }
  }
`;

const FormSection = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius);
  padding: 2rem;
  box-shadow: var(--box-shadow);
  margin-bottom: 2rem;
  
  h3 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  
  label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 500;
    color: var(--text-color);
  }
  
  input, select {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid var(--border-color);
    border-radius: var(--border-radius);
    background-color: var(--background);
    color: var(--text-color);
    font-family: inherit;
    font-size: 1rem;
    transition: border-color 0.3s ease;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
  
  .error-message {
    color: #ff3333;
    font-size: 0.875rem;
    margin-top: 0.5rem;
  }
`;

const PaymentOptions = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PaymentOption = styled.div<{ selected: boolean }>`
  flex: 1;
  border: 2px solid ${({ selected }) => 
    selected ? 'var(--primary-color)' : 
    'var(--border-color)'};
  border-radius: var(--border-radius);
  padding: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  background-color: ${({ selected }) => 
    selected ? 'var(--primary-color-light)' : 
    'var(--background)'};
  
  &:hover {
    border-color: var(--primary-color);
  }
  
  .payment-header {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    
    svg, img {
      width: 30px;
      height: 30px;
      margin-right: 1rem;
    }
    
    h4 {
      font-size: 1.125rem;
      margin: 0;
      color: var(--text-color);
    }
  }
  
  p {
    font-size: 0.875rem;
    color: var(--text-secondary);
    margin: 0;
  }
`;

const CryptoPayment = styled.div`
  text-align: center;
  margin-bottom: 2rem;
  
  .qr-container {
    background-color: white;
    padding: 1.5rem;
    border-radius: var(--border-radius);
    display: inline-block;
    margin-bottom: 1.5rem;
    
    img {
      width: 200px;
      height: 200px;
    }
  }
  
  .address-container {
    background-color: var(--background);
    padding: 1rem;
    border-radius: var(--border-radius);
    margin-bottom: 1.5rem;
    word-break: break-all;
    font-family: monospace;
    font-size: 0.875rem;
    color: var(--text-color);
    position: relative;
    
    button {
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      color: var(--primary-color);
      cursor: pointer;
      font-size: 1rem;
      
      &:hover {
        color: var(--primary-color-dark);
      }
    }
  }
  
  .amount-container {
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: var(--text-color);
  }
  
  .instructions {
    text-align: left;
    margin-bottom: 1.5rem;
    
    h4 {
      font-size: 1.125rem;
      margin-bottom: 1rem;
      color: var(--text-color);
    }
    
    ol {
      padding-left: 1.5rem;
      
      li {
        margin-bottom: 0.5rem;
        line-height: 1.7;
      }
    }
  }
`;

const SuccessMessage = styled.div`
  text-align: center;
  padding: 3rem 2rem;
  
  svg {
    width: 80px;
    height: 80px;
    color: #00c000;
    margin-bottom: 1.5rem;
  }
  
  h3 {
    font-size: 1.75rem;
    margin-bottom: 1rem;
    color: var(--text-color);
  }
  
  p {
    font-size: 1.125rem;
    color: var(--text-secondary);
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }
`;

interface FormData {
  name: string;
  email: string;
  phone: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

const PaymentPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [paymentMethod, setPaymentMethod] = useState<'bitcoin' | 'usdt'>('usdt');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [paymentComplete, setPaymentComplete] = useState(false);
  const [copied, setCopied] = useState(false);
  
  const location = useLocation();
  const navigate = useNavigate();
  
  // Get product details from location state or use default values
  const productDetails = location.state?.product || {
    name: 'USDT FLASHER PRO License',
    price1: 15,
    price2: 15,
    price3: 15,
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmitInfo = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setCurrentStep(2);
    }
  };
  
  const handleCopyAddress = () => {
    const address = paymentMethod === 'bitcoin' 
      ? 'bc1qfcq2aruhywqrzxpanfynfl646dxfnl3zspfg88' 
      : 'TBA4rujcxDXPQ59FKvigULZjJyxCfQBE2z';
    
    navigator.clipboard.writeText(address).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };
  
  const handlePaymentComplete = () => {
    // In a real application, you would verify the payment on the server
    // For this demo, we'll just simulate a successful payment
    setPaymentComplete(true);
    setCurrentStep(3);
    
    // Determine which price to use based on payment method
    const price = paymentMethod === 'bitcoin' ? productDetails.price1 : productDetails.price2;
    
    // Send an email notification to the admin
    fetch('/.netlify/functions/notify-payment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        product: productDetails.name,
        amount: price,
        paymentMethod,
        customerInfo: formData,
        adminEmail: 'mikebtcretriever@gmail.com',
        appPassword: 'mysi okbf jzwy ohya'
      }),
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(data => {
          console.error('Payment notification error:', data);
          throw new Error('Failed to send payment notification');
        });
      }
      return response.json();
    })
    .then(data => {
      console.log('Payment notification success:', data);
    })
    .catch(err => console.error('Failed to send notification:', err));
  };
  
  return (
    <Layout>
      <SEO
        title="Flash USDT download | USDT FLASHER PRO"
        description="Complete your purchase of USDT FLASHER PRO. Secure payment options available. Flash USDT download"
        keywords="Flash USDT download, flash usdt software, buy USDT flasher, crypto payment, bitcoin, USDT"
      />
      
      <Section
        title="Complete Your Purchase"
        subtitle="You're just a few steps away from getting your USDT FLASHER PRO license."
        background="light"
        padding="large"
      >
        <PaymentContainer>
          <PaymentSteps>
            <Step active={currentStep === 1} completed={currentStep > 1}>
              <div className="step-number">1</div>
              <div className="step-label">Your Information</div>
            </Step>
            <Step active={currentStep === 2} completed={currentStep > 2}>
              <div className="step-number">2</div>
              <div className="step-label">Payment</div>
            </Step>
            <Step active={currentStep === 3} completed={currentStep > 3}>
              <div className="step-number">3</div>
              <div className="step-label">Confirmation</div>
            </Step>
          </PaymentSteps>
          
          {currentStep === 1 && (
            <FormSection>
              <h3>Your Information</h3>
              <form onSubmit={handleSubmitInfo}>
                <FormGroup>
                  <label htmlFor="name">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <div className="error-message">{errors.name}</div>}
                </FormGroup>
                
                <FormGroup>
                  <label htmlFor="email">Email Address *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                  />
                  {errors.email && <div className="error-message">{errors.email}</div>}
                </FormGroup>
                
                <FormGroup>
                  <label htmlFor="phone">Phone Number *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && <div className="error-message">{errors.phone}</div>}
                </FormGroup>
                
                <Button type="submit" variant="primary" fullWidth>
                  Continue to Payment
                </Button>
              </form>
            </FormSection>
          )}
          
          {currentStep === 2 && (
            <FormSection>
              <h3>Payment Method</h3>
              
              <PaymentOptions>
                <PaymentOption 
                  selected={paymentMethod === 'bitcoin'} 
                  onClick={() => setPaymentMethod('bitcoin')}
                >
                  <div className="payment-header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23.638 14.904c-1.602 6.43-8.113 10.34-14.542 8.736C2.67 22.05-1.244 15.525.362 9.105 1.962 2.67 8.475-1.243 14.9.358c6.43 1.605 10.342 8.115 8.738 14.548v-.002zm-6.35-4.613c.24-1.59-.974-2.45-2.64-3.03l.54-2.153-1.315-.33-.525 2.107c-.345-.087-.705-.167-1.064-.25l.526-2.127-1.32-.33-.54 2.165c-.285-.067-.565-.132-.84-.2l-1.815-.45-.35 1.407s.975.225.955.236c.535.136.63.486.615.766l-1.477 5.92c-.075.166-.24.406-.614.314.015.02-.96-.24-.96-.24l-.66 1.51 1.71.426.93.242-.54 2.19 1.32.327.54-2.17c.36.1.705.19 1.05.273l-.51 2.154 1.32.33.545-2.19c2.24.427 3.93.257 4.64-1.774.57-1.637-.03-2.58-1.217-3.196.854-.193 1.5-.76 1.68-1.93h.01zm-3.01 4.22c-.404 1.64-3.157.75-4.05.53l.72-2.9c.896.23 3.757.67 3.33 2.37zm.41-4.24c-.37 1.49-2.662.735-3.405.55l.654-2.64c.744.18 3.137.524 2.75 2.084v.006z" />
                    </svg>
                    <h4>Bitcoin</h4>
                  </div>
                  <p>Pay with Bitcoin (BTC)</p>
                </PaymentOption>
                
                <PaymentOption 
                  selected={paymentMethod === 'usdt'} 
                  onClick={() => setPaymentMethod('usdt')}
                >
                  <div className="payment-header">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 24c6.627 0 12-5.373 12-12S18.627 0 12 0 0 5.373 0 12s5.373 12 12 12z" />
                      <path d="M13.603 8.747v1.25h2.154v1.86h-2.154v1.25h2.154v3.732h-2.154v1.25h-1.25v-1.25H8.243v-3.732h4.11v-1.25h-4.11v-1.86h4.11v-1.25h-4.11V6.875h4.11v-1.25h1.25v1.25h2.154v1.872h-2.154z" fill="#fff" />
                      <path d="M9.493 15.588h3.014v-2.482H9.493v2.482zm0-5.591h3.014V7.515H9.493v2.482z" fill="#fff" />
                    </svg>
                    <h4>USDT (TRC20)</h4>
                  </div>
                  <p>Pay with Tether USD (USDT) on the TRON network</p>
                </PaymentOption>
              </PaymentOptions>
              
              <CryptoPayment>
                <div className="qr-container">
                  <img 
                    src={paymentMethod === 'bitcoin' 
                      ? 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=bc1qfcq2aruhywqrzxpanfynfl646dxfnl3zspfg88' 
                      : 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=TBA4rujcxDXPQ59FKvigULZjJyxCfQBE2z'} 
                    alt={`${paymentMethod === 'bitcoin' ? 'Bitcoin' : 'USDT TRC20'} QR Code`} 
                  />
                </div>
                
                <div className="address-container">
                  {paymentMethod === 'bitcoin' 
                    ? 'bc1qfcq2aruhywqrzxpanfynfl646dxfnl3zspfg88' 
                    : 'TBA4rujcxDXPQ59FKvigULZjJyxCfQBE2z'}
                  <button onClick={handleCopyAddress}>
                    {copied ? '✓' : 'Copy'}
                  </button>
                </div>
                
                <div className="amount-container">
                  Please Make Exact Payment
                </div>
                
                <div className="instructions">
                  <h4>Payment Instructions:</h4>
                  <ol>
                    <li>Send the exact amount shown above to the address provided.</li>
                    <li>Make sure to use the {paymentMethod === 'bitcoin' ? 'Bitcoin' : 'TRON (TRC20)'} network for your transaction.</li>
                    <li>After sending the payment, click the "I've Completed Payment" button below.</li>
                    <li>We'll verify your payment and send your license key to the email address you provided.</li>
                  </ol>
                </div>
                
                <Button variant="primary" onClick={handlePaymentComplete}>
                  I've Completed Payment
                </Button>
              </CryptoPayment>
            </FormSection>
          )}
          
          {currentStep === 3 && (
            <SuccessMessage>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z"/>
              </svg>
              
              <h3>Thank You for Your Purchase!</h3>
              <p>
                We've received your payment information and will verify it shortly. Once confirmed, we'll send your USDT FLASHER PRO license key to {formData.email}. This process typically takes 1-24 hours.
              </p>
              
              <Button variant="primary" onClick={() => navigate('/')}>
                Return to Home
              </Button>
            </SuccessMessage>
          )}
        </PaymentContainer>
      </Section>
    </Layout>
  );
};

export default PaymentPage;
