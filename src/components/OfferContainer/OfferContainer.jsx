import React from "react";
import './OfferContainer.css';

import image1 from '../../assets/playlist/1.jpeg'
import image2 from '../../assets/playlist/2.png'
import image3 from '../../assets/playlist/3.jpeg'
import image4 from '../../assets/playlist/4.jpeg'
import image5 from '../../assets/playlist/5.jpeg'
import image6 from '../../assets/playlist/6.jpeg'
import image7 from '../../assets/playlist/7.jpeg'
import image8 from '../../assets/playlist/8.jpeg'
import image9 from '../../assets/playlist/9.jpeg'
import image10 from '../../assets/playlist/10.jpeg'
import image11 from '../../assets/playlist/11.jpeg'
import image12 from '../../assets/playlist/12.jpeg'
import image13 from '../../assets/playlist/13.jpeg'
import image14 from '../../assets/playlist/14.jpeg'
import image15 from '../../assets/playlist/15.jpeg'
import Card from "../Card/Card";


const OfferContainer = () => {
  return(
    <div className="offer__scroll-container">
      <div className="offer__list">
        <section className="offer__list-item">
          <Card playlist="Boas festas" image={image1} cardClass="card1" />
          <Card playlist="Feitos para você" image={image2} cardClass="card2" />
          <Card playlist="Lançamentos" image={image3} cardClass="card3" />
          <Card playlist="Creators" image={image4} cardClass="card4" />
          <Card playlist="Para treinar" image={image5} cardClass="card5" />
          <Card playlist="Podcasts" image={image6} cardClass="card6" />
          <Card playlist="Sertanejo" image={image7} cardClass="card7" />
          <Card playlist="Samba e pagode" image={image8} cardClass="card8" />
          <Card playlist="Funk" image={image9} cardClass="card9" />
          <Card playlist="MPB" image={image10} cardClass="card10" />
          <Card playlist="Rock" image={image11} cardClass="card11" />
          <Card playlist="Hip hop" image={image12} cardClass="card12" />
          <Card playlist="Indie" image={image13} cardClass="card13" />
          <Card playlist="Relax" image={image14} cardClass="card14" />
          <Card playlist="Música latina" image={image15} cardClass="card15" />
        </section>
      </div>
    </div>
  )
}

export default OfferContainer;