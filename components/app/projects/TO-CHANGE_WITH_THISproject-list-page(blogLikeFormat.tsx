//this file should be the original to make it like original projects like blogs with single page for each project
'use client'

import { ProjectConnectionQuery } from "@/tina/__generated__/types"
import Link from "next/link"
import { useTina } from "tinacms/dist/react"

export function ProjectListPageComponent(props:{
	data: ProjectConnectionQuery
	variables:{
	}
	query:string
}) {
	const { data } = useTina(props)
	const projectList=data.projectConnection.edges

	return (

		<>
		<h1>
			Projects
		</h1>
		<div>
			{projectList?.map((project:any) => (
				<div key={project.node.id}>
					<Link href={`/projects/${project.node._sys.filename}`}>
						{project.node.title}
					</Link>
				</div>
			))}
		</div>
		</>

	)
}
