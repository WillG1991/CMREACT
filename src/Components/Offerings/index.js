import React from "react";
import { Container } from "@mui/system";
import { Card } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import OfferOneImage from "../../assets/images/OfferingOneImage.png"
import OfferTwoImage from "../../assets/images/OfferingTwoImage.png"
import OfferThreeImage from "../../assets/images/OfferingThreeImage.png"
import OfferFourImage from "../../assets/images/OfferingFourImage.png"
import OfferingButton from "../../assets/images/OfferingButton.png"

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));



function Offerings() {
  const OfferingSections = [
    {
      id: 1,
      icon: OfferOneImage,
      name: "Reiki Soul Healing",
      length: "Session: 90 Minutes.",
      price: "Investment: $150.00",
      description: "Discover the magnificent power of Reiki. Tools used during each session include essential oils, singing bowls, sage, and meditation to help connect yourself back into your body. We begin each session with soul talk, which is where I receive intuitive guidance on specific topics for your own personal growth (may include: family, relationships, work, lifestyle, nutrition, etc.)",
      button: "https://calendly.com/christinaserafina/90min?back=1&month=2022-09"
    },
    {
      id: 2,
      icon: OfferTwoImage,
      name: "Reiki + Hypnotic Reprogramming",
      length: "Session: 90 Minutes.",
      price: "Investment: $150.00",
      description: "These two healing modalities combined produce a powerful reset to the mind and body. You are limitless and abundant, but only to the extent of your belief system. Allow the power of reiki and hypnosis to bring a renewed sense of who you truly are. *Hypnotic suggestions are client specific. *   You will receive a personal hypnotic script that will be tailored to your needs. In addition, you will receive a separate recording that can be listened to before sleep. Example of topics - Self Esteem + Confidence, Healthier Eating Habits, Moving through a breakup, New employment confidence, Pregnancy Journey, IVF Journey, New Motherhood Journey, Relationships, and so much more.",
      button: "https://calendly.com/christinaserafina/reiki-hypnotic-reprogramming?back=1&month=2022-10"
    },
    {
      id: 3,
      icon: OfferThreeImage,
      name: "Intuitive Tune-up Calls",
      length: "Session: 60 Minutes.",
      price: "Investment: $85.00",
      description: "These 1-hour calls are perfect for anyone looking to receive intuitive advice or motivation. Whether it be a struggling thought, difficult situation, or needing sound advice on how to move forward, allow us to work with you through it. Receive intuitive advice and guidance on how to handle it from your higher self-perspective. Allow us to assist you in accessing your truth.",
      button: "https://calendly.com/christinaserafina/60min?back=1&month=2022-10"
    },
    {
      id: 4,
      icon: OfferFourImage,
      name: "Homecoming",
      length: "Session: 3-Month Mentorship Program.",
      price: "Investment: $1200.00",
      description: "If you are looking for your life to transform, it begins right here with your commitment. In this 3-month transformation program, we’ll dive deep into the areas of your life that are holding you back from creating a life full of abundance. This program is for those truly committed to shifting their mentality and creating a new reality. What you can expect from this program:",
      button: "https://calendly.com/christinaserafina/3-month-mentorship-program-the-homecoming?back=1&month=2022-10"

    }
  ]


  return (

    <section id="Offerings">
      <Container>
        <h2 class="gellatio-font" >Offerings</h2>

        {OfferingSections.map(offer =>
          <Card  sx={{ borderRadius: '16px' }} className="OfferingCard">
            <img class="OfferingIcon" src={offer.icon} alt="offering icon"></img>
            <h4 className="OfferName">{offer.name}</h4>
            <h6 className="OfferLength">{offer.length}</h6>
            <h6 className="OfferPrice">{offer.price}</h6>
            <p className="OfferingDescriptions textThroughout">{offer.description}</p>
            {offer.name === "Homecoming"
              ? (
                <div>
                  <h5 class="lead">In person meeting or virtual</h5>
                  <h5 class="lead">Includes:</h5>
                   <Box sx={{ flexGrow: 1 }}>
      <Grid className="homecomingGrid" container spacing={2}>
        <Grid  item xs={4}>
          <Item className="offeringItem">(2) in-person/virtual sessions per month</Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="offeringItem">(2) 30 minute calls per month</Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="offeringItem">Reiki sessions - Clearing old patterns, bringing in new light</Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="offeringItem">Mindset Reset – Completely shift the way you think, feel, and see about your reality</Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="offeringItem">Learn new tools to live your most authentic YOU</Item>
        </Grid>
        <Grid item xs={4}>
          <Item className="offeringItem">RealYOU group gatherings - Seat reserved</Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="offeringItem">Accountability Goals - Together we will distinguish goals that will elevate your daily mood/energy to create the life you’ve always desired.</Item>
        </Grid>
        <Grid item xs={6}>
          <Item className="offeringItem">Hypnotic reprogramming - Personalized scripts to listen to each night before bed or in a relaxing state</Item>
        </Grid>
      </Grid>
    </Box>
                </div>
              )
              : null}
            <a target="_blank" rel="noreferrer" className="OfferingATag" href={offer.button} >
              <img className="ScheduleButton" src={OfferingButton} alt="Schedule Button" />
              <p className="OfferSchedule">Schedule</p>
            </a>
          </Card>
        )}
      </Container>
    </section>



  );
}

export default Offerings;