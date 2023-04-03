import 'picturefill';
import 'smoothscroll-for-websites';

// js/tsどっちでもこんな感じで読めます
import VhController from './utils/logic/vh-controller';
import DeviceWatcher from './utils/logic/device-watcher';

import Header from './common/header';

new VhController();

// break-pointによるPC/SP判別機能。 詳細はdevice-watcher.tsを見てみよう。
new DeviceWatcher();
export default class Main {
  constructor() {
    new Header();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
