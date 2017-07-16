import React from 'react';
import { withStyles, createStyleSheet} from 'material-ui/styles';

import Grid from 'material-ui/Grid';
import Footer from './Footer';

import IphoneWhite from '../images/iphone.png';
import IphoneBlack from '../images/iphone-7.png';

const styleSheet = createStyleSheet('Main', theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
    backgroundColor: 'white',
    overflowX: 'hidden'
  },
  header: {
    marginTop: 65,
    marginBottom: 30,
  },
  headerLeft: {
    padding: '7% 10% 5% 20%',
  },
  appstore: {
    width: '49%',
    paddingTop: '3%',
  },
  googleplay: {
    width: '49%',
    paddingLeft: '2%',
  },
  appstore2: {
    width: '35%',
    paddingTop: '3%',
  },
  googleplay2: {
    width: '35%',
    paddingLeft: '2%',
  },
  bonus: {
    width: '100%',
    paddingTop: 62,
  },
  bonus2: {
    width: '100%',
    paddingTop: 50,
  },
  iphone: {
    margin: -40
  },
  iphone2: {
    marginTop: -50
  },
  card: {
    width: '100%',
  },
  blue: {
    backgroundColor: '#00b0ff',
    color: 'white',
    padding: '2% 10% 2% 10%',
  },
  grey: {
    backgroundColor: '#f6f6f6',
    padding: '3% 10% 3% 10%',
    color: '#848484'
  },
  white: {
    padding: '2% 10% 2% 10%'
  },
  bonusH1: {
    fontSize: '38px',
    marginTop: 0
  },
  advantageH3: {
    fontSize: '22px',
    fontWeight: 400
  },
  advantageh3: {
    fontSize: '22px',
    fontWeight: 400,
    color: 'black'
  },
  advantageDiv: {
    marginRight: '30%'
  },
  advantageDiv2: {
    margin: '0% 15% 0% 15%'
  },
}));

function Main(props) {
  const classes = props.classes;

  return (
    <div className={classes.root}>
      <Grid container gutter={0}>
        <Grid item sm={6} className={classes.header}>
          <div className={classes.headerLeft}>
            <h1>"Bonus" - Получайте скидки уже сегодня!</h1>
            <p>
              Программа лояльности, с помощью которой пользователи за совершенные покупки товаров и услуг получают скидки в виде накопительных бонусов, которые они впоследствии могут использовать для оплаты в заведениях, использующих систему «Bonus»
            </p>
            <div>
              <a href='https://itunes.apple.com/ru/app/%D0%B1%D0%BE%D0%BD%D1%83%D1%81%D1%8B/id1225171527?mt=8'>
                <img className={classes.appstore} src='https://qrolik.com/static/v2/img/app-link/app-app-store.svg' alt='AppStore'/>
              </a>
              <a href='https://play.google.com/store/apps/details?id=com.bonusget.bonus&hl=ru&source=apkAndroid.ru'>
                <img className={classes.googleplay} src='https://qrolik.com/static/v2/img/app-link/app-google-play.svg' alt='GooglePlay'/>
              </a>
            </div>
          </div>
        </Grid>
        <Grid item sm={6} className={classes.header}>
          <div className={classes.iphone}>
            <img className={classes.bonus} src={IphoneWhite} alt='card'/>
          </div>
        </Grid>
        <Grid container className={classes.blue} gutter={0}>
          <Grid item xs={12}>
            <h4>ПРЕИМУЩЕСТВА</h4>
          </Grid>
          <Grid container>
            <Grid item xs={12}>
              <h1 className={classes.bonusH1}>Почему приложение Bonus?</h1>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.advantageDiv}>
                <h3 className={classes.advantageH3}>Реальный cashback</h3>
                <p>Получай скидку до 30% в виде бонусных баллов за покупки. Используй баллы для оплаты любом заведении сети Bonus</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.advantageDiv2}>
                <h3 className={classes.advantageH3}>Свежие акции</h3>
                <p>Актуальная информация о свежих акциях в твоем городе.</p>
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.advantageDiv}>
                <h3 className={classes.advantageH3}>Выбирай где получать скидку</h3>
                <p>Самостоятельно предлогай интересные места в которых ты хотел бы получать бонусные баллы за покупки.</p>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.advantageDiv2}>
                <h3 className={classes.advantageH3}>Никакой рекламы</h3>
                <p>Рейтинг предложений на основании ваших оценок и отзывов.</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid container className={classes.white} gutter={0}>
          <Grid item xs={12}>
            <h4>ИСПОЛЬЗОВАНИЕ</h4>
          </Grid>
          <Grid item xs={6}>
            <Grid container>
              <Grid item xs={10}>
                <h1 className={classes.bonusH1}>Получай бонусы сразу после покупки</h1>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={10}>
                <div className={classes.advantageDiv}>
                  <h3 className={classes.advantageH3}>Как использовать?</h3>
                  <p>Предъяви карту до совершения оплаты для зачисления бонусных баллов.</p>
                </div>
                <div className={classes.advantageDiv}>
                  <h3 className={classes.advantageH3}>Мгновенное зачисление</h3>
                  <p>Бонусные баллы зачисляются сразу после совершения покупки. И вы можете использовать их для оплаты.</p>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={6}>
            <div className={classes.iphone2}>
              <img className={classes.bonus2} src={IphoneBlack} alt='card'/>
            </div>
          </Grid>
        </Grid>
        <Grid container className={classes.grey} gutter={0}>
          <Grid item xs={12}>
            <h4>НАЧАЛО РАБОТЫ</h4>
          </Grid>
          <Grid container>
            <Grid item xs={6}>
              <div className={classes.advantageDiv}>
                <h3 className={classes.advantageh3}>Зарегистрируйтесь прямо сейчас!</h3>
                <p>Просто скачайте приложение, пройдите стандартную процедуру регистрации и наачните получать баллы.</p>
              </div>
              <div>
                <a href='https://itunes.apple.com/ru/app/%D0%B1%D0%BE%D0%BD%D1%83%D1%81%D1%8B/id1225171527?mt=8'>
                  <img className={classes.appstore2} src='https://qrolik.com/static/v2/img/app-link/app-app-store.svg' alt='AppStore'/>
                </a>
                <a href='https://play.google.com/store/apps/details?id=com.bonusget.bonus&hl=ru&source=apkAndroid.ru'>
                  <img className={classes.googleplay2} src='https://qrolik.com/static/v2/img/app-link/app-google-play.svg' alt='GooglePlay'/>
                </a>
              </div>
            </Grid>
            <Grid item xs={6}>
              <div className={classes.advantageDiv2}>
                <h3 className={classes.advantageh3}>Нужна помощь? Позвоните Нам!</h3>
                <p>Наши специалисты расскажут, как установить и использовать возможности приложения!</p>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Footer />
      </Grid>
    </div>
  );
}

export default withStyles(styleSheet)(Main);
