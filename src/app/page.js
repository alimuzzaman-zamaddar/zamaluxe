import Banner from '@/Components/Banner'
import CardSection from '@/Components/CardSection'
import Dessert from '@/Components/Dessert'
import Dinning from '@/Components/Dinning'
import Entertainment from '@/Components/Entertainment'
import Explore from '@/Components/Explore'
import Footer from '@/Components/Footer'
import Fountain from '@/Components/Fountain'
import Gallery from '@/Components/Gallery'
import Navbar from '@/Components/Navbar/Navbar'
import Resort from '@/Components/Resort'

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <CardSection></CardSection>
      <Entertainment></Entertainment>
      <Resort></Resort>
      <Fountain></Fountain>
      <Dinning></Dinning>
      <Explore></Explore>
      <Gallery></Gallery>
      <Dessert></Dessert>
      <Footer></Footer>

    </main>
  )
}
