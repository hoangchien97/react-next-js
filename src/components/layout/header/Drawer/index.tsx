import React, { KeyboardEventHandler } from 'react';
import { makeStyles } from '@material-ui/core';
import Drawer, { DrawerProps } from '@material-ui/core/Drawer';

import Link from 'next/link';

const useStyles = makeStyles((theme) => ({
  item: {
    '&:hover, &:hover > a': {
      backgroundColor: '#0B1A83 !important',
      color: '#fff !important'
    }
  },

  list: {
    width: 300
  },
  fullList: {
    width: 'auto'
  },

  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },

  nested: {
    paddingLeft: theme.spacing(4),
    '&:hover, &:hover > a, &:hover svg': {
      backgroundColor: '#0B1A83 !important',
      color: '#fff !important',
      textDecoration: 'none'
    }
  }
}));

interface Props {
  isShow: boolean;
  toggleDrawerHandler: DrawerProps & KeyboardEventHandler;
}

interface LinkItem {
  href: string;
  text: string;
}

function ESDrawer(props: Props) {
  const links: LinkItem[] = [
    { href: '/about', text: 'About' },
    { href: '/arena-details', text: 'Arena' }
  ];

  // const [isShow, setIsShow] = useState(false);

  const classes = useStyles({});

  // eslint-disable-next-line
  const sideList = (side: string) => (
    <div className={classes.list} role="presentation" onKeyDown={props.toggleDrawerHandler}>
      {links.map((link) => (
        <Link key={link.href} href={link.href}>
          {link.text}
        </Link>
      ))}
    </div>
  );

  return (
    <Drawer anchor="right" open={props.isShow} onClose={props.toggleDrawerHandler}>
      {sideList('isShow')}
    </Drawer>
  );
}

export default ESDrawer;
