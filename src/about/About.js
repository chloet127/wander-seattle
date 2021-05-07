import React, { Component } from "react";
import Steven from 'url:./img/Steven.png';
import Damita from 'url:./img/Damita.png';
import Phung from 'url:./img/Phung.png';
import Chloe from 'url:./img/Chloe.png';
import Restaurant from "url:./img/restaurant.png"
import Pho from "url:./img/pho.png"
import Boba from "url:./img/boba.png"
import './About.css';
import CREATORS_DATA from "./creators-info.json";
import Creator from './Creator';

export default class About extends Component {
  render() {
    return (
      <div>
        {this.createHeaderImage()}
        <div className="tanBackground">
          {this.createAboutText()}
          {this.createKeyFeatures()}
          {this.createPresentation()}
          {this.createCreators()}
        </div>
        {this.createProjectStatus()}
      </div>
    );
  }

  createHeaderImage() {
    return (
      <div id="aboutBackgroundDiv">
          <div id="aboutBottomLeft">
            <h1>
              Wander: A Guide to Exploring Seattle
            </h1>
          </div>
        </div>
    )
  }

  createAboutText() {
    return (
      <section className="aboutText">
          <h2 className="centerText">About Our Project</h2>
          <p>
            Wander: A Guide to Exploring Seattle is a capstone project from the University of Washington developed to
            use the power of food to tell the story around Seattle’s Chinatown-International District. Food holds entire
            legacies that transcend languages and oceans, bringing comfort from one family table to another. Seattle and
            the CID community is ever-changing, but generations of families have established themselves in the CID and
            continue to share their story with every delicious bite. Others are at the beginning of their journey, offering
            something new and building a relationship with the city through food. Our goal for this project is to promote
            Seattle’s Chinatown-International District and amplify the voices of local businesses, giving them a chance to
            tell their stories about their food.
            <br />
            <br />
            As land prices rise and gentrification becomes more prominent in areas around Seattle, locals are more likely
            to be priced out of the communities that have supported them for many years. We hope that users of this guide
            will be inspired to make a conscious effort to learn more about the history of the Chinatown-International
            District in an effort to preserve and protect our community. Explore now to learn more about your favorite
            businesses in the area or discover a new restaurant to fall in love with.
          </p>
        </section>
    )
  }

  createKeyFeatures() {
    return (
      <section>
        <h2 className="centerText">Key Features</h2>
        <div className="container extraBottomPadding">
          <div className="row">
            <div className="col-3">
              <img src = {Restaurant}/>
            </div>
            <div className="col align-self-center">
              <p className="featureText">
                Disover local favorite restaurants in the Chinatown-International district.
                The Chinatown-International district is a diverse area that offers various dishes from all across Asia.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
               <img src = {Boba}/>
            </div>
            <div className="col align-self-center">
             <p className="featureText">
               Connect with the remakable stories of each businesses.
               Learn through our interviews with the owners of how their businesses started and grew.
            </p>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src = {Pho}/>
            </div>
            <div className="col align-self-center">
              <p className="featureText">
                Eat amazing food from hidden gems. As you learn more about each businesses, get recommendations of what you should try directly from the owners themselves.
                These recommendations not only informs you of what to order, but also highlights the greater history behind the dish.
              </p>
            </div>
          </div>
        </div>
        <hr className="dashed"/>
      </section>
    )
  }

  createPresentation() {
    return (
      <section>
          <h2 className="centerText">Presentation Video</h2>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/bQQI7UkbGs4" title="YouTube video player"
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen allow="fullscreen">
          </iframe>
          <hr className="dashed"/>
        </section>
    )
  }

  createCreators() {
    return (
      <section>
          <h2 className = "centerText">Meet the Creators</h2>
          <div id="creatorsDetails">
            {this.loadCreators()}
          </div>
        </section>
    )
  }

  createProjectStatus() {
    return (
      <section className = "aboutText">
          <h2 className="centerText">Project Status</h2>
          <p>
            This project is developed for the University of Washington Information School Capstone for Winter/Spring of 2021. The project is currently being
            open sourced so that anyone who wishes to develop on this project further can do so. Developers can find our project code <a href="https://github.com/stluongXD/Wander-A-Guide-to-Seattle" target = "_blank">here</a>.
            <br/>
            <br/>
            Documentation as to how to use our files are <a href = "https://docs.google.com/document/d/1aCO4Ft1RI6Dss-IHPh3ZnHBF8wAblZy-ODEvG5aslS0/edit?usp=sharing" target = "_blank">here</a>.
            Docuementation includes how to set up a new Wordpress site with our files, using Wordpress to create a new story page, and information about the businesses we interviewed from.
            <br/>
            <br/>
            If you are in need of any additional information related to this project, feel free to email anyone from our team and we will get back to you.
          </p>
        </section>
    )
  }


  loadCreators() {
    let imgs = [Steven, Damita, Phung, Chloe]
    let result = CREATORS_DATA.map((creator, index) => {
      return <Creator name={creator.name} email={creator.email} role={creator.role} github={creator.github} img={imgs[index]} key={creator.name} />
    })
    return result
  }

}

