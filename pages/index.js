import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div>Home</div>
      {/* NExt.js Image component will perform some optimisation such as:
      -Blocking the space on the page for the image before it loads(to reduce shift of content)
      -Image optimisation(reduction in quality to deliver images faster) */}
      <Image
        src="/lazyegg.jpeg"
        alt="gudetama, the lazy egg laying down and saying 'the future... I can't'"
        width="937"
        height="528"
      />
      {/* You can also use the normal image tag if you do not want these optimisations */}
      <img
        src="/lazyegg.jpeg"
        alt="gudetama, the lazy egg laying down and saying 'the future... I can't'"
      />
      {/* <Image */}
    </>
  );
}
