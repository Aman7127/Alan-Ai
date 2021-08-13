import {makeStyles} from "@material-ui/core/styles" ;

export default  makeStyles(
    {
        container: {
            padding : "0 5%",
            width : "100%",
            margin : "0"
        },
        card : {
            display : "flex",
            flexDirection : "column",
            justifyContent : "space-between",
            alignItems : "center",
            width : "100%",
            height : "50vh",
            padding : "10%",
            borderRadius : "10%",
            color : "White"
        },
        infocard : {
            display : "flex",
            flexDirection : "column",
            textAlign : "center",
           /* boxShadow : "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)"*/
           borderStyle: "solid"
        }
    }
);

