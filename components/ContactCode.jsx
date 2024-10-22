import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'website',
    link: 'abiyyirahinda.com',
    href: 'https://abiyyirahinda.com',
  },
  {
    social: 'email',
    link: 'muhammadabiyyi73@gmail.com',
    href: 'mailto:muhammadabiyyi73@gmail.com',
  },
  {
    social: 'github',
    link: 'abiyyirahinda',
    href: 'https://github.com/abiyyirahinda',
  },
  {
    social: 'linkedin',
    link: 'rahinda',
    href: 'https://www.linkedin.com/in/rahinda/',
  },
  // {
  //   social: 'instagram',
  //   link: 'iamnitinr',
  //   href: 'https://www.instagram.com/iamnitinr',
  // },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
