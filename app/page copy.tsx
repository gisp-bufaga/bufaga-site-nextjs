export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-center font-mono text-sm">
        <h1 className="text-4xl font-bold text-center mb-8">
          Bufaga Marketing Site
        </h1>
        <p className="text-center text-gray-600 mb-4">
          Next.js 15 + Sanity CMS Setup
        </p>
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">✅ Next Steps:</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Setup Sanity project</li>
            <li>Configure environment variables</li>
            <li>Create landing page schemas</li>
            <li>Build marketing components</li>
            <li>Deploy to Vercel</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
