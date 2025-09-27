import { useEffect } from 'react';

const SEO = ({ 
  title, 
  description, 
  canonical, 
  ogTitle, 
  ogDescription, 
  keywords,
  robots = "index, follow"
}) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    const updateMetaTag = (name, content, property = false) => {
      if (!content) return;
      
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let meta = document.querySelector(selector);
      
      if (!meta) {
        meta = document.createElement('meta');
        if (property) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    };

    const updateCanonical = (href) => {
      if (!href) return;
      
      let canonical = document.querySelector('link[rel="canonical"]');
      if (!canonical) {
        canonical = document.createElement('link');
        canonical.setAttribute('rel', 'canonical');
        document.head.appendChild(canonical);
      }
      canonical.setAttribute('href', href);
    };

    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('robots', robots);
    updateMetaTag('og:title', ogTitle || title, true);
    updateMetaTag('og:description', ogDescription || description, true);
    updateMetaTag('og:url', canonical, true);
    
    updateCanonical(canonical);

  }, [title, description, canonical, ogTitle, ogDescription, keywords, robots]);

  return null;
};

export default SEO;