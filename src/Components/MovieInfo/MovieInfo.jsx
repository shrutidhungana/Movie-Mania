import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { API_KEY } from '../../App'

const Container = styled.div`
display: flex;
flex-direction: row;
padding: 20px 30px;
justify-content: center;
border-bottom: 1px solid #500000;
`;
const Image = styled.img`
object-fit: cover;
height: 350px;
`;
const Column = styled.div`
display: flex;
flex-direction: column;
margin: 20px;
`;
const Name = styled.span`
font-size: 22px;
font-weight: 600;
color: black;
margin: 15px 0;
white-space: nowrap;
overflow: hidden;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
  opacity: 0.8;
}
`;
const Info = styled.span`
font-size: 16px;
font-weight: 600;
color: black;
overflow: hidden;
margin: 4px 0;
text-transform: capitalize;
text-overflow: ellipsis;
& span {
  opacity: 0.5;
}
`;
const Close = styled.span`
font-size: 16px;
  font-weight: 600;
  color: black;
  background: lightgray;
  height: fit-content;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  opacity: 0.8;

`;

const MovieInfo = (props) => {
    const [movieInfo, setMovieInfo] = useState();
    const { selectedMovie } = props;
    useEffect(() => {
        axios.get(`https://www.omdbapi.com/?i=${selectedMovie}&apikey=${API_KEY}`,)
        .then((response) => setMovieInfo(response.data));
    },[selectedMovie])

  

    return (
      
        <Container>
            {movieInfo ? (
                <div>
          <Image src={movieInfo?.Poster} alt= {movieInfo?.Title} />
          <Column>
              <Name>
              {movieInfo?.Type}: <span>{movieInfo?.Title}</span>
              </Name>
              <Info>
              IMDB Rating: <span>{movieInfo?.imdbRating}</span>
              </Info>
              <Info>
              Year: <span>{movieInfo?.Year}</span>
              </Info>
              <Info>
              Language: <span>{movieInfo?.Language}</span>
              </Info>
              <Info>
              Rated: <span>{movieInfo?.Rated}</span>
              </Info>
              <Info>
              Released: <span>{movieInfo?.Released}</span>
              </Info>
              <Info>
              Runtime: <span>{movieInfo?.Runtime}</span>
              </Info>
              <Info>
              Genre: <span>{movieInfo?.Genre}</span>
              </Info>
              <Info>
              Director: <span>{movieInfo?.Director}</span>
              </Info>
              <Info>
              Actors: <span>{movieInfo?.Actors}</span>
              </Info>
              <Info>
              Plot: <span>{movieInfo?.Plot}</span>
              </Info>
          </Column>
                    <Close onClick={() => props.onMovieSelect()}>X</Close>
                    </div>
            ) : (
                    "Loading..."
                    )
                    
            }
      </Container>
  )
}

export default MovieInfo