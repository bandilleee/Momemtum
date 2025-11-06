'use client';
import React, { useState } from 'react';
import { Eye, EyeOff, User } from 'lucide-react';

const GlassInputWrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-2xl border border-border bg-foreground/5 backdrop-blur-sm transition-colors focus-within:border-violet-400/70 focus-within:bg-violet-500/10">
    {children}
  </div>
);

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log("Register submitted:", data);
    // TODO: Connect to your ASP.NET backend API
  };

  return (
    <div className="h-dvh flex items-center justify-center font-geist w-dvw">
      <div className="w-full max-w-md px-6">
        <div className="flex flex-col gap-3">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2">
            <div className="w-15 h-15 bg-gray-700 rounded-3xl flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
          </div>

          <h1 className="animate-element animate-delay-100 text-4xl md:text-5xl font-semibold leading-tight text-center">
            <span className="font-light text-foreground tracking-tighter">Create Account</span>
          </h1>
          <p className="animate-element animate-delay-200 text-muted-foreground text-center">
            Start building momentum with your tasks today
          </p>

          <form className="space-y-5" onSubmit={handleRegister}>
            <div className="animate-element animate-delay-300">
              <label className="text-sm font-medium text-muted-foreground">Full Name</label>
              <GlassInputWrapper>
                <input 
                  name="fullName" 
                  type="text" 
                  placeholder="Enter your full name" 
                  className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                  required
                />
              </GlassInputWrapper>
            </div>

            <div className="animate-element animate-delay-400">
              <label className="text-sm font-medium text-muted-foreground">Email Address</label>
              <GlassInputWrapper>
                <input 
                  name="email" 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="w-full bg-transparent text-sm p-4 rounded-2xl focus:outline-none"
                  required
                />
              </GlassInputWrapper>
            </div>

            <div className="animate-element animate-delay-500">
              <label className="text-sm font-medium text-muted-foreground">Password</label>
              <GlassInputWrapper>
                <div className="relative">
                  <input 
                    name="password" 
                    type={showPassword ? 'text' : 'password'} 
                    placeholder="Enter your password" 
                    className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                    required
                    minLength={6}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowPassword(!showPassword)} 
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    )}
                  </button>
                </div>
              </GlassInputWrapper>
            </div>

            <div className="animate-element animate-delay-600">
              <label className="text-sm font-medium text-muted-foreground">Confirm Password</label>
              <GlassInputWrapper>
                <div className="relative">
                  <input 
                    name="confirmPassword" 
                    type={showConfirmPassword ? 'text' : 'password'} 
                    placeholder="Confirm your password" 
                    className="w-full bg-transparent text-sm p-4 pr-12 rounded-2xl focus:outline-none"
                    required
                    minLength={6}
                  />
                  <button 
                    type="button" 
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)} 
                    className="absolute inset-y-0 right-3 flex items-center"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    ) : (
                      <Eye className="w-5 h-5 text-muted-foreground hover:text-foreground transition-colors" />
                    )}
                  </button>
                </div>
              </GlassInputWrapper>
            </div>

            <div className="animate-element animate-delay-700 flex items-center text-sm">
              <label className="flex items-center gap-3 cursor-pointer">
                <input type="checkbox" name="terms" className="custom-checkbox" required />
                <span className="text-foreground/90">
                  I agree to the <a href="#" className="text-violet-400 hover:underline">Terms</a> and <a href="#" className="text-violet-400 hover:underline">Privacy Policy</a>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="animate-element animate-delay-800 w-full rounded-2xl bg-primary py-4 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Create Account
            </button>
          </form>

          <p className="animate-element animate-delay-900 text-center text-sm text-muted-foreground">
            Already have an account? <a href="/login" className="text-violet-400 hover:underline transition-colors">Sign In</a>
          </p>
        </div>
      </div>
    </div>
  );
}