import * as React from 'react';
import { Container } from '@mui/system';
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";


const FAQSections = [
  {
    rating: "⭐⭐⭐⭐⭐",
    description: `There are no words to describe my experiences with Christina. She is truly amazing! After
    every session I have had with her, I left feeling relaxed, refreshed and inspired. She has
    the most beautiful space as well! You will feel relaxed as soon as you enter. If you are
    looking for mental and/or physical holistic healing, this is your girl! Just being in her
    presence and talking with her is positive energy. 10 out of 10!`,
    name: "Allie DeAngelis"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    description:
      'I have been working with Christina for over 3 years. Her gifts are some of the most unique and remarkable skill I have ever had the pleasure of experiencing. Every session she makes you feel that you have entered a safe and open place where you can just release. The infrared sauna service is a superb touch to heighten the powerful session. She really brings you deep into relaxation, to your own self, and to the most magical places! I highly recommend her services to anyone and everyone! She is truly and honestly one of a kind ✨',
    name: "Taylor Gallo"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    description: `Christina's innate ability to connect with you is magical. She can sense your energy before you
    walk through the door and is equipped to provide healing and clarity that's best suited to your
    situation. From the moment you book your appointment to the frequent check-ins afterward - your
    time is efficiently spent. She is a consummate professional and most importantly - she cares
    about your well being. Highly recommend!`,
    name: "Suzette Minetti"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    description: `I was very stressed and anxious before my wedding. I saw Christina for reiki about a week and a
    half before. I had never done something like this but I am so happy I did!! Christina is an
    amazing person, a good listener, and gives great advice. I felt so calm and collected after my
    session and for the remaining week leading up to my wedding. I am so grateful for my experience
    with Christina and highly recommend booking a session with her, you won’t regret it!`,
    name: "Allie DeAngelis"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    description: 'I feel so eternally blessed to have Christina as friend and healer! I’ve been attending reiki sessions with Christina for years and I will never go to anyone else. She truly cares about you as a person and will guide you as much as you require. She has a true gift and is a beautiful person inside and out. I feel safe, relaxed, and at peace when I am in her presence. I recommend her always!!',
    name: "Nicolette DeAngelis"
  },
  {
    rating: "⭐⭐⭐⭐⭐",
    description: `I’ve been coming to Christina over the last few years for energy healing. She has allowed me to
    awaken my intuition and deepen my relationship with my self. She has the ability to hold this
    beautiful, safe and intimate space to explore these depths. Not only do you receive reiki but
    the intuitive guidance and thought provoking questions she asks feels like a therapy session
    too! Highly recommend!`,
    name: "Danielle Brown"
  },
];

export default function Reviews() {
return (
    <section id="Reviews"> 
      <h2 className='gellatio-font'> Reviews</h2>

<Carousel>
{FAQSections.map(section =>
      <Carousel.Item interval={5000}>
        <Container className="reviewContainer">
       
        <h3>{section.rating}</h3>
        <h3 className="lead">{section.description}</h3>
        <p>{section.name}</p>
        </Container>
      </Carousel.Item>
)}
    </Carousel>






      {/* <h2 class="gellatio-font" >Reviews</h2>
    <Container className="ReviewsBack">
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 25,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography className="starRating">{steps[activeStep].rating}</Typography>
      </Paper>
      <Box className="textThroughout" sx={{ height: 300, maxWidth: 400, width: '100%', p: 2 }}>
        {steps[activeStep].description}
      </Box>
      <Box className="ReviewNames" sx={{ height: 70, maxWidth: 50, width: '100%', p: 2 }}>
        {steps[activeStep].name}
      </Box>
      <MobileStepper
        variant="text"
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    
    </Container> */}
    </section>
  );
}