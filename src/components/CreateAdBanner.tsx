import { MagnifyingGlassPlus } from "phosphor-react"
import * as Dialog from '@radix-ui/react-dialog'

export default function CreateAdBanner() {
    return (
      <div className="pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden">
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="text-2xl font-black text-white block">Não encontrou seu duo?</strong>
            <span className="text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <Dialog.Trigger className='px-4 py-3 flex items-center gap-x-2 bg-violet-500 text-white rounded-md hover:bg-violet-700 transition duration-500'>
            <MagnifyingGlassPlus size={24} />
            <p>Publicar anúncio</p>
          </Dialog.Trigger>
        </div>
      </div>
    )
}