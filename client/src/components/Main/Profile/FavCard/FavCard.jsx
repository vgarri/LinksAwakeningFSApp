import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const FavCard = ({data}) => {
  const {marker_title} = data;

  return <>
      <Card sx={{ width: 345, my: '8px' }}>
       <CardContent>
        <p className="favTitle">{marker_title}</p> 
       </CardContent>
     </Card>
  </>;
};

export default FavCard;


 


