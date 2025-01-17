import {CanvasRendererConfig, HTMLRendererConfig, SVGRendererConfig} from 'lottie-web';

export interface S1LottieConfig {
  container?: Element;
  renderer: 'svg' | 'canvas' | 'html';
  loop: boolean | number;
  path: string;
  autoplay: boolean;
  name?: string;
  rendererSettings?: SVGRendererConfig | CanvasRendererConfig | HTMLRendererConfig;
}
