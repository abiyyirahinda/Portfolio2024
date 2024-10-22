import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Muhammad Abiyyi Rahinda is an avid full stack web developer building websites and applications you'd love to use"
      />
      <meta
        name="keywords"
        content="Muhammad Abiyyi Rahinda, Abik, ranganath, web developer portfolio, Abik web developer, Abik developer, mern stack, Muhammad Abiyyi Rahinda portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Muhammad Abiyyi Rahinda's Portfolio" />
      <meta
        property="og:description"
        content="A full-stack developer building websites that you'd like to use."
      />
      {/* <meta property="og:image" content="https://imgur.com/4zi5KkQ.png" /> */}
      <meta property="og:url" content="https://abiyyirahinda.com" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Muhammad Abiyyi Rahinda',
};
