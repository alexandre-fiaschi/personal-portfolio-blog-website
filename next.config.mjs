/** @type {import('next').NextConfig} */
const nextConfig = {
	async rewrites(){
		return [
			{
				source: "/admin",
				destination: "/admin/index.html"
			}
		]
	},
	cleanDistDir: true
};

export default nextConfig;
