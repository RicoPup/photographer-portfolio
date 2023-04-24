import Image from 'next/image'
import absoluteUrl from 'next-absolute-url'
import Nav from '@/components/nav'
import PhotoGrid from '../components/photo_grid';

export async function getServerSideProps(context) {
  const { origin } = absoluteUrl(context.req);
  const res = await fetch(`${origin}/api/photos`)
  const photos = await res.json()
  
  return {
    props: {
      photos,
    },
  }
}

export default function Home({ photos }) {
  return (
    <>
      <Nav />
      <div className="w-full h-screen bg-cover bg-center bg-repeat blur opacity-40 fixed" style={{ backgroundImage: "url('/assets/images/stars_background.webp')" }} />
      <PhotoGrid photos={photos} />
    </>
  );
}
