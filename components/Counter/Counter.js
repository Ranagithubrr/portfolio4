import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './counter-style';

function Counter() {
  const { classes } = useStyles();
  const { classes: text } = useText();
  const { t } = useTranslation('common');
  const [play, setPlay] = useState(false);

  const countup = (val, isPlay) => (
    <span>
      {isPlay ? <CountUp end={val} /> : 0}
    </span>
  );

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.counterWrap}>
      <Container maxWidth="md">
        <Grid container justifyContent="center" alignItems="center" className={classes.root} spacing={6}>
          <Grid md={4} item>
            <ScrollAnimation
              animateOnce
              animateIn="fadeIn"
              offset={-300}
              afterAnimatedIn={handlePlay}
            >
              <div className={classes.counterItem}>
                <div className={classes.text}>
                  <i className="ion-ios-briefcase-outline" />
                  <Typography variant="h4" className={text.title}>
                    {countup(15, play)}
                    <span>+</span>
                  </Typography>
                </div>
                <Typography variant="h6" className={text.subtitle2}>
                  {t('maskulino-landing.counter_completed')}
                </Typography>
              </div>
            </ScrollAnimation>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-time-outline" />
                <Typography variant="h4" className={text.title}>
                  {countup(567, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                {t('maskulino-landing.counter_hour')}
              </Typography>
            </div>
          </Grid>
          <Grid md={4} item>
            <div className={classes.counterItem}>
              <div className={classes.text}>
                <i className="ion-ios-heart-outline" />
                <Typography variant="h4" className={text.title}>
                  {countup(10, play)}
                </Typography>
              </div>
              <Typography variant="h6" className={text.subtitle2}>
                {t('maskulino-landing.counter_happy')}
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Counter;
