import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";
export default function InfoBox({ info }){
    const INIT_URL = 
    "https://images.unsplash.com/photo-1628525805785-cc1d20e7be74?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const COLD_URL = "https://images.unsplash.com/photo-1476400424721-e25994a9f0ff?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fENvbGR8ZW58MHx8MHx8fDA%3D";
    const HOT_URL = "https://images.unsplash.com/photo-1594315590298-329f49c8dcb9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3VuJTIwV2VhdGhlciUyMGltYWdlJTIwc21hbGwlMjBzaXplfGVufDB8fDB8fHww";
    const RAIN_URL = "https://media.istockphoto.com/id/1322717990/photo/thick-dark-black-heavy-storm-clouds-covered-summer-sunset-sky-horizon-gale-speed-wind-blowing.webp?a=1&b=1&s=612x612&w=0&k=20&c=W2-dXNrzqf1Lgo-xL5UYWsvM3q9EzqqpOCWhgC_cklk=";



    return(
        <div className='InfoBox'>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image={
                info.humidity > 80
                ? RAIN_URL
                :info.temp > 15
                ? HOT_URL
                :COLD_URL
              }
              title="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon />
                :info.temp > 15
                ? <SunnyIcon />
                : <AcUnitIcon />
              }
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} component = {"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>The weathercan be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
            </Typography>
            </CardContent>
            </Card>
         </div>
        </div>
    )
}