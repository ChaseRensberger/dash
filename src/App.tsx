import type { ComponentType } from 'react'
import { Button } from './components/ui/button'
import { CloudIcon, FootballIcon, GithubLogoIcon, NewspaperIcon, NyTimesLogoIcon, StarIcon, YoutubeLogoIcon } from '@phosphor-icons/react'

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
	url: string
	icon: ComponentType<{ size?: number }>
}

const Panels: PanelData[] = [
	{
		url: "https://www.nytimes.com",
		icon: NyTimesLogoIcon,
	},
	{
		url: "https://news.ycombinator.com",
		icon: NewspaperIcon
	},
	{
		url: "https://www.youtube.com",
		icon: YoutubeLogoIcon
	},
	{
		url: "https://www.learnedleague.com",
		icon: StarIcon
	},
	{
		url: "https://www.github.com",
		icon: GithubLogoIcon
	},
	{
		url: "https://www.icloud.com/",
		icon: CloudIcon
	},
	{
		url: "https://plaintextsports.com/",
		icon: FootballIcon
	}
]

function Panel({ panelData }: { panelData: PanelData }) {
	return (
		<Button variant="default" className="h-24 w-24 flex items-center justify-center" asChild>
			<a href={panelData.url} target="_blank" rel="noopener noreferrer">
				<panelData.icon size={32} />
			</a>
		</Button>
	)
}

export default function App() {
	const greeting = getGreeting()
	return (
		<main className="min-h-screen p-8">
			<h1 className="text-center text-2xl font-semibold">{greeting}, Chase.</h1>
			<div className="flex justify-center">
				<div className="grid grid-cols-4 gap-4 py-32">
					{Panels.map((panelData) => (
						<Panel panelData={panelData} key={panelData.url} />
					))}
				</div>
			</div>
		</main>
	)
}
