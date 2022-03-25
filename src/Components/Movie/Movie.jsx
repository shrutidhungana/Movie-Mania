import React from 'react'
import styled from 'styled-components'

const Movies = styled.div`
display: flex;
flex-direction: column;
padding: 10px;
width: 300px;
box-shadow: 0 5px 8px 0 #E8E8E8;
cursor:pointer;
`;

const Cover = styled.img`
height: 400px;
object-fit:cover;
`;

const Name = styled.span`
font-size: 20px;
font-weight: 500;
color:black;
margin: 20px 0;
white-space: nowrap;
text-overflow: ellipsis;
overflow: hidden;

`;

const Column = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const Info = styled.span`
 font-size: 14px;
 font-weight: 400;
 color:black;
 
  text-transform: capitalize;
 
`;

const Movie = (props) => {
    const { Title,
        Year,
        Type,
        imdbID,
        Poster

    }
        = props.movie;

   

    return (
        <Movies onClick={() => props.onMovieSelect(imdbID) }>
            <Cover src= {Poster} alt = "poster"/>
            <Name>
               {Title}
            </Name>
            <Column>
                <Info> Year: {Year }</Info>
                <Info>Type: {Type}</Info>
               
                
            </Column>
        </Movies>
    )
}

export default Movie