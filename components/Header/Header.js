import React, { useState, useEffect, Fragment } from 'react';
import PropTypes from 'prop-types';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Link from 'next/link';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from '@mui/material/Fade';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/R.png';
import brand from '~/public/text/brand';
import { useText } from '~/theme/common';
import routeLink from '~/public/text/link';
import useStyles from './header-style';
import Settings from '../Settings';
import navMenu from '../SideNavigation/menu';

let counter = 0;
function createData(name, url, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    offset,
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function Header(props) {
  // Theme breakpoints
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const { classes: text } = useText();

  const [fixed, setFixed] = useState(false);
  let flagFixed = false;
  const handleScroll = () => {
    const doc = document.documentElement;
    const scroll = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    const newFlagFixed = (scroll > 80);
    if (flagFixed !== newFlagFixed) {
      setFixed(newFlagFixed);
      flagFixed = newFlagFixed;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  }, []);

  const { classes, cx } = useStyles();
  const {
    onToggleDark,
    onToggleDir,
    invert,
  } = props;
  const { t, i18n } = useTranslation('common');
  const curLang = '/' + i18n.language;

  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0]),
    createData(navMenu[1], '#' + navMenu[1], -100),
    createData(navMenu[2], '#' + navMenu[2]),
    createData(navMenu[3], '#' + navMenu[3], -40),
    createData(navMenu[4], '#' + navMenu[4], -40),
    createData(navMenu[5], '#' + navMenu[5], -40),
  ]);
  const [openDrawer, setOpenDrawer] = useState(false);
  const handleOpenDrawer = () => {
    setOpenDrawer(!openDrawer);
    const body = document.getElementsByTagName('body');
    if (openDrawer) {
      body[0].style.overflow = 'auto';
    } else {
      body[0].style.overflow = 'hidden';
    }
  };

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
    const body = document.getElementsByTagName('body');
    body[0].style.overflow = 'auto';
  };

  return (
    <Fragment>
      <AppBar
        component="div"
        position="relative"
        id="header"
        className={cx(
          classes.header,
          invert || fixed || isMobile ? classes.fixed : '',
          openDrawer && classes.openDrawer
        )}
      >
        <Container fixed={isDesktop}>
          <div className={classes.headerContent}>
            <nav className={cx(classes.navLogo, invert && classes.invert)}>
              <IconButton
                onClick={handleOpenDrawer}
                className={cx('hamburger hamburger--squeeze', classes.mobileMenu, openDrawer && 'is-active')}
                size="large"
              >
                <span className="hamburger-box">
                  <span className={cx(classes.bar, 'hamburger-inner')} />
                </span>
              </IconButton>
              <div className={classes.logo}>
                {invert ? (
                  <Link href={curLang + routeLink.maskulino.home}>
                    <img src={logo} alt="logo" />
                  </Link>
                ) : (
                  <AnchorLink href="#home">
                    <img src={logo} alt="logo" />
                  </AnchorLink>
                )}
              </div>
              <Settings toggleDark={onToggleDark} toggleDir={onToggleDir} invert={invert} />
            </nav>
          </div>
        </Container>
      </AppBar>
      <Fade in={openDrawer}>
        <div className={cx(classes.paperNav, openDrawer && classes.show)}>
          <div className={classes.mobileNav}>
            <Container maxWidth="md">
              <Grid container spacing={6}>
                <Grid item sm={6}>
                  <div className={classes.rootMenu}>
                    {!isMobile && (
                      <Typography variant="h5" className={classes.nameDeco}>
                        EXPLORE
                      </Typography>
                    )}
                    {openDrawer && (
                      <ul className={classes.menu}>
                        {menuList.map((item, index) => (
                          <li key={item.id.toString()} style={{ animationDuration: index * 0.15 + 's' }}>
                            {invert ? (
                              // eslint-disable-next-line
                              <Button href={'/' + item.url}>
                                {t('maskulino-landing.header_' + item.name)}
                              </Button>
                            ) : (
                              // eslint-disable-next-line
                              <Button component={LinkBtn} onClick={handleCloseDrawer} offset={item.offset || 0} href={item.url}>
                                {t('maskulino-landing.header_' + item.name)}
                              </Button>
                            )}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </Grid>
                <Grid item sm={6}>
                  <div className={classes.detail}>
                    {!isMobile && (
                      <Typography variant="h5" className={classes.nameDeco}>
                        CONTACT
                      </Typography>
                    )}
                    <div className={classes.logoName}>
                      <Typography variant="h3" className={text.title}>
                        {brand.maskulino.name}
                      </Typography>
                      <Typography variant="h4" className={text.subtitle}>
                        {brand.maskulino.title}
                      </Typography>
                    </div>
                    <Button variant="outlined" color="primary" className={classes.download} component="a">Download CV</Button>
                    <div className={classes.socmed}>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-facebook', classes.fb)} />
                      </IconButton>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-instagram', classes.ig)} />
                      </IconButton>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-twitter', classes.tw)} />
                      </IconButton>
                      <IconButton aria-label="Delete" className={classes.margin} size="small">
                        <i className={cx('ion-logo-linkedin', classes.in)} />
                      </IconButton>
                    </div>
                    <div className={classes.contact}>
                      <Typography className={text.paragraph}>
                        {t('maskulino-landing.footer_contact')}
                        <br />
                        +880199672640
                      </Typography>
                      <Divider className={classes.divider} />
                      <Typography className={text.paragraph}>
                        {t('maskulino-landing.footer_hello')}
                        <br />
                        ranarr.dev@gmail.com
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </Fade>
    </Fragment>
  );
}

Header.propTypes = {
  onToggleDark: PropTypes.func.isRequired,
  onToggleDir: PropTypes.func.isRequired,
  invert: PropTypes.bool,
};

Header.defaultProps = {
  invert: false
};

export default Header;
