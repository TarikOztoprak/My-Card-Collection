import './App.css';
import Card from "./Card.js";
import pic1 from "./card-images/firebeast.jpg"
import pic2 from "./card-images/waterbeast.jpg"
import pic3 from "./card-images/lightbeast.jpg"
import pic4 from "./card-images/shadowbeast.jpg"
import pic5 from "./card-images/rm.jpg"
import pic6 from "./card-images/wk.jpg"
import pic7 from "./card-images/dg.jpg"
import pic8 from "./card-images/ciri.jpg"
import pic9 from "./card-images/triss.jpg"
import pic10 from "./card-images/yennefer.jpg"
import React from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
function App() {
  return (
    <div className="Site">
      <hr/>
      <NavBar/>
      <hr/>
      <div className="App">
      <br/>
        <hr/>
        <h1 className="center">Example Cards</h1>
        <hr/>
      <Card 
      name="Fire Lord" 
      info="Lord of all creatures made of fire. It comes from the center of the fire. The most flaming creature." 
      damage="8" 
      health="8" 
      pic={pic1}
      element="f"
      ></Card>
      <Card 
      name="Sea Beast" 
      info="It comes from the depths of the sea. every living thing in the water obeys him." 
      damage="7" 
      health="9" 
      pic={pic2}
      element="w"
      ></Card>
      <Card 
      name="Twin Lightning" 
      info="These twin lightning bolts are the brightest thing you will ever see in your life and you cannot escape them." 
      damage="8" 
      health="8" 
      pic={pic3}
      element="l"
      ></Card>
      <Card 
      name="Blind Mutant" 
      info="Mutant monster from nothing. Shadows are his eyes. Escape from his darkness or die." 
      damage="9" 
      health="7" 
      element="s"
      pic={pic4}
      ></Card>

      <Card 
      name="Red Magician" 
      info="The Red Magician (Red mage) is the first of the sorcerer's obtainable Specialist Cards." 
      damage="6" 
      health="5" 
      element="f"
      pic={pic5}
      ></Card>
      <Card 
      name="Wild Keeper" 
      info="The Wild Keeper is the 4th of the Specialist Cards for archer. Wild Keeper use the power of nature and spirits." 
      damage="7" 
      health="6" 
      element="l"
      pic={pic6}
      ></Card>
      <Card 
      name="Dark Gunner" 
      info="The Dark Gunner is the Sorcerer's fourth of the obtainable Specialist Cards, which is obtained from the level 65+ specialist quest." 
      damage="8" 
      health="5" 
      element="s"
      pic={pic7}
      ></Card>
      <Card 
      name="Ciri" 
      info="Ciri is Geralt's adopted daughter, bound to his destiny by the Law of Surprise." 
      damage="9" 
      health="8" 
      element="l"
      pic={pic8}
      ></Card>

      <Card 
      name="Triss Merigold" 
      info="Triss Merigold of Maribor was a legendary Temerian sorceress of the 13th century." 
      damage="?" 
      health="?" 
      element="f"
      pic={pic9}
      ></Card>
      <Card 
      name="Yennefer" 
      info="Yennefer of Vengerberg, born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn." 
      damage="?" 
      health="?" 
      element="s"
      pic={pic10}
      ></Card>
      <Card 
      name="Yennefer" 
      info="Yennefer of Vengerberg, born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn." 
      damage="?" 
      health="?" 
      element="s"
      pic={pic10}
      ></Card>
      <Card 
      name="Yennefer" 
      info="Yennefer of Vengerberg, born on Belleteyn in 1173, was a sorceress who lived in Vengerberg, the capital city of Aedirn." 
      damage="?" 
      health="?" 
      element="s"
      pic={pic10}
      ></Card>
      </div>
      <hr/>
      <Footer/>
    </div>
  );
  
}

export default App;
