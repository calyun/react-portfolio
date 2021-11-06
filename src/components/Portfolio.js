import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'

export default function Portfolio(props) {
  return (
    <><Box sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
    {props.data.map((project) => (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt={project.name}
        height="140"
        image={project.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{project.heroku}</Button>
        <Button size="small">{project.github}</Button>
      </CardActions>
    </Card>
    ))}
  </Box>
  </>
  );
}