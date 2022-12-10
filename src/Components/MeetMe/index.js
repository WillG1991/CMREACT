import React from "react";
import ChristinaPicture from "../../assets/images/ChristinaPicture.png"
import Container from '@mui/material/Container';

function MeetMe() {


    const meetMeSections = [
        {
            id: 1,
            name: "FirstPara",
            description: " Welcome, I'm thrilled that you've found yourself here! Nothing is a coincidence, which means you were guided for a reason, and I'm honored to have you. My name is Christina, and this is my wild, crazy and beautiful “homecoming” story."
        },
        {
            id: 2,
            name: "SecondPara",
            description: " At the early age of 5, I was diagnosed with Juvenile Rheumatoid Arthritis. Being unaware at the time, this autoimmune disease was a precursor to a life of mystery and self-discovery, which ultimately became my greatest blessing. It took me on a journey to rediscover and reclaim my mind, body, and souls' essence that allowed me to connect with the earth's ancient knowledge. I believe everything we are meant to experience is just an opportunity to lead us back home to our most authentic self, our true self."
        },
        {
            id: 3,
            name: "ThirdPara",
            description: " 2012 was a pivotal year. It was the year I began to question everything about all things. Through this awakening, I discovered how much work needed to be done. I had to actively undo all the programming and limiting beliefs encoded within my mind, and even more within my body. This was just the beginning of my homecoming."
        },
        {
            id: 4,
            name: "FourthPara",
            description: " In 2018 I began my studies in hypnosis with the great Dolores Cannon, which provided me with an extensive background in Past-Life Hypnosis. This opened my eyes to an entirely different perspective regarding the way we think about ourselves and the impact it has on our past, present, and future. Understanding that every thought holds a specific energetic imprint, which then creates our reality, was truly fascinating. We can change our lives in an instance with this profound understanding."
        },
        {
            id: 5,
            name: "FifthPara",
            description: " I have been very fortunate to receive teachings, wisdom and guidance from world-renowned teachers who have taught me powerful healing modalities such as Past-life Hypnosis, Usui Reiki, channeling the Akashic Records, psychic/energetic healing techniques, Ho’oponopono and most importantly, reawakening and strengthening my own divine intuition."
        },
        {
            id: 6,
            name: "SixthPara",
            description: "The yearning in my soul is to bring awareness to the unbelievable power each of us holds from within. My mission is to assist you in your “homecoming” and to reawaken the authentic you."
        },
    ]


    return (
        
            <section id="MeetMe">
            <Container className="MeetMeBack">
                <h2 class="gellatio-font" >Meet Christina:</h2>
<img className="ChristinaPicture" src={ChristinaPicture} alt="mindfulness ascension emotional release body work holistic health "/>
{meetMeSections.map(offer =>
                  <h2 className="lead MeetMeParagraphs">{offer.description}</h2>
                )}
                </Container>
</section>
        
    );
}

export default MeetMe;