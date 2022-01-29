import CarForm from '../lib/CarForm'
import styles from '../styles/Home.module.css'
import Search from '../lib/search'

export default function Home() {
  return (
    <div>
        <Search/>
        <br/>
        <h1>CreateCar</h1>
        <CarForm/>


    </div>
  )
}
