import styled from 'styled-components';

export const ReviewTileItem = styled.div`
    width: 25vw;
`

export const ReviewTileBodyItem = styled.div`
    display:flex;
    margin-bottom: 15px;
    max-width: 50vw;
    justify-content: flex-start;
    flex-wrap: wrap;

    button {
        background-color: ${({ theme }) => theme.body};
        color: ${({ theme }) => theme.fontColor};
      }
`

export const ReviewTileBodySummary = styled.div`
    display:flex;
    margin-bottom: 15px;
    max-width: 50vw;
    justify-content: flex-start;
    flex-wrap: wrap;
    font-weight: bold;
`
export const AverageRatingNumber = styled.div`
    width: 10vw;
    font-size: 36pt;
    font-style: bold;
`

export const AverageRatingStars = styled.div`
    width: 10vw;
    font-style: bold;
`

export const FilterSelect = styled.select`
    text-decoration: underline;
    border: none;
    font-size: 18pt;
    font-family: 'Qahiri', sans-serif;
    color: #333;
    margin: 0;
    font-weight: bold;
    background-color: transparent;
`

export const ShowMore = styled.button`
    text-decoration: underline;
    border: none;
    font-size: 12pt;
    font-family: 'Qahiri', sans-serif;
    color: #333;
    background-color: transparent;
    margin: 0;
    font-weight: bold;
`

export const ReviewPicture = styled.img`
    width: 100px;
    height: 100px;
`
