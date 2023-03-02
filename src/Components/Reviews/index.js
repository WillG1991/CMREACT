import React, { useState } from "react";
import { Container } from "@mui/system";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";
import { GoogleApiWrapper } from 'google-maps-react';

function getStarRating(rating) {
  let stars = '';
  for (let i = 0; i < rating; i++) {
    stars += '⭐️';
  }
  return stars;
}

function capitalizeWords(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function Reviews({ google, placeId }) {
  const [reviews, setReviews] = useState([]);

  React.useEffect(() => {
    const service = new google.maps.places.PlacesService(document.createElement('div'));
    const request = {
      placeId: "ChIJcUQQF1CBwokRB-zz3K0pCNo",
      fields: ['reviews'],
    };

    service.getDetails(request, (place, status) => {
      if (status === google.maps.places.PlacesServiceStatus.OK) {
        const filteredReviews = place.reviews.filter((review) => review.text);
        setReviews(filteredReviews);
      }
    });
  }, [google, placeId]);

  return (
    <section id="Reviews">
      <h2 className="gellatio-font">Reviews</h2>
      <Carousel>
        {reviews.map((review, index) => (
          <Carousel.Item key={index} interval={5000}>
            <Container className="reviewContainer">
              <h3>{getStarRating(review.rating)}</h3>
              <h3 className="lead">{review.text}</h3>
              <p>{capitalizeWords(review.author_name)}</p>
            </Container>
          </Carousel.Item>
        ))}
      </Carousel>
    </section>
  );
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDkK7xOGH20-Oc5hIoFBCgIds7EnYoQzqs',
})(Reviews);