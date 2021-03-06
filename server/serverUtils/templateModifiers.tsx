import React from 'react';
import { renderToString } from 'react-dom/server';

import { App } from 'components/App';
import { hotReloadUrl, compressions } from 'const';

import { env } from '../../env';

export function injectAppMarkup(str) {
  const appMarkup = renderToString(<App />);

  return str.replace(`<div id="app"></div>`, `<div id="app">${appMarkup || ''}</div>`);
}

export function injectBrowserReload(str) {
  if (!env.HOT_RELOAD) return str;

  return str.replace('</body>', `<script src="${hotReloadUrl}"></script></body>`);
}

export function injectCompressed(req, str) {
  const acceptedEncodings = req.acceptsEncodings();
  const acceptedCompression = env.GENERATE_COMPRESSED
    ? compressions.find(({ encoding }) => acceptedEncodings.includes(encoding))
    : null;

  return !acceptedCompression
    ? str
    : str
        .replace(/\.js/g, `.js.${acceptedCompression.extension}`)
        .replace(/\.css/g, `.css.${acceptedCompression.extension}`);
}
