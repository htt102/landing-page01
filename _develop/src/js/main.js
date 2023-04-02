import 'picturefill';
import 'smoothscroll-for-websites';
import * as objectFitImages from 'object-fit-images';

// js/tsどっちでもこんな感じで読めます
import VhController from './utils/logic/vh-controller';
import AnchorLink from './utils/ui/anchor-link';
import DeviceWatcher from './utils/logic/device-watcher';

import Header from './common/header';

new VhController();

// break-pointによるPC/SP判別機能。 詳細はdevice-watcher.tsを見てみよう。
new DeviceWatcher();
export default class Main {
  constructor() {
    // アンカーリンク。固定ヘッダー分引くとかにも対応している。
    // 使い方はanchor-link.ts参照。
    new AnchorLink();
    new Header();
    objectFitImages();
  }
}

window.addEventListener('DOMContentLoaded', () => {
  new Main();
});
