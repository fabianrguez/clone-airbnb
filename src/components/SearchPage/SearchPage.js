import { Button } from '@material-ui/core';
import React from 'react';
import SearchResult from '../SearchResult/SearchResult';
import './SearchPage.css';

function SearchPage() {
  return (
    <div className="searchPage">
      <div className="searchPage__info">
        <p>62 Stays · 26 august to 30 august · 2 guest</p>
        <h1> Stays nearby</h1>
        <Button variant="outlined">Cancellation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult
        img="https://images.unsplash.com/photo-1528914137830-c85ee162f588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · WiFi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="30€ / night"
        total="117€ total"
      />
      <SearchResult
        img="https://images.unsplash.com/photo-1528914137830-c85ee162f588?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
        location="Private room in center of London"
        title="Stay at this spacious Edwardian House"
        description="1 guest · 1 bedroom · 1 bed · 1.5 shared bathrooms · WiFi · Kitchen · Free parking · Washing machine"
        star={4.73}
        price="30€ / night"
        total="117€ total"
      />
    </div>
  );
}

export default SearchPage;
