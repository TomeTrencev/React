import React from "react";
import { Movies } from "./components/Movies";

var movie1 = {
  name:'Skyfall',
  date:'2012',
  genre:'Action',
  plot:'James Bonds loyalty to M is tested when her past comes back to haunt her. When MI6 comes under attack, 007 must track down and destroy the threat, no matter how personal the cost.',
  imdbLink:'https://www.imdb.com/title/tt1074638/',
  imgUrl:'https://my-live-01.slatic.net/p/7a309004bcdc98133ac53c5d1c352d30.jpg'
}

var movie2 = {
  name:'8 Mile',
  date:'2002',
  genre:'Drama',
  plot:'A young rapper, struggling with every aspect of his life, wants to make it big but his friends and foes make this odyssey of rap harder than it may seem.',
  imdbLink:'https://www.imdb.com/title/tt0298203/',
  imgUrl:'https://m.media-amazon.com/images/I/715on+XYrvL._AC_SY679_.jpg'
}

var movie3 = {
  name:'Prisoners',
  date:'2013',
  genre:'Crime',
  plot:'When Keller Dovers daughter and her friend go missing, he takes matters into his own hands as the police pursue multiple leads and the pressure mounts.',
  imdbLink:'https://www.imdb.com/title/tt1392214/?ref_=fn_al_tt_1',
  imgUrl:'https://m.media-amazon.com/images/M/MV5BMTg0NTIzMjQ1NV5BMl5BanBnXkFtZTcwNDc3MzM5OQ@@._V1_.jpg'
}

var movie4 = {
  name:'Gone Girl',
  date:'2014',
  genre:'Mystery',
  plot:'With his wifes disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when its suspected that he may not be innocent.',
  imdbLink:'https://www.imdb.com/title/tt2267998/?ref_=nv_sr_srsg_0',
  imgUrl:'https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg'
}

var movie5 = {
  name:'Batman Begins',
  date:'2005',
  genre:'Action',
  plot:'After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.',
  imdbLink:'https://www.imdb.com/title/tt0372784/?ref_=nv_sr_srsg_4',
  imgUrl:'https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg'
}
export const App = () =>{
  return(
  <div>
    <Movies movies={movie1}/>
    <Movies movies={movie2}/>
    <Movies movies={movie3}/>
    <Movies movies={movie4}/>
    <Movies movies={movie5}/>
  </div>
  )
}