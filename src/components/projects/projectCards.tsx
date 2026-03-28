import Image from 'next/image';
import GithubIconBetter from '../icons/githubIconReal';
import LinkIcon from '../icons/linkIcons';

interface ProjectCardProps {
  card: any;
  language: string;
  handleRedirect: (link: string) => () => void;
  t: any;
}

const ProjectCard = ({ card, language, handleRedirect, t }: ProjectCardProps) => {
  return (
    <div
      className="mx-5 my-5 md:my-0 flex flex-col transition-all duration-100 ease-in-out cursor-pointer rounded-[30px] hover:scale-[1.02] hover:shadow-lg hover:shadow-white/40"
      key={card.key}
      onClick={handleRedirect(card.cardLink)}
    >
      <div className="h-fit">
        <Image
          src={card.src}
          alt={card.alt}
          width={375}
          height={200}
          className="rounded-t-[30px] h-fit w-fit object-cover"
        />
      </div>
      <div className="lg:w-[385px] lg:h-full flex flex-col justify-between p-5 bg-[#363636] rounded-b-[30px]">
        <div>
          <h2 className=" text-3xl font-semibold leading-6 mb-3 text-center">{card.title}</h2>
          <p className="text-center mb-3 text-md font-light leading-6">{t(card.resume)}</p>
        </div>

        <div>
          <p className="text-center text-sm">Stack: {card.stack}</p>
          <div className={`${language === 'en' ? 'lg:mt-6 md:mt-12 mt-2' : 'lg:mt-3.5'}`}>
            <div className="flex justify-center">
              {card.githubLink !== '' && (
                <div className="flex mx-2">
                  <a href={card.githubLink} className="flex" target="_blank">
                    <GithubIconBetter width="25" height="25" />
                    <p className="text-center text-sm mx-2 my-auto hover:underline">
                      {t('translation.projects.viewCode')}
                    </p>
                  </a>
                </div>
              )}

              <div className="flex mx-2">
                <a href={card.previewLink} className="flex my-auto" target="_blank">
                  <LinkIcon width="35" height="35" viewBox="0 130 960 960" className="my-auto" />
                  <p className="text-center text-sm mx-2 my-auto hover:underline">
                    {t('translation.projects.livePreview')}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
