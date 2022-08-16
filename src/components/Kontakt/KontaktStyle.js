import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width:"95%",
    maxWidth: "100%",
    minWidth:"350px",
    margin: "50px 15px 200px 30px"
  },
  headImg: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center"
  },
  media: {
    height: 0,
    width: "100%",
    paddingTop: '70%', // 16:9
    marginBottom:theme.spacing(2)
  },
  rowStyle:{
    display:"flex",
    justifyContent:"space-around",
    marginRight:"0px !important",
    backgroundColor:"black"
  },
  headGoogle: {
    justifyContent: "center",
    display: "flex",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: "20px",
    color: "#616161",
  },
  typo: {
    fontWeight: "bold",
    fontSize: "16px",
    display:"flex",
    justifyContent:"center",
    marginBottom: theme.spacing(1)
  },
  headMap: {
    fontWeight: "bold",
    fontSize: "20px",
    display:"flex",
    justifyContent:"center",
    padding:"0",
    margin: theme.spacing(1,1,0),
    borderRadius:"10px",
    backgroundColor:"orange",
    color:"black",
    fontFamily: '"Titillium Web", sans-serif !important',
  },
  email: {
    color: "orange",
    fontWeight: "bolder",
    "&:hover": {
      color: "black",
      backgroundColor: "orange",
      textDecoration:"none"
    }
  },
  googleMaps:{
    height:"100vh",
    width:"100%", 
    position:"fixed"
}
}));

export default useStyles;