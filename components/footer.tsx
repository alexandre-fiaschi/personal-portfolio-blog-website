import Link from "next/link"


export default function Footer() {
	return (
		<div className="py-10 text-center text-sm">
			<hr />
			<p>
				{" "}
				<Link href="https://www.linkedin.com/in/alexandre-fiaschi-10af/"
				target="_blank"
				className="underline-offset-2
				hover:text-emerald-500
				hover:underline">
					Alex
				</Link>
				{" "}{/* {" "}Fiaschi */}
			</p>
		</div>
	)
}
