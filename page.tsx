"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export default function LandingPage() {
  const [idea, setIdea] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 to-slate-900 text-white px-6 py-12">
      <header className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          Build Apps with <span className="text-indigo-400">Just Your Words</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl">
          Skip the code, skip the drag-and-drop. Just say what you want and watch your app or website come to life.
        </p>
        <div className="flex space-x-4">
          <Button className="bg-indigo-500 hover:bg-indigo-600 text-white text-lg px-6 py-3 rounded-2xl shadow-xl">
            Try It Free
          </Button>
          <Button variant="outline" className="text-white border-white text-lg px-6 py-3 rounded-2xl">
            Watch Demo
          </Button>
        </div>
      </header>

      <section className="max-w-4xl mx-auto mt-24 text-center">
        <Card className="bg-slate-800 border-none">
          <CardContent className="p-6">
            <h2 className="text-2xl font-semibold mb-4">Describe your idea</h2>
            <textarea
              value={idea}
              onChange={(e) => setIdea(e.target.value)}
              placeholder="e.g., A budgeting app for college students"
              className="w-full h-28 rounded-lg bg-slate-900 text-white p-4 outline-none"
            />
            <Button className="mt-4 bg-indigo-600 hover:bg-indigo-700">Generate App</Button>
          </CardContent>
        </Card>
      </section>

      <section className="max-w-6xl mx-auto mt-24 grid md:grid-cols-4 gap-6">
        {["Describe your idea", "Get real-time preview", "Deploy in one click", "Iterate with chat"].map((step, i) => (
          <Card key={i} className="bg-slate-800 border-none">
            <CardContent className="p-6 text-center">
              <Sparkles className="w-10 h-10 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">{step}</h3>
              <p className="text-gray-400 text-sm">
                We turn your prompt into production-ready apps using the latest AI.
              </p>
            </CardContent>
          </Card>
        ))}
      </section>

      <footer className="max-w-6xl mx-auto mt-32 text-center text-gray-500 text-sm">
        © 2025 PromptForge — Build anything with your words.
      </footer>
    </div>
  );
}