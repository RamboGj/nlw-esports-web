interface GameCardProps {
    bannerUrl: string
    title: string
    adsCount: number
}

export default function GameCard({ bannerUrl, title, adsCount }: GameCardProps) {
    return (
        <a className="relative rounded-lg overflow-hidden" href="">
          <img src={bannerUrl} alt="" />
          <div className="w-full pt-16 pb-4 px-4 bg-game-gradient absolute bottom-0 right-0 left-0">
            <strong className="text-white font-bold block">{title}</strong>
            <span className="text-zinc-300 text-sm block mt-1">{adsCount} anúncio(s)</span>
          </div>
        </a>
    )
}