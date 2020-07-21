import React, { lazy, useMemo, Suspense, Fragment } from 'react';
import { Helmet } from 'react-helmet-async';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer, ProjectBackground, ProjectHeader, ProjectSection,
  ProjectSectionContent, ProjectImage, ProjectSectionColumns, ProjectSectionHeading,
  ProjectSectionText, ProjectTextRow
} from 'components/ProjectLayout';
import { media } from 'utils/style';
import prerender from 'utils/prerender';
import mystgangBackground from 'assets/mystgang-background.jpg';
import mystgangBackgroundLarge from 'assets/mystgang-background-large.jpg';
import mystgangBackgroundPlaceholder from 'assets/mystgang-background-placeholder.jpg';
import mystgang from 'assets/mystgang.jpg';
import mystgangLarge from 'assets/mystgang-large.jpg';
import mystgangPlaceholder from 'assets/mystgang-placeholder.jpg';
import mystgangBranding from 'assets/mystgang-branding.png';
import mystgangBrandingLarge from 'assets/mystgang-branding-large.png';
import mystgangBrandingPlaceholder from 'assets/mystgang-branding-placeholder.png';
import { ReactComponent as MystGangLogo } from 'assets/mystgang-logo.svg';
import mystgangSlidePlaceholder from 'assets/mystgang-slide-placeholder.jpg';
import mystgangSlide1 from 'assets/mystgang-slide-1.jpg';
import mystgangSlide1Large from 'assets/mystgang-slide-1-large.jpg';
import mystgangSlide2 from 'assets/mystgang-slide-2.jpg';
import mystgangSlide2Large from 'assets/mystgang-slide-2-large.jpg';
import mystgangSlide3 from 'assets/mystgang-slide-3.jpg';
import mystgangSlide3Large from 'assets/mystgang-slide-3-large.jpg';
import mystgangSlide4 from 'assets/mystgang-slide-4.jpg';
import mystgangSlide4Large from 'assets/mystgang-slide-4-large.jpg';
import mystgangSlide5 from 'assets/mystgang-slide-5.jpg';
import mystgangSlide5Large from 'assets/mystgang-slide-5-large.jpg';
import mystgangSlide6 from 'assets/mystgang-slide-6.jpg';
import mystgangSlide6Large from 'assets/mystgang-slide-6-large.jpg';
import mystgangSlide7 from 'assets/mystgang-slide-7.jpg';
import mystgangSlide7Large from 'assets/mystgang-slide-7-large.jpg';
import mystgangSlide8 from 'assets/mystgang-slide-8.jpg';
import mystgangSlide8Large from 'assets/mystgang-slide-8-large.jpg';
import './index.css';

const Carousel = lazy(() => import('components/Carousel'));

const title = 'MystGang 2019';
const description = 'A personal site for the gaming content creator known as MystGang. This project involved designing a hub to connect MystGang\'s content and social media.';
const roles = [
  'Branding & Identity',
  'UX and UI Design',
  'Front-end Development',
];

function MystGang() {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer>
        <ProjectBackground
          srcSet={`${mystgangBackground} 1000w, ${mystgangBackgroundLarge} 1920w`}
          placeholder={mystgangBackgroundPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://mystgang.ml"
          roles={roles}
        />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              reveal
              srcSet={`${mystgang} 800w, ${mystgangLarge} 1440w`}
              placeholder={mystgangPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="Landing screne of the MystGang website."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns>
            <ProjectTextRow>
              <ProjectSectionHeading>Building an Identity</ProjectSectionHeading>
              <ProjectSectionText>
                We started out laying the foundations of MystGang's brand.
              </ProjectSectionText>
              <ProjectSectionText>
                Subtle, muted colors, an elegant typeface complete with their signature color: brown.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${mystgangBranding} 400w, ${mystgangBrandingLarge} 898w`}
              placeholder={mystgangBrandingPlaceholder}
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 100vw, 50vw`}
              alt="MystGang's color palette, ranging from white to smooth, dark brown."
            />
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <div className="mystgang__logo-container">
              <MystGangLogo
                role="img"
                className="mystgang__logo"
                aria-label="MystGang's Monogram, featuring a custom designed letter M."
              />
            </div>
            <ProjectTextRow center>
              <ProjectSectionHeading>Identity Design</ProjectSectionHeading>
              <ProjectSectionText>
                The monogram uses custom typography and colors to get the right balance of weight and angularity.
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow center>
              <ProjectSectionHeading>The Website</ProjectSectionHeading>
            </ProjectTextRow>
          </ProjectSectionContent>
          <ProjectSectionContent className="mystgang__carousel">
            <Suspense fallback={null}>
              <Carousel
                placeholder={mystgangSlidePlaceholder}
                images={useMemo(() => [
                  {
                    src: mystgangSlide1,
                    srcSet: `${mystgangSlide1} 960w, ${mystgangSlide1Large} 1920w`,
                    alt: 'MystGang Splash Screen',
                  },
                  {
                    src: mystgangSlide2,
                    srcSet: `${mystgangSlide2} 960w, ${mystgangSlide2Large} 1920w`,
                    alt: 'MystGang Home Screen',
                  },
                  {
                    src: mystgangSlide3,
                    srcSet: `${mystgangSlide3} 960w, ${mystgangSlide3Large} 1920w`,
                    alt: 'MystGang Fullscreen Menu',
                  },
                  {
                    src: mystgangSlide4,
                    srcSet: `${mystgangSlide4} 960w, ${mystgangSlide4Large} 1920w`,
                    alt: 'MystGang Work Screen',
                  },
                  {
                    src: mystgangSlide5,
                    srcSet: `${mystgangSlide5} 960w, ${mystgangSlide5Large} 1920w`,
                    alt: 'MystGang About Self'
                  },
                  {
                    src: mystgangSlide6,
                    srcSet: `${mystgangSlide6} 960w, ${mystgangSlide6Large} 1920w`,
                    alt: 'MystGang About Work',
                  },
                  {
                    src: mystgangSlide7,
                    srcSet: `${mystgangSlide7} 960w, ${mystgangSlide7Large} 1920w`,
                    alt: 'MystGang About Socials',
                  },
                  {
                    src: mystgangSlide8,
                    srcSet: `${mystgangSlide8} 960w, ${mystgangSlide8Large} 1920w`,
                    alt: 'MystGang Contact Screen',
                  },
                ], [])}
                width={1920}
                height={1080}
              />
            </Suspense>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
}

export default MystGang;
