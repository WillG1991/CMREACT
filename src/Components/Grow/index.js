import React from "react";
import GrowImage from "../../assets/images/GrowImage.png"
import Fade from 'react-reveal/Fade';




function Grow() {

  const GrowSections = [
    {
      id: 1,
      name: "FirstPara",
      description: "Christina Serafina Healing welcomes you to experience the divinely beautiful energy of Reiki. This gentle, yet extremely powerful, modality allows you to explore your depths in a safe and sacred space. We provide services that encompass a full body experience to discover the inner core and truth of who you authentically are. With a combination of emotional energy healing, reiki and hypnosis - you will be able to release and reprogram deeply rooted beliefs so that you can access your divine power."
    },
    {
      id: 2,
      name: "SecondPara",
      description: " Our minds are miraculous machines protecting us from traumas and disturbances that occur during our lifetime. It's an extremely powerful function that lies within us. However, our body keeps the score. Years of emotional neglect within the body shows up as disease. It’s a dis-ease within our perfectly harmonic system - a system that is truly capable of healing itself when provided the necessary conditions to thrive."
    },
    {
      id: 3,
      name: "ThirdPara",
      description: "When our mind and body are fully integrated, we have this incredible untapped potential to create the life we’ve always desired. I hope you come along for the journey."
    },
  ]

  return (
  
      
      <section id="Grow">
        <Fade bottom>
        <img className="GrowIcon" src={GrowImage} alt="mindfulness ascension emotional release body work holistic health "/>
        </Fade>

        <h1 className="gellatio-font">Grow</h1>
        
        {GrowSections.map(section =>
                <Fade bottom>

          <h2 className="lead GrowParagraphs">{section.description}</h2>
          </Fade>
        )}
      </section>
      
      
    

  );
}

export default Grow;










