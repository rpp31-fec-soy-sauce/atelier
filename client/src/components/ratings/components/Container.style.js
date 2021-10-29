import styled from 'styled-components';

export const RatingsContainer = styled.div`
    display: flex;
    gap: 20px;
    flex-direction: row;
    flex-wrap: nowrap;
    width: 100vw;
    height: 100vw;

`

export const RatingsBreakdown = styled.div`
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
    flex-wrap: nowrap;
    width: 33vw;
    height: 7vw;
`

export const ReviewListContainer = styled.div`
    order: 2;
    display: flex;
    flex-direction: column;
    width: 67vw;
    height: 100vw;
`

export const ReviewListHeader = styled.div`
    display: flex;
    flex-direction: row;
    width: 67vw;
    height: 7vw;
`

export const ReviewTilesListContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 67vw;
    height: 55vw;

`

export const ReviewListFooter = styled.div`
    display: flex;
    flex-direction: row;
    width: 67vw;
    height: 15vw;
`

export const ReviewTile = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 25vw;
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
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 15vw;
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
    flex-direction: row;
    width: 50vw;
    height: 5vw;

`