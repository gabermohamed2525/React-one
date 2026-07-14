import Container from "../Components/re-usable Com/Container";
import Headung from "../Components/re-usable Com/Headung";

export default function Bolg() {
  return (
    <Container>
      <Headung title="Blogs Page"/>
      <div className="text-2xl text-red-600 mt-5 flex justify-center items-center">
      <p>
<div className="max-w-5xl mx-auto bg-[#111] text-white p-8 rounded-xl">

  <h1 className="text-4xl font-bold text-red-500 mb-6">
    🚨 SECURITY WARNING REPORT
  </h1>

  <h2 className="text-2xl font-bold text-yellow-400 mb-4">
    ⚠️ Risk Level: HIGH
  </h2>

  <p className="mb-2">
    <strong>Inspection Date:</strong> June 30, 2026
  </p>

  <p className="mb-8">
    <strong>Report Type:</strong> Preliminary Security Assessment
  </p>

  <hr className="my-8 border-gray-700" />

  <h2 className="text-3xl font-bold mb-4">
    📌 Executive Summary
  </h2>

  <p className="leading-8 text-gray-300">
    During the preliminary review of the inspected webpage, several indicators
    were identified that may pose potential security and privacy concerns.
  </p>

  <hr className="my-8 border-gray-700" />

  <h2 className="text-3xl font-bold mb-4">
    🔍 Security Findings
  </h2>

  <ul className="list-disc pl-8 space-y-3 text-lg">
    <li>📍 Location Access</li>
    <li>📷 Camera Access</li>
    <li>🎤 Microphone Access</li>
    <li>📁 File Access</li>
    <li>👤 Personal Information</li>
  </ul>

</div>
        </p>
      </div>
    </Container>
  )
}
