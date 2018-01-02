import {
  h,
  render,
  define,
  props,
  withComponent,
  withPreact,
  css,
  spacingSizes
} from '@bolt/core';

import BrightcoveVideo from '@bolt/components-brightcove-player/src/brightcove-player.standalone';


class BoltVideo extends BrightcoveVideo {
  static is='bolt-video';
  
  constructor() {
    super();
  }

  // renderCallback() {
  //   return (
  //     <slot />
  //   )
  // }
}

customElements.define(BoltVideo.is, BoltVideo);
