import Link from "next/link";
import { ThemeToggle } from "./themeToggle";
import { RxChatBubble, RxCodesandboxLogo, RxDividerVertical, RxHome, RxLinkedinLogo, RxPerson, RxFileText } from "react-icons/rx";

export default function Header() {

	return (
		<header //className="mb-20 mt-16 flex content-center items-center justify-between font-sans text-base"
		//className="sticky top-0 z-10 mb-20 mt-16 flex content-center items-center justify-between font-sans text-base shadow-md bg-background"
		//className="sticky top-0 z-10 pt-20 mb-20 mt-16 flex content-center items-center justify-between font-sans text-base bg-background shadow-[0_4px_2px_-2px_rgba(0,0,0,0.25)]"
		//className="sticky top-0 z-10 pt-8 mb-8 mt-16 opacity-95 flex content-center items-center justify-between font-sans text-base bg-background"
		className="sticky top-0 z-10 pt-7 pb-7 flex content-center items-center justify-between font-sans text-base bg-background opacity-95 dark:opacity-90"
		>
			<div className="flex gap-4">
				<Link href="/" className="max-sm:hidden hover:text-emerald-500">Home</Link>
				<Link href="/" className="sm:hidden hover:text-emerald-500"><RxHome /></Link>
				{/* <Link href="/posts" className="max-sm:hidden hover:text-emerald-500">Blog</Link>
				<Link href="/posts" className="sm:hidden hover:text-emerald-500"><RxChatBubble /></Link>
				<Link href="/projects" className="max-sm:hidden hover:text-emerald-500">Projects</Link>
				<Link href="/projects" className="sm:hidden hover:text-emerald-500"><RxCodesandboxLogo /></Link> */}
				<Link href="/about" className="max-sm:hidden hover:text-emerald-500">About/Resume</Link>
				<Link href="/about" className="sm:hidden hover:text-emerald-500"><RxPerson /></Link>
				<RxDividerVertical className="my-auto dark:text-gray-400"/>
				<Link href="https://drive.google.com/file/d/1mqEgpWsCg-Vee9mJz-zkgB81NFKRszYT/view?usp=drive_link" target = "_blank" rel = "noopener noreferrer" className="max-sm:hidden hover:text-emerald-500">Download CV</Link>
				<Link href="https://drive.google.com/file/d/1mqEgpWsCg-Vee9mJz-zkgB81NFKRszYT/view?usp=drive_link" target = "_blank" rel = "noopener noreferrer" className="sm:hidden hover:text-emerald-500"><RxFileText/></Link>
			</div>
			<div className="flex justify-between gap-4">
				<Link href="https://www.linkedin.com/in/alexandre-fiaschi-10af/" className="hover:text-emerald-500">
					<RxLinkedinLogo/>
				</Link>

				<RxDividerVertical className="dark:text-gray-400" />
				<ThemeToggle />
			</div>
		</header>
	)
}
