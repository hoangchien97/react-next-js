import React from 'react';
import {
  AppBar as MuiAppBar,
  IconButton as MuiIconButton,
  withStyles,
  createStyles,
  Container,
  Theme,
  Toolbar,
  makeStyles
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import MenuIcon from '@material-ui/icons/Menu';
import Image from 'next/image';
import styles from './index.module.scss';

const AppBar = withStyles(() =>
  createStyles({
    root: {}
  })
)(MuiAppBar);

const IconButton = withStyles(() =>
  createStyles({
    root: {}
  })
)(MuiIconButton);

const useStyles = makeStyles((theme: Theme) => ({
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      color: 'black'
    }
  },
  hamburgerButton: {
    display: 'flex',

    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
}));

interface PropsScroll {
  children: React.ReactElement;
}

function ElevationScroll(props: PropsScroll) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

interface Props {
  isShow?: boolean;
  openDrawerHandler: () => void;
}

const ToolbarHeader = (props: Props) => {
  const classes = useStyles({});

  return (
    <div>
      <ElevationScroll {...props}>
        <AppBar className={styles.appbar}>
          <Container maxWidth="lg">
            <Toolbar className={styles.toolbar}>
              <div className={styles.logo}>
                <Image src="/images/logo.png" layout="responsive" width={135} height={40} objectFit="cover" />
              </div>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="open drawer"
                className={classes.hamburgerButton}
                onClick={props.openDrawerHandler}>
                <MenuIcon />
              </IconButton>
              <div className={classes.sectionDesktop}>abc</div>
            </Toolbar>
          </Container>
        </AppBar>
      </ElevationScroll>
    </div>
  );
};

export default ToolbarHeader;
