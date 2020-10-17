import React from 'react';
import Banner from '../Banner/Banner';
import Card from '../Card/Card';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1564496222209-7dff34b96f95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://images.unsplash.com/photo-1459058537932-d95b3e068690?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1494&q=80"
          title="Unique stays"
          description="Spaces that are more than hust a place to sleep"
        />
        <Card
          src="https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-1.2.1&auto=format&fit=crop&w=1494&q=80"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home__section">
        <Card
          src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
          title="3 Bedrooms apartment in Bournemouth"
          description="Superhost with stunning views of the beachside in Sunny Bournemouth"
          price="130€/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1053&q=80"
          title="Penthouse in Boston"
          description="Enjoy the amazing sights of Boston with this stunning penthouse"
          price="350€/night"
        />
        <Card
          src="https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
          title="1 Bedroom apartment"
          description="Superhost with great amentities and a fabolous shopping complex nearby"
          price="70€/night"
        />
      </div>
    </div>
  );
}

export default Home;
