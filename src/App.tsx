import { useMemo, type ComponentType } from 'react'
import { Button } from './components/ui/button'
import { CloudIcon, GithubLogoIcon, NewspaperIcon, NyTimesLogoIcon, StarIcon, YoutubeLogoIcon } from '@phosphor-icons/react'

function getGreeting(): string {
	const hour = new Date().getHours()

	if (hour >= 5 && hour < 12) {
		return 'Good morning'
	} else if (hour >= 12 && hour < 17) {
		return 'Good afternoon'
	} else if (hour >= 17 && hour < 21) {
		return 'Good evening'
	} else {
		return 'Good night'
	}
}

interface PanelData {
	Url: string
	Icon: ComponentType<any>
}

const Panels: PanelData[] = [
	{
		Url: "https://www.nytimes.com",
		Icon: NyTimesLogoIcon,
	},
	{
		Url: "https://news.ycombinator.com",
		Icon: NewspaperIcon
	},
	{
		Url: "https://www.youtube.com",
		Icon: YoutubeLogoIcon
	},
	{
		Url: "https://www.learnedleague.com",
		Icon: StarIcon
	},
	{
		Url: "https://www.github.com",
		Icon: GithubLogoIcon
	},
	{
		Url: "https://www.icloud.com/",
		Icon: CloudIcon
	}
]

function Panel({ panelData }: { panelData: PanelData }) {
	return (
		<Button variant="default" className="h-24 w-24 flex items-center justify-center" asChild>
			<a href={panelData.Url} target="_blank" rel="noopener noreferrer">
				<panelData.Icon size={32} />
			</a>
		</Button>
	)
}

export default function App() {
	const greeting = useMemo(() => getGreeting(), [])
	return (
		<main className="min-h-screen p-8">
			<h1 className="text-center text-2xl font-semibold">{greeting}, Chase.</h1>
			<div className='grid grid-cols-[repeat(auto-fit,8rem)] gap-4 py-32'>
				{Panels.map((panelData) => {
					return (
						<Panel panelData={panelData} key={panelData.Url} />
					)
				})}
			</div>
		</main >
	)
}


