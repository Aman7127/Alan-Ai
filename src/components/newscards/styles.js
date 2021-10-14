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
            color : "White",
            borderStyle: "solid",
            /*boxShadow : "0 4px 4px 0 rgba(0, 0, 0, 0.2), 0 4px 4px 0 rgba(0, 0, 0, 0.19)"*/
            boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset"
        },
        infocard : {
            display : "flex",
            flexDirection : "column",
            textAlign : "center",
            marginTop : "20px"
            
           /*borderStyle: "solid"*/
        }
    }
);

