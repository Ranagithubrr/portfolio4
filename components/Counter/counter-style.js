import { makeStyles } from 'tss-react/mui';

const counterStyles = makeStyles({ uniqId: 'counter' })(theme => ({
  counterWrap: {
    background: theme.palette.mode === 'dark' ? theme.palette.primary.dark : '#e7e7e782',
    padding: theme.spacing(5, 0)
  },
  text: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  counterItem: {
    [theme.breakpoints.up('sm')]: {
      paddingLeft: theme.spacing(5),
    },
    '& i': {
      marginRight: theme.spacing(2),
      fontSize: 64,
      lineHeight: '40px'
    }
  }
}));

// TODO jss-to-tss-react codemod: usages of this hook outside of this file will not be converted.
export default counterStyles;
