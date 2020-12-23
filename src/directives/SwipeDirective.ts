import 'hammerjs';

enum SwipeMode {
  left = 'swipeleft',
  right = 'swiperight',
  up = 'swipeup',
  down = 'swipedown',
}
export class SwipeDirective {
  mounted(el: HTMLElement, binding: any) {
    if (typeof binding.value === 'function') {
      const hammer = new Hammer(el);
      if (binding.arg) {
        hammer.on(
          SwipeMode[binding.arg as keyof typeof SwipeMode],
          binding.value,
        );
      } else {
        hammer.on('swipe', binding.value);
      }
    }
  }
}
