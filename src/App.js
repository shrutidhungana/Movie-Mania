import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import img1 from './Assets/pic1.png'
import img2 from './Assets/pic2.png'
import Movie from './Components/Movie/Movie'
import MovieInfo from './Components/MovieInfo/MovieInfo'

export const API_KEY = '4e2326af';

const Container = styled.div`
  display: flex;
  flex-direction:column;
  `;

  const Header = styled.div`
  display: flex;
  flex-direction:row;
  justify-content:space-between;
  align-items: center;
  background-color:blue;
  color: white;
  padding: 10px;
  font-size: 30px;
  font-weight:bold;
  box-shadow:0 15px 20px  rgba(0, 0, 0, 0.4);
  `;

  const Name = styled.div`
  display: flex;
  flex-direction:row;
  align-items:center;
  `;

  const Image = styled.img`
  width: 20%;
  height: 100$;
  margin: 15px;
  `;


  const Search = styled.div`
  display:flex;
  flex-direction:row;
  padding: 10px 10px;
  background-color: white;
  border-radius:6px;
  margin-left:20px;
  width: 50%;
  align-items:center;

  `;

  const Icon = styled.img`
   width: 32px;
   height: 32px;

  `;

  const Input = styled.input`
  color: black;
  font-size: 18px;
  font-weight:bold;
  border:none;
  outline:none;
  margin-left: 25px;

 `;
  
 const MovieList = styled.div`
 display:flex;
 flex-direction:row;
 flex-wrap:wrap;
 padding: 35px;
 gap: 25px;
 justify-content: space-evenly;

`;

const Placeholder = styled.img`
width: 120px;
height: 120px;
margin: 180px;
opacity: 50%;

  `;

  const Paragraph = styled.p`
width: 120px;
height: 120px;
margin: 180px;
opacity: 50%;

  `;


const App = () => {
  const [searchQuery, updateSearchQuery] = useState()
  const [timeoutId, updateTimeoutId] = useState();
  const [movieList, updateMovieList] = useState([]);
  const [selectedMovie, onMovieSelect] = useState();
   

  const fetchData = async (searchString) => {
    const response = await axios.get(`https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`);
    console.log(response)
    updateMovieList(response.data.Search)

  };

  const onTextChange = (event) => {
    clearTimeout(timeoutId); 
    updateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutId(timeout)
  };

  
  return (
    <Container>
      <Header>
        <Name>
          <Image src = {img1} alt = "movie-icon" />
        Movie Mania
        </Name>
        <Search>
          <Icon src={img2} alt="icon" />
          <Input
            type="text"
            placeholder="Search Movie"
            onChange={onTextChange}
            value = {searchQuery}
          />
        </Search>
      </Header>
      {selectedMovie && <MovieInfo 
        selectedMovie={selectedMovie}
        onMovieSelect={onMovieSelect}
      />}
      <MovieList>
        {
          movieList?.length ? movieList.map((movie, index) =>(
            <Movie
              key={index}
              movie={movie}
              onMovieSelect = {onMovieSelect}
            />)) :
            (
              <>
              <Placeholder src={img1} />
               
              </>
          )
            }
        
        
        
        
      </MovieList>
    </Container>
  )
}

export default App
