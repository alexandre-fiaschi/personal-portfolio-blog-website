'use client'

import { PageQuery } from "@/tina/__generated__/types"
import { tinaField, useTina } from "tinacms/dist/react"
import { TinaMarkdown } from "tinacms/dist/rich-text"
import { TextBox, TweetEmbed, PullQuote, VideoPlayer, CaptionedImage } from "../richText"


export function PageComponent(props:{
	data:PageQuery
	variables:{
		relativePath:string
	}
	query:string
}) {
	const { data } = useTina(props)
	const title = data.page.title
	const content = data.page.body


	return (
		<article>
			<h1 data-tina-field={tinaField(data.page, "title")}>
			{title}
			</h1>
			<section data-tina-field={tinaField(data.page, "body")}>
				<TinaMarkdown components={
					{TextBox,
					TweetEmbed,
					VideoPlayer,
					PullQuote,
					CaptionedImage
				}
				} content={content}/>
			</section>
		</article>

	)
}
