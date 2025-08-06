import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="FMCK Canteen App Documentation - Everything you need to know"
      style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}
    >
      <div className={styles.main}>
        <div className={styles.contentContainer}>
          <div className={styles.textContent}>
            <h1>Welcome to FMCK Canteen App Documentation Site</h1>
            <b><i>Everything you need to know about this application all in one place!</i></b>
            <Link className={styles.buttonLink} to={'/docs/Overview'}>
              Get Started
            </Link>
          </div>
          <div className={styles.imageContainer}>
            <img 
              src="img/landingImage.jpg" 
              alt="FMCK Canteen App"
              className={styles.heroImage}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}

// import Link from '@docusaurus/Link';
// import Layout from '@theme/Layout';
// import styles from './index.module.css';


// export default function Home() {
//   return (
//     <Layout style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
//       <div className={styles.main}>
//         <h1>Welcome to FMCK Canteen App Documentation Site</h1>
//         <b><i>Everything you need to know about this application all in one place!</i></b>
//         <Link className={styles.buttonLink} to={'/docs/Overview'}>Read the Docs</Link>
//       </div>
//     </Layout>
//   );
// }
