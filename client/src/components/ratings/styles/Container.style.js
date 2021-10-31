import styled from 'styled-components';
import starValue from '../RatingsFiltering.jsx'

export const RatingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vw;

`
export const RatingsAndProductBreakdownContainer = styled.div`
    order: 1;
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 33vw;
    height: 100vw;

`

export const AverageRatingContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 33vw;
`

export const RatingsFilterBreakdownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33vw;
`

export const RatingsFilterBreakdownRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 33vw;
`

export const ProductBreakDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33vw;
`

export const ReviewListContainer = styled.div`
    order: 2;
    gap: 20px;
    display: flex;
    flex-direction: column;
    width: 67vw;
    height: 100vw;
`

export const ReviewListHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 67vw;
    align-items: center;
`

export const ReviewTilesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 67vw;
    height: 30vw;

`

export const ReviewListFooter = styled.div`
    display: flex;
    gap:10px;
    flex-direction: row;
    width: 67vw;
    height: 15vw;
`

export const ReviewTile = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 15vw;
    border-bottom: solid 1px black;

`

export const ReviewTileHeader = styled.div`
    order: 1;
    display: flex;
    flex-direction: row;
    width: 50vw;
    height: 5vw;

`

export const ReviewTileBody = styled.div`
    order: 2;
    gap: 10px;
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 10vw;
`

export const ReviewTileBodyResponse = styled.div`
    display: flex;
    flex-direction: row;
    width: 50vw;
    height: 15vw;
    background-color: darkgray;
`

export const ReviewTileFooter = styled.div`
    order: 3;
    display: flex;
    flex-wrap: nowrap;
    gap: 5px;
    flex-direction: row;
    width: 50vw;
    height: 5vw;

`

export const ratingFilterContainer = styled.div`
    height: 20;
    width: '100%';
    background-color: "#e0e0de";
    border-radius: 50;
    margin: 50
`

export const ratingFilterFiller = styled.div`
    height: 100%;
    width: 43%;
    background-color: darkgray;
    border-radius: 'inherit';
    text-align: 'right';
`