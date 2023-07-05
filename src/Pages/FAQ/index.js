import React from "react";
import Footer from "../../Components/Footer";
import FAQImage from "../../assets/images/FAQImage.png"
import "../../App.css"


const FAQSections = [

  {
    id: 2,
    question: "It's my first time - what should I expect?",
    answer: " Come with an open mind. Come with an understanding that a new mindset is required to make a change in your life to give you new results. I start every session with “soul therapy”; getting to know who you are, what you desire, things you’d like to improve one and we go from there. When we start the session, you will lay on a massage table for about 30-45 minutes while I gently work from the top of your head, down to your feet. I use hands-on Reiki, if you are uncomfortable with hands-on, please make me aware prior to session. During the session I am checking and clearing your Chakra system. Making sure your energy is flowing correctly before you leave. I use oils, sage, crystals and singing bowls."
  },
  {
    id: 3,
    question: "What does Reiki feel like?",
    answer: "Every Reiki experience is unique to the individual. For those who have never felt Reiki you may experience a deep sense of relaxation as you would during a massage. Others have felt a light wave of energy run through their arms, legs, head, etc. Some have felt hot sensations in areas that are being cleared, you may see colors, passed loved one, visits from their guides, etc. Sessions can go as deep as the individual is willing to go. Again, it all depends on the level in which you are ready to open to. I highly recommend having no expectation and allowing the energy to guide you. Often when we try to control outcomes it restricts the natural ability of flow."
  },
  {
    id: 4,
    question: "What do I wear?",
    answer: "Come in comfortable clothing. You are fully clothed for the entire session. I have a table warmer with blankets so if you get hot easily, please come in tank top, t- shirt, sports bra, etc. Whatever makes you most comfortable."
  },
  {
    id: 5,
    question: "What should I expect after a session?",
    answer: "Reiki is a kick starter, an activator. I say this because it will start to move things around for you. When you attune your energy to infinite possibilities you become a magnet for high vibrational surprises. Clients have experienced quicker manifestations, clarity to situations they’ve been stuck on, the energetic push to take care of something they’ve been pushing off, and an overall wellness shift within their mindset. In some instances, clients have experienced an emotional purge after a session which allows suppressed emotions that are trapped in the body to truly release."
  },
  {
    id: 6,
    question: "Cancellation Policy",
    answer: "Every client and every session is different. Please come open to all possibilities! Booking and Cancellation Policy: Please use the link under each session you are looking to schedule. To secure your appointment I require a $50 deposit via Zelle or Venmo for ALL sessions. A 48-hour notice of cancellation is required for your deposit to be refunded. Please text/call 732-887-2792. Thank you!"
  },
]



function FAQ() {
    return (
      <body className="FAQBody">
    <section id="FAQ">
        <img className="FAQIcon" src={FAQImage} alt="mindfulness ascension emotional release body work holistic health reiki new jersey"/>
        <h1 className="gellatio-font">Frequently Asked Questions</h1>
        <br></br>
        <br></br>
        {FAQSections.map(section =>
        <div>
          <h2 className="faqQuestions">{section.question}</h2>
          <h2 className="lead">{section.answer}</h2>
          </div>
        )}
      </section>
  <Footer></Footer>
  </body>
    );
  }
  
  export default FAQ;