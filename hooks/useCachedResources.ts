import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';

const NotoSansKRRegular = require('../assets/fonts/NotoSansKR-Regular.otf');
const NotoSansKRBlack = require('../assets/fonts/NotoSansKR-Black.otf');
const NotoSansKRBold = require('../assets/fonts/NotoSansKR-Bold.otf');
const NotoSansKRMedium = require('../assets/fonts/NotoSansKR-Medium.otf');
const NotoSansKRLight = require('../assets/fonts/NotoSansKR-Light.otf');

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          NotoSansKRRegular,
          NotoSansKRBlack,
          NotoSansKRBold,
          NotoSansKRMedium,
          NotoSansKRLight,
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
