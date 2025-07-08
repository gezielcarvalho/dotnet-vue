import { defineSsrMiddleware } from '#q-app/wrappers';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default defineSsrMiddleware(({ app }: any) => {
  console.log('Loading API proxy middleware...');
  console.log('Environment variables:', {
    VITE_API_HOST: process.env.VITE_API_HOST,
    VITE_API_PORT: process.env.VITE_API_PORT,
    NODE_ENV: process.env.NODE_ENV,
  });

  const apiHost = process.env.VITE_API_HOST || 'http://backend';
  const apiPort = process.env.VITE_API_PORT || '5000';
  const target = `${apiHost}:${apiPort}`;

  console.log(`Configuring API proxy to: ${target}`);

  // Create proxy middleware for API calls
  const apiProxy = createProxyMiddleware({
    target,
    changeOrigin: true,
    pathFilter: '/api',
    pathRewrite: {
      '^/api': '/api',
    },
  });

  // Apply the proxy middleware
  app.use(apiProxy);
  console.log('API proxy middleware configured for /api routes');
});
