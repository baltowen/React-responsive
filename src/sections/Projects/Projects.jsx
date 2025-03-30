import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={SnowKo}
          link="#"
          h3="SnowKo"
          p="Korean restaurant"
        />
        <ProjectCard
          src={Ternuritas}
          link="#"
          h3="Ternuritas"
          p="Baby shop store"
        />
        <ProjectCard
          src={Stunning Portugal}
          link="#"
          h3="Stunning Portugal"
          p="Culture, Nature and Gastronomy"
        />
        <ProjectCard
          src={Weather app}
          link="#"
          h3="Forecast"
          p="My personal forecasat"
        />
      </div>
    </section>
  );
}

export default Projects;
