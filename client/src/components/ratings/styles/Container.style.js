import styled from 'styled-components';
import starValue from '../RatingsFiltering.jsx'

export const RatingsContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100vw;
`
export const RatingsAndProductBreakdownContainer = styled.div`
    order: 1;
    gap: 30px;
    display: flex;
    flex-direction: column;
    width: 33vw;
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
`

export const CharacteristicsBreakdownContainer = styled.div`
    display: flex;
    flex-direction: column;
`

export const RatingsFilterBreakdownRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 33vw;
`

export const RatingsBreakdownRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 230px;
`

export const ProductBreakDownContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 33vw;
`

export const ReviewListContainer = styled.div`
    display: flex;
    order: 2;
    gap: 20px;
    flex-direction: column;
    max-width: 50vw;
`

export const ReviewListHeader = styled.div`
    display: flex;
    flex-direction: row;
    max-width: 50vw;
    align-items: center;
`

export const ReviewTilesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 50vw;
    max-width: 50vw;
    margin: 4px, 4px, 4px, 4px;
    padding:4px;   
    position: relative;
    overflow-x: hidden;
    overflow-y: scroll;
    -webkit-overflow-scrolling: touch;
`

export const ReviewListFooter = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: row;
`

export const ReviewTile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    flex-wrap: wrap;
    border-bottom: solid 1px black;
`

export const ReviewTileHeader = styled.div`
    display: flex;
    flex-direction: row;
    height: 4vw;
    justify-content: space-between;
    align-items: center;
    max-width: 50vw;
`

export const ReviewTileFooter = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    max-width: 50vw;
    margin-top: 10px;
`

export const ReviewTileBodyResponse = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 50vw;
    background-color: lightgray;
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

export const PhotoGallery = styled.div`
    display: flex;
    flex-direction: row;
    gap: 15px;
`