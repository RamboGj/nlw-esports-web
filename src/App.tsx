import './styles/main.css'
import logo from './assets/logo.svg'
import GameCard from './components/GameCard'
import CreateAdBanner from './components/CreateAdBanner'
import { useEffect, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import axios from 'axios'
import CreateAdModal from './components/CreateAdModal'

export interface GamesProps {
  id: string
  title: string
  bannerUrl: string
  _count: {
    ads: number
  }
}

export default function App() {
  const [games, setGames] = useState<GamesProps[]>([])

  useEffect(() => {
    axios('http://localhost:3333/games').then(response => {
      setGames(response.data)
    })
  }, [])

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">Seu <span className="bg-nlw-gradient bg-clip-text text-transparent">duo</span> está aqui.</h1>
      <div className='grid grid-cols-6 gap-x-6 mt-16'>
        {games.map((game) => {
          return (
            <GameCard
              key={game.id} 
              bannerUrl={game.bannerUrl} 
              title={game.title}
              adsCount={game._count.ads} 
            />
          )
        })}
      </div>
      <Dialog.Root>
        <CreateAdBanner />
        <CreateAdModal />
      </Dialog.Root>
    </div>
  )
}