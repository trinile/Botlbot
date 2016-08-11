// Using CSS stylesheet does not work because Material UI's styling takes precedence and cannot be overrided 
// unless style prop of components are replaced with styles using format below

const style = {
  main: {
    marginTop: '10px',
    marginBottom: '10px',
    padding: '5px',
    background: 'white',
    color: '#6A7C86',
  },
  tweet: {
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    position: 'relative',
    border: '1px dash #ddd',
    textAlign: 'left',
    backgroundColor: 'white',
  },
  paper: {
    padding: '5px',
    margin: '10px',
    position: 'relative',
    color: '#6A7C86',
    fill: '#6A7C86',
  },
  icon: {
    display: 'inline-block',
    boxShadow: '0px',
    backgroundColor: '',
    fill: '#6A7C86',
  },
  div: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '5px',
    margin: '10px',
  },
  text: {
    width: '80%',
    display: 'inline-block',
  },
  align: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '50px',
  },
  launch: {
    fill: '#6A7C86',
    color: '#6A7C86',
  },
  p: {
    paddingLeft: '10px',
  },
  cardTitle: {
    padding: '0px',
  },
  avatar: {
    fill: 'white',
    backgroundColor: '#c9c9c9',
    height: '45px',
    width: '45px',
    borderRadius: '25px',
  },
  //styling for tweet sources
  news: {
    display: 'flex',
    borderRadius: '4px',
    justifyContent: 'space-around',
    color: '#6A7C86',
    paddingLeft: '10px',
    margin: '10px',
  },
  tweetsource: {
    borderRadius: '4px',
    boxShadowing: '',
    padding: '5px',
    margin: '10px',
    color: '#6A7C86',
    position: 'relative',
  },
  tweetIcon: {
    fill: '6A7C86',
  },
  //edit tweet styles
  header: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '',
    width: '100%',
    paddingTop: '15px',
  },
  tweet: {
    backgroundColor: 'white',
  },
  buttons: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'space-around',
    backgroundColor: '#89bdd3',
    padding: '',
    paddingTop: '5px',
    paddingBottom: '5px',
  },
  list: {
    display: 'flex',
    justifyContent: 'space-around',
    // flexFlow: 'column wrap',
  },
};

export default style;
