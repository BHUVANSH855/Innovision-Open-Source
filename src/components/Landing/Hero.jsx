import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight, Play, Sparkles, Zap, BookOpen, Trophy, Users, Globe, Flame } from "lucide-react";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";

const Hero = () => {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden px-4">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] z-[1]" />

      <div className="container relative z-10 mx-auto px-2 sm:px-4 md:px-6 py-8 sm:py-12 md:py-24">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium mb-6 sm:mb-8 animate-fade-in">
            <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
            <span>AI-Powered Learning Platform</span>
            <span className="px-1.5 sm:px-2 py-0.5 rounded-full bg-green-500/20 text-green-600 dark:text-green-400 text-[10px] sm:text-xs">New</span>
          </div>

          {/* Logo */}
          <div className="mb-4 sm:mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Image
              src="/InnoVision_LOGO-removebg-preview.png"
              alt="InnoVision Logo"
              width={80}
              height={80}
              priority
              className="w-14 h-14 sm:w-20 sm:h-20 dark:invert"
            />
          </div>

          {/* Main heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight mb-4 sm:mb-6">
            <span className="block bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 dark:from-white dark:via-gray-200 dark:to-white bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Learn Any Topic
            </span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text text-transparent animate-fade-in" style={{ animationDelay: "0.3s" }}>
              with AI-Generated Courses
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-4 sm:mb-6 leading-relaxed animate-fade-in px-2" style={{ animationDelay: "0.4s" }}>
            Generate personalized courses on any topic in seconds. From programming to philosophy,
            our AI creates structured, chapter-wise content tailored to your learning style.
          </p>

          {/* Feature highlights */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 mb-6 sm:mb-10 text-xs sm:text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.5s" }}>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-500" />
              <span>XP & Levels</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Flame className="h-3 w-3 sm:h-4 sm:w-4 text-orange-500" />
              <span>Daily Streaks</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Trophy className="h-3 w-3 sm:h-4 sm:w-4 text-amber-500" />
              <span>Badges & Leaderboards</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              <Globe className="h-3 w-3 sm:h-4 sm:w-4 text-blue-500" />
              <span>100+ Languages</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-12 animate-fade-in w-full sm:w-auto" style={{ animationDelay: "0.6s" }}>
            <MagneticButton strength={0.2}>
              <Link href="/login" className="w-full sm:w-auto">
                <Button size="lg" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </MagneticButton>
            <MagneticButton strength={0.2}>
              <Link href="/demo" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="h-11 sm:h-12 px-6 sm:px-8 text-sm sm:text-base font-semibold gap-2 transition-all duration-300 hover:scale-105 w-full sm:w-auto">
                  <Play className="h-4 w-4" />
                  See Demo
                </Button>
              </Link>
            </MagneticButton>
          </div>

          {/* Stats with Animated Counters */}
          <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4 md:gap-12 pt-6 sm:pt-8 border-t border-border/50 w-full max-w-3xl animate-fade-in" style={{ animationDelay: "0.7s" }}>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <BookOpen className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <AnimatedCounter end={1000} suffix="+" />
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Courses Created</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <Users className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <AnimatedCounter end={50} suffix="K+" />
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Active Learners</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <Globe className="h-4 w-4 sm:h-5 sm:w-5 text-purple-500" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <AnimatedCounter end={100} suffix="+" />
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Languages</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1">
                <Trophy className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500" />
                <span className="text-xl sm:text-2xl md:text-3xl font-bold">
                  <AnimatedCounter end={98} suffix="%" />
                </span>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">Satisfaction</p>
            </div>
          </div>

          {/* Trust badges */}
          <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted/50">
              <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free to Start</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted/50">
              <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>7-Day Premium Trial</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full bg-muted/50">
              <svg className="h-3 w-3 sm:h-4 sm:w-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>No Credit Card Required</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - hidden on mobile */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 hidden sm:block">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-scroll" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
