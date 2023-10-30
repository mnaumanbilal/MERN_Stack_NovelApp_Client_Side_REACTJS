import React from "react";
import Slide from '@mui/material/Slide';

import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

import "./viewCSS/HomePage.css"

//<img className="slideShow" src="https://www.healthmart.com/PhotoGallery/5134994/HM-44291-HealthMart.com---Carousel-Ad---Unexpected-Convenience---Easy-Transfers_FIN.gif" ></img>

function Item(props)
{
    return (
        <Paper>
            <img className="slideShowImg" src={props.item.localSource}/>
        </Paper>
    )
}

function carouselCustom(imgArr)
{
     return (
        <>
        <Carousel>
            {
                imgArr.map( (arrItem, i) => <Item key={i} item={arrItem} /> )
            }
        </Carousel>
        </>
    )
}

/* imgArr.map( (arrItem, i) => <Item key={i} item={arrItem} /> )

we don't need for loop for array if we use map().


*/

export default carouselCustom;