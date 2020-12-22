import 'hammerjs';

export class SwipeDirective {
  mounted(el: HTMLElement, binding: any) {
    if (typeof binding.value === 'function') {
      const hammer = new Hammer(el);
      if (binding.modifiers.left) {
        hammer.on('swipeleft', binding.value);
      } else if (binding.modifiers.right) {
        hammer.on('swiperight', binding.value);
      } else {
        hammer.on('swipe', binding.value);
      }
    }
  }
}
