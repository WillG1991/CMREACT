import React, { useState, useEffect } from "react";
import { Container } from "@mui/system";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

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

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    console.log('Fetching reviews...'); // Add this line to log a message to the console

    const placeId = "ChIJcUQQF1CBwokRB-zz3K0pCNo";
    const apiKey = "AIzaSyDkK7xOGH20-Oc5hIoFBCgIds7EnYoQzqs";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=reviews&key=${apiKey}`;
    
    fetch(url, { mode: 'cors' })
    .then(response => response.json())
    .then(data => {
      console.log(data); // log the data to the console
      const filteredReviews = data.result.reviews.filter((review) => review.text);
      setReviews(filteredReviews);
    })
    .catch(error => {
      console.log('API Error:', error);
    });
  
  }, []);

  return (
    <section id="Reviews">
      <h2 className="gellatio-font">Reviews</h2>
      <Carousel>
        {reviews.map((review) => (
          <Carousel.Item interval={5000}>
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