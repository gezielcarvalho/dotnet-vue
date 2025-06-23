import { fileURLToPath, URL } from 'node:url';
import { loadEnv } from 'vite';

export default function () {
  const env = loadEnv(process.env.NODE_ENV || '', process.cwd(), '');
  const apiHost = env.VITE_API_HOST || '';
  const apiPort = env.VITE_API_PORT || 0;
  const ssrPort = env.VITE_SSR_PORT || 0;

  return {
    boot: ['pinia'],

    css: ['app.scss', 'tailwind.css'],

    extras: ['roboto-font', 'material-icons'],

    build: {
      target: {
        browser: ['es2022', 'firefox115', 'chrome115', 'safari14'],
        node: 'node20',
      },

      typescript: {
        strict: true,
        vueShim: true,
      },

      vueRouterMode: 'hash', // available values: 'hash', 'history'

      extendViteConf(viteConf: any) {
        viteConf.resolve = viteConf.resolve || {};
        viteConf.resolve.alias = viteConf.resolve.alias || {};
        viteConf.resolve.alias['@'] = fileURLToPath(new URL('./src', import.meta.url));
      },

      vitePlugins: [
        [
          'vite-plugin-checker',
          {
            vueTsc: true,
            eslint: {
              lintCommand: 'eslint -c ./eslint.config.js "./src*/**/*.{ts,js,mjs,cjs,vue}"',
              useFlatConfig: true,
            },
          },
          { server: false },
        ],
      ],
    },

    devServer: {
      proxy: {
        '/api': {
          target: `${apiHost}:${apiPort}`,
          changeOrigin: true,
          secure: false,
        },
      },
      open: true, // opens browser window automatically
    },

    framework: {
      config: {},
      // Quasar plugins
      plugins: [],
    },

    animations: [],

    ssr: {
      prodPort: ssrPort, // The default port that the production server should use

      middlewares: [
        'render', // keep this as last one
      ],

      pwa: false,
    },

    pwa: {
      workboxMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
    },

    cordova: {},

    capacitor: {
      hideSplashscreen: true,
    },

    electron: {
      preloadScripts: ['electron-preload'],
      inspectPort: 5858,

      bundler: 'packager', // 'packager' or 'builder'

      packager: {},

      builder: {
        appId: 'frontend',
      },
    },

    bex: {
      extraScripts: [],
    },
  };
}
