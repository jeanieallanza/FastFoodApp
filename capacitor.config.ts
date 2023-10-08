import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.fastfood',
  appName: 'fastfood',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
