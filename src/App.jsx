import { useSelector } from "react-redux";
import "./App.css";
import Controls from "./Components/Controls";
import CounterContainer from "./Components/CounterContainer";
import DisplayCounter from "./Components/DisplayCounter";
import Header from "./Components/Header";
import PrivacyMessage from "./Components/PrivacyMessage";

function App() {
  const privacy = useSelector((store) => store.privacy);
  return (
    <>
      <CounterContainer>
        <Header />
        {privacy ? <PrivacyMessage /> : <DisplayCounter />}
        <Controls />
      </CounterContainer>
    </>
  );
}

export default App;
