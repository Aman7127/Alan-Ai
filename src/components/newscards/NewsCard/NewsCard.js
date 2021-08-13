/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React , {useState , useEffect ,createRef } from 'react';
import { Card , CardActions ,CardActionArea , CardContent, CardMedia, Button , Typography } from '@material-ui/core';
import classNames from "classnames";
import useStyles from "./styles";

const NewsCard = ({article : {description , publishedAt , source , title ,  url , urlToImage} , i, activearticles}) => {

    const classes = useStyles();
    const [elrefs ,setElrefs] = useState([ ]);
    const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);


    useEffect(() => {
            setElrefs((refs) => Array(20).fill().map((_ , j) => refs[j] || createRef() ));
    },[]);

    useEffect(() => {
          if (i === activearticles && elrefs[activearticles]) {
         scrollToRef(elrefs[activearticles]);
    }
    },[i , activearticles ,elrefs]);
    return (
        /*<Card className={classNames(classes.card , activearticles === i ? classes.activeCard : null)} target="_blank">*/
                <Card ref={elrefs[i]}  className={ activearticles === i ? classes.activeCard : classes.card}>
            <CardActionArea href={url}>
                <CardMedia className= {classes.media} image={urlToImage}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2" >{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2" >{source.name}</Typography>
                </div>
                    <Typography className={classes.title} gutterbottom variant="h5">{title}</Typography>
                    <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" href={url} >Learn more</Button>
                <Typography variant="h5" color="textSecondary" component="h2" >{i +1}</Typography>
            </CardActions>
        </Card>
    )}

export default NewsCard;