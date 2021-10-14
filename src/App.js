// @ts-nocheck
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React, {useState , useEffect} from 'react';
import alanBtn from "@alan-ai/alan-sdk-web";
import NewsCards from "./components/newscards/NewsCards";
import useStyles from './styles';
import wordsToNumbers from "words-to-numbers";
import "./index.css";



export const App = () => {

    const alanKey = '12a3adae007e722138ef29f2dc6ffb0d2e956eca572e1d8b807a3e2338fdd0dc/stage';

    const [newsarticles ,setnewsarticles] = useState([ ]); 
    const [activearticles , setactivearticles] = useState(-1); 
    const classes = useStyles();

    useEffect(() => {
        alanBtn({
            key: alanKey ,
            onCommand : ({command , articles , number}) => {
                if(command === "newHeadlines"){
                    setnewsarticles(articles);
                    setactivearticles(-1);
                } else if (command === "highlight"){
                    setactivearticles((prevactivearticle) => prevactivearticle + 1);
                }else if (command === "open"){

                    const parsednumber = number.length > 2 ? wordsToNumbers(number , {fuzzy : true}): number ;
                    const article = articles[parsednumber - 1];

                    if(parsednumber > 20){
                        alanBtn().playText("Please try that again");
                    }else if(article){
                        window.open(articles[number-1].url ,"_blank");
                        alanBtn().playText("Opening the article");
                    } 
                }

            }
        })
    }, []);

     const style = {
                fontSize : "50px",
                
           }


           

    return (
      
       
      
        <div>
            <div className={classes.logoContainer}>
            <h1 style={{color : " #eeeeee" , paddingTop : "20px" , fontSize : "5rem"}}> Xenon Virtual Assistant</h1>
            
            </div>
            <NewsCards articles={newsarticles} activearticles={activearticles}/>
        </div>
    );
}

export default App;
