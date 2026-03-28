import React, { useEffect, useState } from 'react';
import { Element } from 'react-scroll';
import { useTranslation } from 'react-i18next';
import { cards } from '@/lib/projects/projects';
import ProjectCard from './projects/projectCards';

export interface IProjects {
  selectedLanguage: string;
}

const Projects: React.FC<IProjects> = ({ selectedLanguage }) => {
  const [language, setLanguage] = useState(selectedLanguage);
  const { t } = useTranslation();

  useEffect(() => {
    setLanguage(selectedLanguage);
  }, [selectedLanguage]);

  const handleRedirect = (link: string) => () => window.open(link, '_blank');

  return (
    <div className="md:my-40 my-14">
      <Element name="projects">
        <h1 className="text-4xl font-bold leading-2 text-center my-5">
          {t('translation.projects.title')}
        </h1>
        <p className="text-2xl font-normal leading-2 text-center m-5 mb-10">
          {t('translation.projects.resume')}
        </p>

        <div className="md:flex md:flex-wrap lg:flex-wrap justify-center gap-5">
          {cards.map((card, index) => (
            <ProjectCard
              card={card}
              language={language}
              handleRedirect={handleRedirect}
              t={t}
              key={index}
            />
          ))}
        </div>
      </Element>
    </div>
  );
};

export default Projects;
