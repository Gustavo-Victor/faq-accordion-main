import Attribution from "./components/Attribution";
import Header from "./components/Header";
import Faq from "./components/Faq";
import Wrapper from "./components/Wrapper";

export default function App() {

  return (
    <>
      <Header/>
      <Wrapper>
        <Faq />
        <Attribution />
      </Wrapper>
    </>
  )
}

