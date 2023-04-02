export default class Header {
  private header: HTMLElement | null;
  constructor() {
    this.header = document.getElementById('header');
    this.init();
  }
  private init = () => {
    window.addEventListener('load', this.Sticky, false);
    window.addEventListener('scroll', this.Sticky, false);
  };
  private Sticky = () => {
    if (!this.header) return;
    if (window.pageYOffset > 0) {
      this.header.classList.add('fixed');
    } else {
      this.header.classList.remove('fixed');
    }
  };
}
