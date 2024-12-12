import "../style.scss";
import Banner from "../components/banner/Banner.tsx";
import ApartmentContainer from "../components/apartmentContainer/ApartmentContainer.tsx";
import bannerImg from "../assets/banner_img.jpg"

function App() {
  
  return (
    <>
      <Banner imageUrl={bannerImg} bannerHome="Chez vous, partout et ailleurs" />
      <ApartmentContainer />
    </> 
  );
}

export default App
