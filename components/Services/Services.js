import React, { useRef } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Carousel from 'react-slick';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import Title from '../Title';
import IconTextCard from '../Cards/IconText';
import useStyle from './services-style';

const services = [
  {
    icon: 'ion-ios-color-wand',
    name: 'UI Interface Design',
    desc: 'Basic idea of UI Design'
  },
  {
    icon: 'ion-ios-desktop',
    name: 'React Application',
    desc: 'Functional React Web Applications'
  },
  {
    icon: 'ion-ios-globe',
    name: 'HTML Prototyping',
    desc: 'Pellentesque ac  vel blandit nulla.'
  },
  {
    icon: 'ion-ios-laptop',
    name: 'Responsive View',
    desc: 'Responsive web Application in every device'
  },
  {
    icon: 'ion-ios-snow',
    name: 'Graphic Illustrations',
    desc: 'Pellentesque ac  vel blandit nulla.'
  }
];

function Services() {
  const { classes, cx } = useStyle();
  const { classes: text } = useText();

  const lastSlide = Math.floor(services.length - 3);

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const { t } = useTranslation('common');

  const slider = useRef(null);
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    autoplay: false,
    slidesToShow: 3,
    arrows: false,
    variableWidth: true,
    pauseOnHover: true,
    responsive: [{
      breakpoint: 960,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }, {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  };

  if (theme.direction === 'rtl') {
    slider.current.slickGoTo(lastSlide);
  }

  return (
    <div className={classes.root}>
      <div className={classes.floatingTitle}>
        <Title>
          <strong>
            {t('maskulino-landing.services_title')}
          </strong>
        </Title>
        <Typography className={text.paragraph}>
          {t('maskulino-landing.services_desc')}
        </Typography>
      </div>
      <div className={classes.sliderWrap}>
        <div className={classes.carousel}>
          <IconButton
            className={cx(classes.nav, classes.prev)}
            onClick={() => slider.current.slickPrev()}
            size="large"
          >
            <i className="ion-ios-arrow-back" />
          </IconButton>
          <Carousel ref={slider} {...settings}>
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsFirst)}>
                <div />
              </div>
            )}
            {services.map((item, index) => (
              <div key={index.toString()} className={classes.item}>
                <IconTextCard
                  icon={item.icon}
                  text={item.name}
                  desc={item.desc}
                />
              </div>
            ))}
            {isDesktop && (
              <div className={cx(classes.item, classes.itemPropsLast)}>
                <div />
              </div>
            )}
          </Carousel>
          <IconButton
            className={cx(classes.nav, classes.next)}
            onClick={() => slider.current.slickNext()}
            size="large"
          >
            <i className="ion-ios-arrow-forward" />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Services;
