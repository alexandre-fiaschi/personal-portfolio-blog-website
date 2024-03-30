'use client'

//without linkcard

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
	if (!projectList){
		return
	}

	return (

		<>
		<h1>Projects</h1>
		<div className="mx-auto grid grid-cols-1 gap-4 md:grid-cols-3 lg:mx-0">
			<div className="grid grid-cols-1 gap-4">
			{projectList.filter((_:any, i:number) => i%3===0).map((project:any) => (
				<div key={project.node.id}>
					<Link href={project.node.link}>
						{project.node.title}
					</Link>
				</div>
			))}
			</div>
			<div className="grid grid-cols-1 gap-4">
			{projectList.filter((_:any, i:number) => i%3===1).map((project:any) => (
				<div key={project.node.id}>
					<Link href={project.node.link}>
						{project.node.title}
					</Link>
				</div>
			))}
			</div>
			<div className="grid grid-cols-1 gap-4">
			{projectList.filter((_:any, i:number) => i%3===2).map((project:any) => (
				<div key={project.node.id}>
					<Link href={project.node.link}>
						{project.node.title}
					</Link>
				</div>
			))}
			</div>
		</div>
		</>

	)
}
