import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Scrollspy from 'react-scrollspy';
import { useTranslation } from 'next-i18next';
import logo from '~/public/images/R.png';
import useStyles from './sidenav-icon-style';
import navMenu from './menu';

let counter = 0;
function createData(name, url, icon, offset) {
  counter += 1;
  return {
    id: counter,
    name,
    url,
    icon,
    offset
  };
}

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) { // eslint-disable-line
  return <AnchorLink to={props.to} {...props} />; // eslint-disable-line
});

function SideNavigation() {
  const { classes } = useStyles();
  const { t } = useTranslation('common');
  const [menuList] = useState([
    createData(navMenu[0], '#' + navMenu[0], 'ion-ios-contact-outline', 160),
    createData(navMenu[1], '#' + navMenu[1], 'ion-ios-add-circle-outline'),
    createData(navMenu[2], '#' + navMenu[2], 'ion-ios-keypad-outline'),
    createData(navMenu[3], '#' + navMenu[3], 'ion-ios-chatboxes-outline', -40),
    createData(navMenu[4], '#' + navMenu[4], 'ion-ios-copy-outline'),
    createData(navMenu[5], '#' + navMenu[5], 'ion-ios-mail-outline'),
  ]);
  return (
    <div className={classes.navigation}>
      <nav className={classes.navMenu}>
        <AnchorLink href="#home" className={classes.logo}>
          <img src={logo} alt="logo" />
        </AnchorLink>
        <List component="nav" className={classes.menu}>
          <Scrollspy
            items={navMenu}
            currentClassName="active"
          >
            {menuList.map(item => (
              <ListItem
                key={item.id.toString()}
                button
                component={LinkBtn}
                offset={item.offset || 0}
                href={item.url}
                classes={{ root: classes.link }}
              >
                <ListItemIcon className={classes.icon}>
                  <span className={item.icon} />
                </ListItemIcon>
                <ListItemText
                  classes={{ root: classes.text }}
                  primary={t('maskulino-landing.header_' + item.name)}
                />
              </ListItem>
            ))}
          </Scrollspy>
        </List>
      </nav>
    </div>
  );
}

export default SideNavigation;
