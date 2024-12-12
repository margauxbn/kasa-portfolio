import Banner from "../components/banner/Banner.tsx";
import Collapse from "../components/collapse/Collapse.tsx";
import "./about.scss"

function About() {
  
  return (
    <>
        <div className="about-banner">
            <Banner imageUrl="/public/about_banner.jpg" bannerHome="" />
        </div>
        <div className="about-collapse">
            <Collapse titleCollapse="Fiabilité" paragraphCollapse="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."/>
            <Collapse titleCollapse="Respect" paragraphCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse titleCollapse="Service" paragraphCollapse="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."/>
            <Collapse titleCollapse="Sécurité" paragraphCollapse="La sécurité est la propriété de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."/>
        </div>
    </> 
  );
}

export default About