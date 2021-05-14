import React, { Component } from "react";
import Steven from 'url:./img/Steven.png';
import Damita from 'url:./img/Damita.png';
import Phung from 'url:./img/Phung.png';
import Chloe from 'url:./img/Chloe.png';
import StoryIntro from "url:./img/story-intro.png"
import StoryHistory from "url:./img/story-history.png"
import StoryGrowth from "url:./img/story-growth.png"
import StoryCurrent from "url:./img/story-current.png"
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
          <div className="container extraBottomPadding">
            <div className="row">
              <div className="col">
                <h3 className="centerText">Challenges</h3>
                  <ul>
                    <li>Tourism can bring economic benefits to Chinatowns but can also amplify gentrification.</li>
                    <li>Gentrification can potentially alter the culture of the area which leads to a loss of familiarity to the locals.</li>
                  </ul>
              </div>
              <div className="col">
                <h3 className="centerText">Outcome</h3>
                <ul>
                  <li>
                    Wander is a website that is developed to amplify the stories of food businesses that reside in the Chinatown-International District.
                  </li>
                  <li>
                    Business owners have a platform to tell stories behind their favorite dishes
                  </li>
                  <li>
                    Users can learn about the communities that make up the Chinatown-International District.
                  </li>
                </ul>
              </div>
              <div className="col">
              <h3 className="centerText">Impact</h3>
                <p className="impactStarter">
                  We hope our project inspires others to...
                </p>
                <ul>
                  <li>
                  make a conscious effort to respectfully engage with the business
                  </li>
                  <li>
                  learn more about the history of the Chinatown-International District
                  </li>
                  <li>
                  preserve and protect this community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
    )
  }

  createKeyFeatures() {
    return (
      <section>
        <h2 className="centerText">Key Features</h2>
        <div className="container">
          <div className="row">
            <div className="col extraBottomPadding">
              <img className="imageShadow" src={StoryIntro}/>
            </div>
            <div className="col align-self-center">
              <h3>Engage with dishes recommended by the owners themselves</h3>
            </div>
          </div>
          <div className="row">
            <div className="col extraBottomPadding">
              <img className="imageShadow" src={StoryHistory}/>
            </div>
            <div className="col align-self-center">
              <h3>Learn about the origins of your favorite restaurants</h3>
            </div>
          </div>
          <div className="row">
            <div className="col extraBottomPadding">
              <img className="imageShadow" src={StoryGrowth}/>
            </div>
            <div className="col align-self-center">
              <h3>Connect with our interviews to see how each restaurant has grown into what it is today</h3>
            </div>
          </div>
          <div className="row">
            <div className="col align-self-center">
              <img className="imageShadow" src={StoryCurrent}/>
            </div>
            <div className="col align-self-center">
              <h3>Stay up to date with how the businesses have adapted to the pandmemic and their future plans</h3>
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
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gW6HwbPqcyc" title="YouTube video player"
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
          <ul className="centerContent extraBottomPadding">
            <li>
              This project is developed for the University of Washington Information School Capstone for Winter/Spring of 2021
            </li>
            <li>
              This project is currently being open sourced and can be found <a href="https://github.com/stluongXD/Wander-A-Guide-to-Seattle" target = "_blank">here</a>
            </li>
            <li>
              Documentation as to how to use our code is <a href = "https://docs.google.com/document/d/1aCO4Ft1RI6Dss-IHPh3ZnHBF8wAblZy-ODEvG5aslS0/edit?usp=sharing" target = "_blank">here</a>
            </li>
            <li>
              If you are in need of any additional information related to this project, feel free to email anyone from our team and we will get back to you
            </li>
          </ul>
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

