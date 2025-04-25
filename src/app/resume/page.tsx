"use client"

import { useState, useEffect } from "react"
import { Lock, CheckCircle, AlertCircle, FileText, Search, Award, BarChart, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ResumeChecker() {
  const [animateScore, setAnimateScore] = useState(false)
  const [animateSteps, setAnimateSteps] = useState(false)

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setAnimateScore(true), 500)
    setTimeout(() => setAnimateSteps(true), 1000)
  }, [])

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section with Enhanced Design */}
      <div className="relative bg-gradient-to-r from-slate-100 to-blue-50 rounded-xl p-8 mb-8 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-emerald-200/30 to-transparent rounded-full -mr-20 -mt-20 blur-2xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-indigo-200/20 to-transparent rounded-full -mr-20 -mb-20 blur-xl"></div>

        {/* Animated circles */}
        <div className="absolute top-1/4 right-1/4 w-8 h-8 bg-emerald-400/20 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-6 h-6 bg-indigo-400/20 rounded-full animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 right-1/2 w-4 h-4 bg-blue-400/20 rounded-full animate-ping animation-delay-2000"></div>

        <div className="relative z-10">
          <div className="text-sm uppercase font-medium text-indigo-600 animate-fade-in">RESUME CHECKER</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mt-2 mb-4 animate-slide-up">
            Is your resume good enough?
          </h1>

          <div className="flex items-center text-sm text-slate-500 mb-6">
            <Link href="/" className="text-blue-500 hover:underline">
              Home
            </Link>
            <span className="mx-2">&gt;</span>
            <span>Resume Checker</span>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:max-w-xl">
              <p className="text-slate-600 mb-8 animate-fade-in animation-delay-300">
                A free and fast AI resume checker doing 16 crucial checks to ensure your resume is ready to perform and
                get you interview callbacks.
              </p>

              {/* Upload Section with Enhanced Design */}
              <div className="border-2 border-dashed border-emerald-300 rounded-lg p-8 bg-white/50 transition-all hover:shadow-md hover:border-emerald-400">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FileText className="w-8 h-8 text-emerald-500" />
                  </div>
                  <p className="text-slate-700 mb-2">Drop your resume here or choose a file.</p>
                  <p className="text-slate-500 text-sm">PDF & DOCX only. Max 2MB file size.</p>
                </div>

                <div className="flex justify-center">
                  <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 px-6 rounded-md transition-colors shadow-sm hover:shadow group">
                    Upload Your Resume
                    <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
                  </button>
                </div>

                <div className="flex items-center justify-center mt-6 text-slate-500 text-sm">
                  <Lock className="w-4 h-4 mr-2" />
                  <span>Privacy guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right side banner with animated elements */}
            <div className="hidden md:flex md:flex-1 items-center justify-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-indigo-50 rounded-xl"></div>
              <div className="relative z-10 p-6 text-center">
                <div className="w-24 h-24 bg-white rounded-full shadow-md flex items-center justify-center mx-auto mb-4 animate-float">
                  <Award className="w-12 h-12 text-emerald-500" />
                </div>
                <h3 className="text-xl font-semibold text-slate-800 mb-2">Trusted by Professionals</h3>
                <p className="text-slate-600 mb-4">Join 10,000+ job seekers who improved their resume score</p>
                <div className="flex justify-center space-x-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How ATS Scoring Works - Step by Step */}
      <div className="bg-white rounded-xl shadow-sm p-8 border border-slate-100 mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-6">How ATS Scoring Works</h2>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute left-6 top-8 bottom-8 w-1 bg-slate-100 md:left-1/2 md:-ml-0.5"></div>

          <div className="space-y-12">
            {/* Step 1 */}
            <div
              className={`flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 ${animateSteps ? "opacity-100" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center z-10">
                <Search className="w-6 h-6 text-indigo-600" />
              </div>
              <div className="md:w-5/12 md:text-right md:pr-8">
                <h3 className="text-lg font-medium text-slate-800">Resume Scanning</h3>
                <p className="text-slate-600">Our AI scans your resume and extracts key information</p>
              </div>
              <div className="hidden md:block w-12 h-12 flex-shrink-0"></div>
              <div className="md:w-5/12 pl-12 md:pl-8">
                <div className="p-3 bg-indigo-50 rounded-lg">
                  <div className="h-2 w-full bg-indigo-200 rounded-full mb-2 animate-pulse"></div>
                  <div className="h-2 w-3/4 bg-indigo-200 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div
              className={`flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 delay-300 ${animateSteps ? "opacity-100" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center z-10">
                <BarChart className="w-6 h-6 text-blue-600" />
              </div>
              <div className="md:w-5/12 md:text-right md:pr-8">
                <h3 className="text-lg font-medium text-slate-800">Keyword Analysis</h3>
                <p className="text-slate-600">We analyze keywords and match them to job requirements</p>
              </div>
              <div className="hidden md:block w-12 h-12 flex-shrink-0"></div>
              <div className="md:w-5/12 pl-12 md:pl-8">
                <div className="flex space-x-1">
                  {["Python", "Leadership", "Project Management"].map((keyword, i) => (
                    <span key={i} className="px-2 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div
              className={`flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-700 delay-500 ${animateSteps ? "opacity-100" : "opacity-0 translate-y-8"}`}
            >
              <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center z-10">
                <Award className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="md:w-5/12 md:text-right md:pr-8">
                <h3 className="text-lg font-medium text-slate-800">Score Generation</h3>
                <p className="text-slate-600">We calculate your score based on 16 crucial factors</p>
              </div>
              <div className="hidden md:block w-12 h-12 flex-shrink-0"></div>
              <div className="md:w-5/12 pl-12 md:pl-8">
                <div className="relative w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div
                    className={`absolute top-0 left-0 h-full bg-emerald-500 rounded-full transition-all duration-1500 ease-out ${animateSteps ? "w-[92%]" : "w-0"}`}
                  ></div>
                </div>
                <div className="flex justify-between mt-1">
                  <span className="text-xs text-slate-500">0</span>
                  <span className="text-xs text-slate-500">100</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Section with Enhanced Design */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Card with Animation */}
        <div className="bg-white rounded-xl shadow-sm p-6 border border-slate-100 transform transition-all hover:shadow-md">
          <h2 className="text-slate-700 font-medium mb-4">Resume Score</h2>

          <div className="flex justify-center mb-4">
            <div className="relative w-40 h-40">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="#e6e6e6" strokeWidth="10" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="10"
                  strokeDasharray="283"
                  strokeDashoffset={animateScore ? "28" : "283"} // 283 - (283 * 92 / 100)
                  transform="rotate(-90 50 50)"
                  className="transition-all duration-1500 ease-out"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-slate-800">92/100</span>
                <span className="text-sm text-slate-500">24 Issues</span>
              </div>
            </div>
          </div>

          <div className="space-y-3 mt-6">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Content</span>
              <div className="w-2/3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-emerald-500 rounded-full transition-all duration-1000 ${animateScore ? "w-[85%]" : "w-0"}`}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Format</span>
              <div className="w-2/3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-emerald-500 rounded-full transition-all duration-1000 delay-200 ${animateScore ? "w-[90%]" : "w-0"}`}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Style</span>
              <div className="w-2/3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-red-500 rounded-full transition-all duration-1000 delay-400 ${animateScore ? "w-[40%]" : "w-0"}`}
                ></div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-600">Skills</span>
              <div className="w-2/3 h-2 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-amber-500 rounded-full transition-all duration-1000 delay-600 ${animateScore ? "w-[65%]" : "w-0"}`}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Analysis Card with Enhanced Design */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm p-6 border border-slate-100 transform transition-all hover:shadow-md">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs mr-2">
                  <span>C</span>
                </div>
                <h3 className="font-medium text-slate-800">CONTENT</h3>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">OK</span>
            </div>

            <div className="space-y-3">
              <div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-slate-600 flex-1">ATS Parse Rate</span>
                <span className="text-xs font-medium text-green-600">95%</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-slate-600 flex-1">Qualifying Impact</span>
                <span className="text-xs font-medium text-green-600">High</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                <span className="text-sm text-slate-600 flex-1">Repetition</span>
                <span className="text-xs font-medium text-green-600">Low</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                <span className="text-sm text-slate-600 flex-1">Spelling & Grammar</span>
                <span className="text-xs font-medium text-amber-600">3 issues</span>
              </div>
              <div className="flex items-center p-2 rounded-lg hover:bg-slate-50 transition-colors">
                <AlertCircle className="w-4 h-4 text-amber-500 mr-2" />
                <span className="text-sm text-slate-600 flex-1">Summarize Resume</span>
                <span className="text-xs font-medium text-amber-600">Needs work</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs mr-2">
                  <span>F</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800">FORMAT & BREVITY</h3>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">OK</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">
                  <span>S</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800">STYLE</h3>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">BAD</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center text-red-600 text-xs mr-2">
                  <span>S</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800">SECTIONS</h3>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-red-100 text-red-800 rounded-full">BAD</span>
            </div>

            <div className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-50 transition-colors">
              <div className="flex items-center">
                <div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 text-xs mr-2">
                  <span>S</span>
                </div>
                <h3 className="text-sm font-medium text-slate-800">SKILLS</h3>
              </div>
              <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-800 rounded-full">MID</span>
            </div>
          </div>
        </div>
      </div>

      {/* Resume Preview with Enhanced Design */}
      <div className="mt-8 bg-white rounded-xl shadow-sm p-6 border border-slate-100 transform transition-all hover:shadow-md">
        <div className="flex items-center mb-6">
          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm mr-3">
            <span>C</span>
          </div>
          <h3 className="text-xl font-medium text-slate-800">CONTENT ANALYSIS</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="text-sm font-medium mb-4 flex items-center">
              <span className="mr-2">ATS PARSE RATE</span>
              <span className="px-2 py-0.5 text-xs bg-green-100 text-green-800 rounded-full">95%</span>
            </h4>
            <div className="space-y-3">
              <div className="h-4 bg-slate-100 rounded w-full"></div>
              <div className="h-4 bg-slate-100 rounded w-full"></div>
              <div className="h-4 bg-slate-100 rounded w-full"></div>
              <div className="h-4 bg-slate-100 rounded w-3/4"></div>
            </div>

            <div className="mt-6 relative">
              <div className="h-2 bg-slate-200 rounded-full">
                <div
                  className={`h-2 bg-emerald-500 rounded-full transition-all duration-1000 ${animateScore ? "w-[95%]" : "w-0"}`}
                ></div>
              </div>
              <div className="absolute right-[5%] top-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-emerald-500 flex items-center justify-center text-white text-xs">
                  <CheckCircle className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-medium mb-2">Key Findings</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Your resume is properly formatted for ATS systems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>All sections are clearly labeled and organized</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Contact information is complete and accessible</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border rounded-lg p-6 bg-white shadow-sm">
            <h4 className="text-sm font-medium mb-4 flex items-center">
              <span className="mr-2">KEYWORD OPTIMIZATION</span>
              <span className="px-2 py-0.5 text-xs bg-amber-100 text-amber-800 rounded-full">85%</span>
            </h4>

            <div className="mb-6">
              <h5 className="text-xs text-slate-500 mb-2">DETECTED KEYWORDS</h5>
              <div className="flex flex-wrap gap-2">
                {["Project Management", "Leadership", "Python", "Data Analysis", "Communication", "Teamwork"].map(
                  (keyword, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium">
                      {keyword}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="mb-6">
              <h5 className="text-xs text-slate-500 mb-2">SUGGESTED KEYWORDS</h5>
              <div className="flex flex-wrap gap-2">
                {["Strategic Planning", "Agile", "Stakeholder Management"].map((keyword, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium border border-amber-200"
                  >
                    {keyword} <span className="ml-1">+</span>
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 relative">
              <div className="h-2 bg-slate-200 rounded-full">
                <div
                  className={`h-2 bg-amber-500 rounded-full transition-all duration-1000 ${animateScore ? "w-[85%]" : "w-0"}`}
                ></div>
              </div>
              <div className="absolute right-[15%] top-0 transform translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                  <AlertCircle className="w-4 h-4" />
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h5 className="text-sm font-medium mb-2">Improvement Tips</h5>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Add 3-5 more industry-specific keywords</span>
                </li>
                <li className="flex items-start">
                  <ArrowRight className="w-4 h-4 text-amber-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Include more quantifiable achievements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-8 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl p-8 text-white text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to improve your resume?</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Upload your resume now and get detailed feedback to increase your chances of landing interviews.
        </p>
        <button className="bg-white text-indigo-600 hover:bg-indigo-50 font-medium py-3 px-8 rounded-md transition-colors shadow-sm hover:shadow">
          Get Started Now
        </button>
      </div>
    </div>
  )
}
