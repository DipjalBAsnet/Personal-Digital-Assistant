import "bulma/css/bulma.css";
import ProfileCard from "./profile-card";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                myImage={AlexaImage}
                description="Alexa was created by Amazon that helps to buy things"
              />
            </div>

            <div className="column is-3">
              <ProfileCard
                title="Cortana"
                handle="@cortana32"
                myImage={CortanaImage}
                description="Cortana was made by Microsoft, who khnos what it does?"
              />
            </div>

            <div className="column is-3">
              <ProfileCard
                title="Siri"
                handle="@siri01"
                myImage={SiriImage}
                description="siri Was made by apple and is being phased out"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
export default App;
