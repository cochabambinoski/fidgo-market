import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import accounting from 'accounting';
import DeleteIcon from '@mui/icons-material/Delete';
import { Icon } from '@mui/material';


export default function CheckOutCard({product: {id,name,productType,image,price,rating,description}}) {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
            <Typography
                className={expanded.action}
                variant='h5'
                color='textSecondary'
            >
                {accounting.formatMoney(price, "Bs ")}
                
            </Typography>
        }
        title={name}
        subheader="In stock"
      />
      <CardMedia
        component="img"
        height="194"
        image={image}
        alt={name}
      />
      <CardActions disableSpacing>
        {Array(rating)
            .fill()
            .map((_, i) => (
                <p>&#11088;</p>
            ))}
        <IconButton>
            <DeleteIcon fontSize='large'/>
        </IconButton>        
      </CardActions>
    </Card>
  );
}
