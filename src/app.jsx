import ProfileCard from "./profile-card";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <h1>Personal Didital Assistants</h1>

      <ProfileCard title="Alexa" handle="@alexa99" myImage={AlexaImage} />
      <ProfileCard title="Cortana" handle="@cortana32" myImage={CortanaImage} />
      <ProfileCard title="Siri" handle="@siri01" myImage={SiriImage} />
    </div>
  );
}
export default App;
