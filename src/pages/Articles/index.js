import React, { Suspense, Fragment } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import posts from 'posts';
import Post from 'pages/Post';
import Image from 'components/Image';
import './index.css';
import { useScrollRestore } from 'hooks';
import Section from 'components/Section';

const ArticlesPost = ({
  path,
  title,
  description,
  banner,
  bannerVideo,
  bannerPlaceholder,
  bannerAlt,
  date,
}) => {
  return (
    <article className="articles__post">
      <Link className="articles__post-content" to={`/articles${path}`}>
        <div className="articles__post-image-wrapper">
          <Image
            className="articles__post-image"
            srcSet={banner ? require(`posts/assets/${banner}`) : undefined}
            videoSrc={bannerVideo ? require(`posts/assets/${bannerVideo}`) : undefined}
            placeholder={require(`posts/assets/${bannerPlaceholder}`)}
            alt={bannerAlt}
          />
          <div className="articles__post-image-tag">K256</div>
        </div>
        <div className="articles__post-text">
          <span className="articles__post-date">
            {new Date(date).toLocaleDateString('default', {
              year: 'numeric',
              month: 'long',
            })}
          </span>
          <h2 className="articles__post-title">{title}</h2>
          <p className="articles__post-description">{description}</p>
        </div>
      </Link>
    </article>
  );
};

const Articles = () => {
  useScrollRestore();

  return (
    <div className="articles">
      <Helmet>
        <title>Articles | Cody Bennett</title>
        <meta
          name="description"
          content="A collection of technical design and development articles."
        />
      </Helmet>
      <Section className="articles__content">
        <div className="articles__column">
          {posts.map(({ path, ...post }, index) => (
            <Fragment>
              {index !== 0 && <hr className="articles__divider" />}
              <ArticlesPost key={path} path={path} {...post} />
            </Fragment>
          ))}
        </div>
      </Section>
    </div>
  );
};

const ArticlesRouter = () => {
  return (
    <Post>
      <Suspense fallback={Fragment}>
        <Switch>
          {posts.map(({ content: PostComp, path, ...rest }) => (
            <Route
              key={path}
              path={`/articles${path}`}
              render={() => <PostComp {...rest} />}
            />
          ))}
          <Route component={Articles} />
        </Switch>
      </Suspense>
    </Post>
  );
};

export default ArticlesRouter;
