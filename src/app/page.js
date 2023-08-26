import Banner from '@/Components/Banner'
import Dinning from '@/Components/Dinning'
import Explore from '@/Components/Explore'
import Fountain from '@/Components/Fountain'
import Navbar from '@/Components/Navbar/Navbar'
import Resort from '@/Components/Resort'

export default function Home() {
  return (
    <main className="">
      <Navbar></Navbar>
      <Banner></Banner>
      <Resort></Resort>
      <Fountain></Fountain>
      <Dinning></Dinning>
      <Explore></Explore>


    </main>
  )
}
