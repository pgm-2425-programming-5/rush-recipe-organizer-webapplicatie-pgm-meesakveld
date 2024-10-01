import Button from "@/components/common/button";

export default function Home() {
	return (
		<div className="m-4">
			<div className="mx-auto p-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-lg shadow-lg text-center text-white">

				<h1 className="text-4xl font-bold mb-4">Organiseer je favoriete recepten!</h1>

				<p className="text-lg mb-6">Welkom bij je persoonlijke receptenorganizer.</p>

				<Button as="link" href="/recipes">Bekijk recepten</Button>

			</div>
		</div>
	);
}
