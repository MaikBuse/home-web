'use client'

import { Container } from '@/components/Container'
import { NormalButton } from '@/components/buttons/NormalButton'
import { GitHubIcon } from '@/components/social/SocialIcons'
import { type FormEvent, useState } from 'react'

function GoogleIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
        fill="#4285F4"
      />
      <path
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
        fill="#34A853"
      />
      <path
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
        fill="#FBBC05"
      />
      <path
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
        fill="#EA4335"
      />
    </svg>
  )
}

function LockIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Form does nothing - purely decorative
  }

  return (
    <Container className="mt-16 sm:mt-32">
      <div className="mx-auto max-w-md">
        <div className="rounded-2xl border border-zinc-700/40 bg-zinc-900/50 p-8">
          <div className="flex flex-col items-center mb-8">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-800 mb-4">
              <LockIcon className="h-6 w-6 text-teal-500" />
            </div>
            <h1 className="text-xl font-semibold text-zinc-100">
              Sign in to your account
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Welcome back! Please enter your details.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-zinc-300"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-zinc-700/40 bg-zinc-800/50 px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-zinc-300"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-2 block w-full rounded-lg border border-zinc-700/40 bg-zinc-800/50 px-3 py-2 text-zinc-200 placeholder:text-zinc-500 focus:border-teal-500 focus:outline-none focus:ring-1 focus:ring-teal-500/50"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-zinc-700 bg-zinc-800 text-teal-500 focus:ring-teal-500/50 focus:ring-offset-zinc-900"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-zinc-400"
                >
                  Remember me
                </label>
              </div>
              <button
                type="button"
                className="text-sm font-medium text-teal-500 hover:text-teal-400"
              >
                Forgot password?
              </button>
            </div>

            <NormalButton
              type="submit"
              variant="primary"
              className="w-full justify-center bg-teal-600 hover:bg-teal-500 active:bg-teal-700"
            >
              Sign in
            </NormalButton>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-700/40" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-zinc-900/50 px-2 text-zinc-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700/40 bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition"
              >
                <GoogleIcon className="h-5 w-5" />
                Google
              </button>
              <button
                type="button"
                className="flex w-full items-center justify-center gap-2 rounded-lg border border-zinc-700/40 bg-zinc-800/50 px-3 py-2 text-sm font-medium text-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 transition"
              >
                <GitHubIcon className="h-5 w-5 fill-current" />
                GitHub
              </button>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-zinc-500">
            Don&apos;t have an account?{' '}
            <button
              type="button"
              className="font-medium text-teal-500 hover:text-teal-400"
            >
              Sign up
            </button>
          </p>
        </div>
      </div>
    </Container>
  )
}
