import Head from 'next/head';
import ContainerLayout from '../components/ContainerLayout';

export default function Home() {

  return (
    <div className="m-auto w-full text-gray-700 antialiased">
      <Head>
        <title>首页</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, viewport-fit=cover"
        />
      </Head>

      <ContainerLayout />
    </div>
  );
}
