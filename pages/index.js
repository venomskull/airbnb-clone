import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer';
import Header from '../components/Header'
import LargeCard from '../components/LargeCard';
import MediumCard from '../components/MediumCard';
import SmallCard from '../components/SmallCard';

export default function Home({exploreData, cardsData}) {
  return (
    <div>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      {/* HEADER */}
      <Header />

      {/* BANNER */}
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        
        {/* SMALL CARDS */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item, key) => (
              <SmallCard key={key} img={item.img} location={item.location} distance={item.distance} />
            ))}
          </div>
        </section>

        {/* MEDIUM CARDS */}
        <section>
          <p className='text-4xl font-semibold py-8'>Live Anywhere</p>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3'>
            {cardsData.map(item => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        {/* LARGE CARD */}
        <LargeCard 
          img='https://wallpaperaccess.com/full/133822.jpg'
          title='The Greatest Outdoors'
          description='Wishlists created by Airbnb'
          buttonText='Get Inspired'
        />

      </main>

      {/* FOOTER */}
      <Footer />

    </div>
  )
}

export async function getServerSideProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp')
    .then(res => res.json());

  const cardsData = await fetch('https://links.papareact.com/zp1')
    .then(res => res.json());

    return {
      props: {
        exploreData,
        cardsData
      }
    }
}
