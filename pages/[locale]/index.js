import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles } from 'tss-react/mui';
import CssBaseline from '@mui/material/CssBaseline';
// import useMediaQuery from '@mui/material/useMediaQuery';
// Use this below for Server Side Render/Translation (SSR)
// import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
// Use this below for Static Site Generation (SSG)
import { getStaticPaths, makeStaticProps } from '~/lib/getStatic';
import brand from '~/public/text/brand';
import Header from '~/components/Header';
import BannerNav from '~/components/BannerNav';
import About from '~/components/About';
import Timeline from '~/components/Timeline';
import Counter from '~/components/Counter';
import Services from '~/components/Services';
import Gallery from '~/components/Gallery';
import Testimonials from '~/components/Testimonials';
// import Blog from '~/components/Blog';
import Footer from '~/components/Footer';
import Decoration from '~/components/Parallax/Decoration';

const sectionMargin = margin => (margin * 20);
const useStyles = makeStyles({ uniqId: 'home' })(theme => ({
  mainWrap: {
    position: 'relative',
    width: '100%',
    overflow: 'hidden',
    background: theme.palette.mode === 'dark' ? theme.palette.background.dark : theme.palette.background.paper,
  },
  greyBg: {
    paddingTop: theme.spacing(10)
  },
  spaceBottom: {
    marginBottom: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginBottom: theme.spacing(10)
    }
  },
  spaceBottomShort: {
    marginBottom: theme.spacing(10)
  },
  spaceTop: {
    marginTop: sectionMargin(6),
    [theme.breakpoints.down('md')]: {
      marginTop: sectionMargin(3)
    }
  },
  spaceTopShort: {
    marginTop: theme.spacing(10)
  },
  containerWrap: {
    marginTop: -40,
    '& > section': {
      position: 'relative'
    }
  },
  parallaxWrap: {
    position: 'relative'
  },
  bottomDeco: {
    top: -200,
    position: 'absolute',
    width: '100%',
    height: 'calc(100% + 200px)'
  }
}));

function Landing(props) {
  const { classes, cx } = useStyles();
  const { onToggleDark, onToggleDir } = props;

  return (
    <React.Fragment>
      <Head>
        <title>
          {brand.maskulino.name + ' - Profile'}
        </title>
      </Head>
      <CssBaseline />
      <div className={classes.mainWrap}>
        <Header
          onToggleDark={onToggleDark}
          onToggleDir={onToggleDir}
        />
        <section id="home">
          <BannerNav
            onToggleDark={onToggleDark}
            onToggleDir={onToggleDir}
          />
        </section>
        <section id="about">
          <About />
          <Timeline />
          <Counter />
        </section>
        <div className={classes.greyBg}>
          <div className={classes.parallaxWrap}>
            <Decoration />
            <section id="services">
              <Services />
            </section>
            <section id="my-work" className={cx(classes.spaceTopShort, classes.spaceBottomShort)}>
              <Gallery />
            </section>
          </div>
          <section id="testimonials">
            <Testimonials />
          </section>
          <div className={classes.parallaxWrap}>
            <div className={classes.bottomDeco}>
              <Decoration />
            </div>
            <section id="blog" className={classes.spaceTopShort}>
              {/* <Blog /> */}
            </section>
            <section id="contact" className={classes.spaceTop}>
              <Footer />
            </section>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

Landing.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
};

// Use this below for Server Side Render/Translation (SSR)
// export const getStaticProps = async ({ locale }) => ({ props: { ...await serverSideTranslations(locale, ['common']) } });

// Use this below for Static Site Generation (SSG)
const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Landing;
