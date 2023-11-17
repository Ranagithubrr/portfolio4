import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import ScrollAnimation from 'react-scroll-animation-wrapper';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import { useTranslation } from 'next-i18next';
import { useText } from '~/theme/common';
import useStyles from './timeline-style';
import brand from '~/public/text/brand';

function Timeline() {
  const { classes, cx } = useStyles();
  const { classes: text } = useText();
  const theme = useTheme();

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const [play, setPlay] = useState(false);

  const handlePlay = visible => {
    if (visible.inViewport) {
      setTimeout(() => { setPlay(true); }, 500);
    }
  };

  return (
    <div className={classes.root}>
      <Container fixed={isDesktop}>
        <Grid container spacing={0}>
          <Grid item lg={2} xs={12}>
            {!isMobile && (
              <Typography variant="h2" className={classes.nameDeco}>
                {brand.maskulino.name}
              </Typography>
            )}
          </Grid>
          <Grid item container spacing={3} md={12} lg={10}>
            <Grid item md={5} sm={6} xs={12}>
              <div className={classes.history}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('maskulino-landing.timeline_experience')}
                </Typography>
                <ul>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      delay={200}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Front-end developer (Intern)</Typography>
                        <Typography gutterBottom>at Nifty It Solution</Typography>
                        <Typography className={classes.time}>2023 - Present</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={100}
                      delay={300}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Front-end developer</Typography>
                        <Typography gutterBottom>at Self-employed</Typography>
                        <Typography className={classes.time}>Feb 2021 - Sep 2023</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                  <li>
                    <ScrollAnimation
                      animateOnce
                      animateIn="fadeInLeftShort"
                      offset={200}
                      delay={400}
                      duration={0.3}
                    >
                      <div>
                        <Typography variant="h3" gutterBottom className={text.subtitle2}>Freelancing</Typography>
                        <Typography gutterBottom>at freelancer.com</Typography>
                        <Typography className={classes.time}>Feb 2023 - Sep 2023</Typography>
                      </div>
                    </ScrollAnimation>
                  </li>
                </ul>
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className={classes.progress}>
                <Typography variant="h5" className={cx(classes.title, text.subtitle)}>
                  {t('maskulino-landing.timeline_skill')}
                </Typography>
                <ScrollAnimation
                  animateOnce
                  animateIn="fadeIn"
                  delay={400}
                  duration={0.3}
                  afterAnimatedIn={handlePlay}
                >
                  <ul>
                    <li>
                      <div className={classes.textIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M12.001 13.5a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3Zm-.528 2.994c.175.211.35.414.528.609c.177-.195.353-.398.528-.609a24.932 24.932 0 0 1-1.056 0Zm-1.995-.125a20.686 20.686 0 0 1-2.285-.367a10.8 10.8 0 0 0-.17 1.015c-.19 1.583.075 2.545.478 2.777c.403.233 1.368-.019 2.645-.974c.263-.197.528-.416.794-.655a20.665 20.665 0 0 1-1.462-1.796Zm7.331-.367a20.69 20.69 0 0 1-2.285.367a20.665 20.665 0 0 1-1.462 1.796c.266.24.531.458.794.655c1.277.955 2.242 1.207 2.645.974c.403-.232.667-1.194.479-2.777a11.374 11.374 0 0 0-.17-1.015Zm1.45-.388c.577 2.639.274 4.74-1.008 5.48c-1.282.74-3.253-.048-5.25-1.867c-1.997 1.819-3.968 2.606-5.25 1.866c-1.282-.74-1.585-2.84-1.009-5.48c-2.574-.82-4.241-2.133-4.241-3.613s1.667-2.793 4.241-3.613c-.576-2.64-.273-4.74 1.009-5.48c1.282-.74 3.253.047 5.25 1.866c1.997-1.819 3.968-2.606 5.25-1.866c1.282.74 1.585 2.84 1.009 5.48c2.573.82 4.24 2.133 4.24 3.613s-1.668 2.793-4.241 3.614Zm-7.32-9.779c-.265-.239-.53-.458-.793-.655c-1.277-.955-2.242-1.207-2.645-.974c-.403.232-.667 1.194-.479 2.777c.04.327.096.666.17 1.016a20.677 20.677 0 0 1 2.286-.368c.475-.653.965-1.254 1.462-1.796Zm3.585 1.796a20.63 20.63 0 0 1 2.285.368c.075-.35.132-.69.17-1.015c.19-1.584-.075-2.546-.478-2.778c-.403-.233-1.368.019-2.645.974c-.263.197-.528.416-.794.655c.497.542.987 1.143 1.462 1.796Zm-1.995-.125c-.175-.21-.351-.414-.528-.609c-.177.195-.353.398-.528.609a24.868 24.868 0 0 1 1.056 0Zm-4.156 7.198a24.907 24.907 0 0 1-.528-.914c-.095.257-.183.51-.263.762c.257.055.521.106.79.152Zm1.932.234a22.915 22.915 0 0 0 3.392 0A22.957 22.957 0 0 0 15.393 12a22.863 22.863 0 0 0-1.696-2.938a22.896 22.896 0 0 0-3.392 0A22.91 22.91 0 0 0 8.609 12a22.926 22.926 0 0 0 1.696 2.938Zm5.852-4.728c.095-.257.183-.51.263-.761a17.974 17.974 0 0 0-.79-.153a25.076 25.076 0 0 1 .527.914ZM6.131 9.837c-.34.11-.662.23-.964.36c-1.465.628-2.166 1.338-2.166 1.803c0 .465.7 1.175 2.166 1.803c.302.13.624.25.964.36c.222-.7.497-1.426.825-2.163a20.678 20.678 0 0 1-.825-2.163Zm1.45-.388c.081.25.169.504.264.76a24.929 24.929 0 0 1 .528-.913c-.27.046-.534.097-.791.153Zm10.29 4.714c.34-.11.662-.23.964-.36C20.3 13.175 21 12.465 21 12c0-.465-.7-1.175-2.166-1.803c-.302-.13-.625-.25-.965-.36c-.22.7-.496 1.426-.824 2.163c.328.737.603 1.463.825 2.163Zm-1.45.389a19.245 19.245 0 0 0-.264-.762a25.108 25.108 0 0 1-.528.914c.27-.046.534-.097.791-.152Z" /></svg>
                        <Typography variant="h6" className={text.subtitle2}>React JS + Next JS</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 256 204"><path fill="#7E13F8" d="M53.172 0C38.565 0 27.756 12.785 28.24 26.65c.465 13.32-.139 30.573-4.482 44.642C19.402 85.402 12.034 94.34 0 95.488v12.956c12.034 1.148 19.402 10.086 23.758 24.197c4.343 14.069 4.947 31.32 4.482 44.641c-.484 13.863 10.325 26.65 24.934 26.65h149.673c14.608 0 25.414-12.785 24.93-26.65c-.464-13.32.139-30.572 4.482-44.641c4.359-14.11 11.707-23.05 23.741-24.197V95.488c-12.034-1.148-19.382-10.086-23.74-24.196c-4.344-14.067-4.947-31.321-4.483-44.642C228.261 12.787 217.455 0 202.847 0H53.17h.002ZM173.56 125.533c0 19.092-14.24 30.67-37.872 30.67h-40.23a4.339 4.339 0 0 1-4.338-4.339V52.068a4.339 4.339 0 0 1 4.339-4.34h39.999c19.705 0 32.637 10.675 32.637 27.063c0 11.503-8.7 21.801-19.783 23.604v.601c15.089 1.655 25.248 12.104 25.248 26.537Zm-42.26-64.05h-22.937v32.4h19.32c14.934 0 23.17-6.014 23.17-16.764c0-10.073-7.082-15.636-19.552-15.636Zm-22.937 45.256v35.705h23.782c15.548 0 23.786-6.239 23.786-17.965c0-11.728-8.467-17.742-24.786-17.742h-22.782v.002Z" /></svg>
                        <Typography variant="h6" className={text.subtitle2}>Bootstrap + Tailwind CSS + MUI + Ant Design</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 70 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32"><path fill="#f5de19" d="M2 2h28v28H2z" /><path d="M20.809 23.875a2.866 2.866 0 0 0 2.6 1.6c1.09 0 1.787-.545 1.787-1.3c0-.9-.716-1.222-1.916-1.747l-.658-.282c-1.9-.809-3.16-1.822-3.16-3.964c0-1.973 1.5-3.476 3.853-3.476a3.889 3.889 0 0 1 3.742 2.107L25 18.128A1.789 1.789 0 0 0 23.311 17a1.145 1.145 0 0 0-1.259 1.128c0 .789.489 1.109 1.618 1.6l.658.282c2.236.959 3.5 1.936 3.5 4.133c0 2.369-1.861 3.667-4.36 3.667a5.055 5.055 0 0 1-4.795-2.691Zm-9.295.228c.413.733.789 1.353 1.693 1.353c.864 0 1.41-.338 1.41-1.653v-8.947h2.631v8.982c0 2.724-1.6 3.964-3.929 3.964a4.085 4.085 0 0 1-3.947-2.4Z" /></svg>
                        <Typography variant="h6" className={text.subtitle2}>JavaScript + TypeScript</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 80 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24"><path fill="currentColor" d="M5 6c0 .026.01.17.292.42c.28.248.744.518 1.402.765C8.004 7.675 9.88 8 12 8s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.766C18.99 6.17 19 6.026 19 6c0-.026-.01-.17-.292-.42c-.28-.248-.744-.518-1.402-.765C15.996 4.325 14.12 4 12 4s-3.997.324-5.306.815c-.658.247-1.121.517-1.402.766C5.01 5.83 5 5.974 5 6zM3 6c0-.803.437-1.448.965-1.916c.53-.469 1.238-.846 2.027-1.142C7.578 2.347 9.702 2 12 2c2.297 0 4.422.347 6.008.942c.79.296 1.498.673 2.027 1.142C20.562 4.552 21 5.197 21 6v12c0 .803-.438 1.448-.965 1.916c-.53.469-1.238.846-2.027 1.142c-1.586.595-3.71.942-6.008.942c-2.297 0-4.422-.348-6.008-.942c-.79-.296-1.498-.673-2.027-1.142C3.437 19.448 3 18.803 3 18V6zm2 4c0 .025.01.17.292.42c.28.248.744.518 1.402.765C8.004 11.675 9.88 12 12 12s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.766c.282-.25.292-.394.292-.419V8.616a8.52 8.52 0 0 1-.992.442C16.422 9.653 14.298 10 12 10c-2.297 0-4.422-.347-6.008-.942A8.52 8.52 0 0 1 5 8.616V10zm0 2.616V14c0 .025.01.17.292.42c.28.248.744.518 1.402.765C8.004 15.675 9.88 16 12 16s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.766c.282-.25.292-.394.292-.419v-1.384c-.31.164-.643.31-.992.442c-1.586.595-3.71.942-6.008.942c-2.297 0-4.422-.348-6.008-.942A8.518 8.518 0 0 1 5 12.616zm0 4V18c0 .026.01.17.292.42c.28.248.744.518 1.402.765C8.004 19.675 9.88 20 12 20s3.997-.324 5.306-.815c.658-.247 1.121-.517 1.402-.765c.282-.25.292-.395.292-.42v-1.384c-.31.164-.643.31-.992.442c-1.586.595-3.71.942-6.008.942c-2.297 0-4.422-.348-6.008-.942A8.518 8.518 0 0 1 5 16.616z" /></svg>
                        <Typography variant="h6" className={text.subtitle2}>Firebase + MongoDB + GraphQl</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 90 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                    <li>
                      <div className={classes.textIcon}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 512 314"><defs><linearGradient id="logosNodejs0" x1="68.188%" x2="27.823%" y1="17.487%" y2="89.755%"><stop offset="0%" stop-color="#41873F" /><stop offset="32.88%" stop-color="#418B3D" /><stop offset="63.52%" stop-color="#419637" /><stop offset="93.19%" stop-color="#3FA92D" /><stop offset="100%" stop-color="#3FAE2A" /></linearGradient><linearGradient id="logosNodejs1" x1="43.277%" x2="159.245%" y1="55.169%" y2="-18.306%"><stop offset="13.76%" stop-color="#41873F" /><stop offset="40.32%" stop-color="#54A044" /><stop offset="71.36%" stop-color="#66B848" /><stop offset="90.81%" stop-color="#6CC04A" /></linearGradient><linearGradient id="logosNodejs2" x1="-4413.77%" x2="5327.93%" y1="13.43%" y2="13.43%"><stop offset="9.192%" stop-color="#6CC04A" /><stop offset="28.64%" stop-color="#66B848" /><stop offset="59.68%" stop-color="#54A044" /><stop offset="86.24%" stop-color="#41873F" /></linearGradient><linearGradient id="logosNodejs3" x1="-4.389%" x2="101.499%" y1="49.997%" y2="49.997%"><stop offset="9.192%" stop-color="#6CC04A" /><stop offset="28.64%" stop-color="#66B848" /><stop offset="59.68%" stop-color="#54A044" /><stop offset="86.24%" stop-color="#41873F" /></linearGradient><linearGradient id="logosNodejs4" x1="-9713.77%" x2="27.93%" y1="36.21%" y2="36.21%"><stop offset="9.192%" stop-color="#6CC04A" /><stop offset="28.64%" stop-color="#66B848" /><stop offset="59.68%" stop-color="#54A044" /><stop offset="86.24%" stop-color="#41873F" /></linearGradient><linearGradient id="logosNodejs5" x1="-103.861%" x2="100.797%" y1="50.275%" y2="50.275%"><stop offset="9.192%" stop-color="#6CC04A" /><stop offset="28.64%" stop-color="#66B848" /><stop offset="59.68%" stop-color="#54A044" /><stop offset="86.24%" stop-color="#41873F" /></linearGradient><linearGradient id="logosNodejs6" x1="130.613%" x2="4.393%" y1="-211.069%" y2="201.605%"><stop offset="0%" stop-color="#41873F" /><stop offset="32.88%" stop-color="#418B3D" /><stop offset="63.52%" stop-color="#419637" /><stop offset="93.19%" stop-color="#3FA92D" /><stop offset="100%" stop-color="#3FAE2A" /></linearGradient><path id="logosNodejs7" d="M57.903 1.85a5.957 5.957 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.957 5.957 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085L57.903 1.85Z" /></defs><g fill="none"><path fill="#539E43" d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04Zm14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18c0 .348-.116.694-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95Z" /><path fill="#333" d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81c1.04 0 2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543l-.116-75.817ZM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849c-.693.346-1.387.346-2.08 0l-12.251-7.05a5.957 5.957 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.957 5.957 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201L345.572.347Zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.714 1.714 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.714 1.714 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271v19.417Zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.957 5.957 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543c0-1.04-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.821 2.821 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0l29.125-16.99Z" /><path fill="#539E43" d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04l9.361-5.433Z" /><g transform="translate(134.068 70.501)"><mask id="logosNodejs8" fill="#fff"><use href="#logosNodejs7" /></mask><use fill="url(#logosNodejs0)" href="#logosNodejs7" /><g mask="url(#logosNodejs8)"><path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693Zm4.739 123.203c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045l-51.43 94.079Z" /><path fill="url(#logosNodejs1)" d="M106.676 29.934L57.788 1.85a8.025 8.025 0 0 0-1.503-.578L1.502 95.12a6.082 6.082 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156Z" /></g><g mask="url(#logosNodejs8)"><path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.106 5.106 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271ZM3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085c1.156.693 2.427.925 3.814.693L3.467 29.818l-.346.116Z" /><path fill="url(#logosNodejs2)" fill-rule="evenodd" d="m50.391.809l-.693.347h.924l-.231-.347Z" transform="translate(0 -9.246)" /><path fill="url(#logosNodejs3)" fill-rule="evenodd" d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8.057 8.057 0 0 0 2.196-.693l48.889-28.2Z" transform="translate(0 -9.246)" /><path fill="url(#logosNodejs4)" fill-rule="evenodd" d="m111.3 104.712l-.347-.578v.809l.346-.231Z" transform="translate(0 -9.246)" /><path fill="url(#logosNodejs5)" fill-rule="evenodd" d="m106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814Z" transform="translate(0 -9.246)" /><path fill="url(#logosNodejs6)" fill-rule="evenodd" d="m106.792 105.636l-48.773 28.085a6.973 6.973 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814Z" transform="translate(0 -9.246)" /></g></g></g></svg>
                        <Typography variant="h6" className={text.subtitle2}>Node JS - Express JS</Typography>
                      </div>
                      <LinearProgress
                        variant="determinate"
                        value={play ? 60 : 0}
                        classes={{
                          root: classes.progressBg,
                          bar: classes.bar
                        }}
                      />
                    </li>
                  </ul>
                </ScrollAnimation>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Timeline;
