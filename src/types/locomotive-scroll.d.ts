declare module 'locomotive-scroll' {
  interface LocomotiveScrollOptions {
    el: HTMLElement;
    smooth?: boolean;
    smoothMobile?: boolean;
    multiplier?: number;
    lerp?: number;
    class?: string;
    offset?: [number, number];
    repeat?: boolean;
    getDirection?: boolean;
    getSpeed?: boolean;
    reloadOnContextChange?: boolean;
    touchMultiplier?: number;
    resetNativeScroll?: boolean;
    tablet?: {
      smooth?: boolean;
      breakpoint?: number;
    };
    smartphone?: {
      smooth?: boolean;
    };
  }

  interface ScrollToOptions {
    offset?: number;
    duration?: number;
    easing?: [number, number, number, number];
    disableLerp?: boolean;
    callback?: () => void;
  }

  class LocomotiveScroll {
    constructor(options: LocomotiveScrollOptions);
    destroy(): void;
    update(): void;
    start(): void;
    stop(): void;
    scrollTo(target: string | HTMLElement | number, options?: ScrollToOptions): void;
    on(event: 'scroll' | 'call', callback: (args: unknown) => void): void;
  }

  export default LocomotiveScroll;
}
