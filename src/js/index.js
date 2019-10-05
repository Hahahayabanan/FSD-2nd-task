import 'jquery-ui-dist/jquery-ui.min.css';
import 'jquery-ui-dist/jquery-ui.min.js';

function importAll(resolve) {
  resolve.keys().forEach(resolve);
}

importAll(require.context('../blocks', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/));
importAll(require.context('../styles', true, /\.(css|scss)$/));
importAll(require.context('../img', true, /\.(jpg|png|svg|png)$/));

importAll(require.context('./', true, /\.(js)$/));
importAll(require.context('../blocks', true, /\.(js)$/));

importAll(require.context('../static/favicons/',  true,  /\.(svg|png|ico|xml|json)$/));
