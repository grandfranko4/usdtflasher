import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/common/SEO';
import Layout from '../components/layout/Layout';
import styled from 'styled-components';
import { getBlogPosts } from '../services/blogService';

const BlogContainer = styled.div`
  background: linear-gradient(120deg, #1a1a2e 0%, #16213e 100%);
  padding: 6rem 0;
  min-height: 100vh;
`;

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
`;

const PageTitle = styled.h1`
  font-size: 3rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const PageSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.7);
  max-width: 700px;
  margin: 0 auto 4rem auto;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    max-width: 400px;
    margin: 0 auto;
  }
`;

const BlogCard = styled(Link)`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  overflow: hidden;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 50px rgba(96, 239, 255, 0.1);
  }
`;

const BlogImage = styled.div`
  height: 200px;
  overflow: hidden;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }
  
  ${BlogCard}:hover & img {
    transform: scale(1.05);
  }
`;

const BlogContent = styled.div`
  padding: 2rem;
`;

const BlogDate = styled.div`
  font-size: 0.875rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 0.5rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #00ff87 0%, #60efff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const BlogExcerpt = styled.p`
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const BlogPage: React.FC = () => {
  const blogPosts = getBlogPosts();

  return (
    <Layout>
      <SEO
        title="Flash USDT Binance p2p | USDT FLASHER PRO"
        description="Stay updated with the latest insights about flash usdt binance p2p, Flash usdt trust wallet, and blockchain technology."
        keywords="flash usdt binance p2p, Flash usdt trust wallet, flash usdt binance, USDT flashing guide, flash usdt software, flash usdt trc20"
      />
      
      <BlogContainer>
        <ContentWrapper>
          <PageTitle>Latest Insights</PageTitle>
          <PageSubtitle>
            Explore our latest articles about USDT flashing, cryptocurrency, and blockchain technology.
          </PageSubtitle>
          
          <BlogGrid>
            {blogPosts.map((post) => (
              <BlogCard key={post.id} to={`/blog/${post.slug}`}>
                <BlogImage>
                  <img src={post.image} alt={post.title} />
                </BlogImage>
                
                <BlogContent>
                  <BlogDate>{post.date}</BlogDate>
                  <BlogTitle>{post.title}</BlogTitle>
                  <BlogExcerpt>{post.excerpt}</BlogExcerpt>
                </BlogContent>
              </BlogCard>
            ))}
          </BlogGrid>
        </ContentWrapper>
      </BlogContainer>
    </Layout>
  );
};

export default BlogPage;
