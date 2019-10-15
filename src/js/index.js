import 'inputmask/dist/jquery.inputmask.bundle';
import 'air-datepicker/dist/css/datepicker.min.css'
import 'air-datepicker';
import 'ion-rangeslider/css/ion.rangeSlider.min.css';
import 'ion-rangeslider/js/ion.rangeSlider.min';


function importAll(resolve) {
  resolve.keys().forEach(resolve);
}


importAll(require.context('../img', true, /\.(jpg|png|svg|png)$/));
importAll(require.context('../static/favicons/',  true,  /\.(svg|png|ico|xml|json)$/));

importAll(require.context('../styles', true, /\.(css|scss)$/));
importAll(require.context('../blocks', true, /\.(css|scss|jpg|png|svg|png|ico|xml|mp4|)$/));
importAll(require.context('../pages', true, /\.(css|scss)$/));

importAll(require.context('./', true, /\.(js)$/));
importAll(require.context('../blocks', true, /\.(js)$/));