/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-extraneous-dependencies
import $ from 'jquery';

global.jQuery = $;
global.$ = $;

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

require('../../node_modules/jquery-ui-dist/jquery-ui.min.js');
require('../../node_modules/jquery-ui-dist/jquery-ui.min.css');

importAll(require.context('../styles', true, /\.(css|scss)$/));
importAll(
  require.context('../blocks', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/),
);
importAll(require.context('../img', true, /\.(jpg|png|svg|png|ico)$/));

importAll(require.context('./', true, /\.(js)$/));
importAll(require.context('../blocks', true, /\.(js)$/));
