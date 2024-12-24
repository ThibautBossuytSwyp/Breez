import { useState } from 'react'
import './App.css'
import breezLogo from './assets/breezlogo.svg'

function App() {
  const [caseDescription, setCaseDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      // TODO: Implement API call
      setResult('AI response will appear here')
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  const exampleText = `Class II division 2 with anterior crowding and narrow arches. Tooth number 32 shows severe mesiolingual rotation. Be as specific as possible when describing.`

  return (
    <div className="min-h-screen bg-white">
      <header className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center py-6">
            <div className="flex items-center gap-2">
              <img 
                  src={breezLogo} 
                  alt="Breez Logo" 
                  className="h-8 w-auto"
              />
              <h1 className="text-2xl font-semibold text-gray-900">Breez</h1>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="border-b border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 text-center">
            <h2 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
              Write perfect aligner plans
              <span className="block">fast, with AI</span>
            </h2>
          </div>
        </div>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            <div className="w-full max-w-2xl">
              <textarea
                value={caseDescription}
                onChange={(e) => setCaseDescription(e.target.value)}
                placeholder="Describe your case"
                className="w-full h-64 p-4 text-[16px] border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2E95E5] focus:border-transparent resize-none shadow-sm"
                required
              />
              <div className="flex justify-center mt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="px-6 py-2.5 bg-[#2E95E5] hover:bg-[#2E95E5]/90 text-white rounded-md text-sm font-medium transition-colors shadow-sm disabled:opacity-50"
                >
                  {isLoading ? 'Generating...' : 'Submit'}
                </button>
              </div>
            </div>
            <div className="w-full max-w-2xl">
              <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-gray-900">Your instructions</h2>
                {result ? (
                  <div className="space-y-4">
                    <div className="text-sm text-gray-500">Result:</div>
                    <div className="text-sm bg-white p-4 rounded border border-gray-200">
                      <p className="whitespace-pre-wrap">{result}</p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Describe the case you're planning above. For example:
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <p className="text-sm text-gray-900">{exampleText}</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
