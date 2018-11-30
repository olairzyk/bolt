import { props, define, hasNativeShadowDomSupport } from '@bolt/core/utils';
import classNames from 'classnames/bind';
import { withLitHtml, html } from '@bolt/core/renderers/renderer-lit-html';

import schema from '../card.schema.yml';
import styles from './_card-media.scss';

let cx = classNames.bind(styles);

@define
class BoltCardMedia extends withLitHtml() {
  static is = 'bolt-card-media';

  // @todo: [Mai] Need to determine if media is video or image.
  render() {
    const classes = cx('c-bolt-card__media');

    return html`
      ${this.addStyles([styles])}
      <div class="${classes}">${this.slot('default')}</div>
    `;
  }
}

export { BoltCardMedia };