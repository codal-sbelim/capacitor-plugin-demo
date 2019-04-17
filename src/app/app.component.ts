import { Component } from '@angular/core';
import { Plugins, StatusBarStyle } from '@capacitor/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Modals',
      url: '/modals',
      icon: 'albums'
    },
    {
      title: 'Toast',
      url: '/toast',
      icon: 'information-circle'
    }
  ];

  constructor(
    private platform: Platform
  ) {
    this.initializeApp();
  }

  async initializeApp() {
    const { SplashScreen, StatusBar } = Plugins;
    try {
      await SplashScreen.hide();
      await StatusBar.setStyle({ style: StatusBarStyle.Dark });
      if (this.platform.is('android')) {
        StatusBar.setBackgroundColor({ color: '#963232' });
      }
    } catch (err) {
      console.log('This is normal in a browser', err);
    }
  }
}
