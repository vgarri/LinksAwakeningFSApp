import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const MarkerCard = ({data}) => {
  const { marker_title, address, type, url } = data
  console.log(data.url)



//problema con asincronia de urls ?????

  return <>
  <Card sx={{ width: 345, my: '8px' }}>
   <CardContent>
    <p className="favTitle">{marker_title}</p> 
    <p>{type}</p>
    <p>{address}</p>
    <article className="botonera">
      {url ? <button onClick={() => window.open(url, '_blank')} ><span>See more</span></button> :""} 
    </article>
   </CardContent>
 </Card>
</>;
};

export default MarkerCard;
