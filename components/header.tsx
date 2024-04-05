import Link from "next/link"
import { ThemeToggle } from "./themeToggle"
import {
  RxChatBubble,
  RxCodesandboxLogo,
  RxEnvelopeClosed,
  RxDividerVertical,
  RxHome,
  RxLinkedinLogo,
  RxPerson,
  RxFileText,
} from "react-icons/rx"

export default function Header() {
  return (
    <header className="sticky top-0 z-10 flex content-center items-center justify-between bg-background pb-7 pt-7 font-sans text-base opacity-95 dark:opacity-90">
      <div className="flex gap-4">
        <Link
          href="/"
          className="header-link hover:text-emerald-500 max-sm:hidden"
        >
          Home
        </Link>
        <Link href="/" className="header-link hover:text-emerald-500 sm:hidden">
          <RxHome />
        </Link>
        {/* <Link href="/posts" className="max-sm:hidden hover:text-emerald-500">Blog</Link>
				<Link href="/posts" className="sm:hidden hover:text-emerald-500"><RxChatBubble /></Link>
				<Link href="/projects" className="max-sm:hidden hover:text-emerald-500">Projects</Link>
				<Link href="/projects" className="sm:hidden hover:text-emerald-500"><RxCodesandboxLogo /></Link> */}
        <Link
          href="/about"
          className="header-link hover:text-emerald-500 max-sm:hidden"
        >
          About Me
        </Link>
        <Link
          href="/about"
          className="header-link hover:text-emerald-500 sm:hidden"
        >
          <RxPerson />
        </Link>
        <RxDividerVertical className="my-auto dark:text-gray-400" />
        <Link
          href="https://drive.google.com/file/d/1mqEgpWsCg-Vee9mJz-zkgB81NFKRszYT/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link hover:text-emerald-500 max-sm:hidden"
        >
          Download CV
        </Link>
        <Link
          href="https://drive.google.com/file/d/1mqEgpWsCg-Vee9mJz-zkgB81NFKRszYT/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link hover:text-emerald-500 sm:hidden"
        >
          <RxFileText />
        </Link>
      </div>
      <div className="flex justify-between gap-4">
        <Link
          href="mailto:alexandrefiaschi10@gmail.com?subject=Contact&body=Hello Alex,%0D%0A%0D%0AI'm contacting you because.."
          className="header-link hover:text-emerald-500"
        >
          <RxEnvelopeClosed />
        </Link>
        <Link
          href="https://www.linkedin.com/in/alexandre-fiaschi-10af/"
          target="_blank"
          rel="noopener noreferrer"
          className="header-link hover:text-emerald-500"
        >
          <RxLinkedinLogo />
        </Link>

        <RxDividerVertical className="dark:text-gray-400" />
        <ThemeToggle />
      </div>
    </header>
  )
}
