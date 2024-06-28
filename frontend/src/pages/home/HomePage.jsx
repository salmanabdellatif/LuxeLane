import MainLayout from '../../components/MainLayout'
import MainSlider from '../../components/MainSlider'
import LeftSidebar from '../../components/LeftSidebar'
import Todays from './container/Todays'
import Categories from './container/Categories'
import ThisMonth from './container/ThisMonth'
import OurProducts from './container/OurProducts'
import Featured from './container/Featured'
import Services from './container/Services'

const HomePage = ({ user, setUser, loading }) => {
  return loading ? (
    <h1>Loading...</h1>
  ) : (
    <MainLayout user={user} setUser={setUser}>
      <section className='container flex mx-auto'>
        <LeftSidebar />
        <MainSlider />
      </section>
      <Todays />
      <Categories />
      <ThisMonth />
      <OurProducts />
      <Featured />
      <Services />
    </MainLayout>
  )
}

export default HomePage
