import { useEffect, useState, useSyncExternalStore } from 'react'

const THEME_KEY = 'theme'
const listeners = new Set()

let currentTheme =
  typeof document !== 'undefined' &&
  document.documentElement.classList.contains('dark')
    ? 'dark'
    : 'light'

function emit() {
  listeners.forEach((listener) => listener())
}

export function setTheme(theme) {
  currentTheme = theme === 'dark' ? 'dark' : 'light'
  document.documentElement.classList.toggle('dark', currentTheme === 'dark')
  try {
    localStorage.setItem(THEME_KEY, currentTheme)
  } catch {
    /* storage unavailable */
  }
  emit()
}

function subscribe(listener) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

export function useTheme() {
  const theme = useSyncExternalStore(
    subscribe,
    () => currentTheme,
    () => 'light',
  )
  return { theme, toggle: () => setTheme(theme === 'dark' ? 'light' : 'dark') }
}

export function useScrolled(threshold = 8) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > threshold)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [threshold])

  return scrolled
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0)
    }
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [])

  return progress
}

export function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    let raf = 0
    const update = () => {
      raf = 0
      const doc = document.documentElement
      const marker = window.scrollY + window.innerHeight * 0.35
      let next = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= marker) next = id
      }
      if (window.innerHeight + window.scrollY >= doc.scrollHeight - 4) {
        next = ids[ids.length - 1]
      }
      setActive(next)
    }
    const request = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', request, { passive: true })
    window.addEventListener('resize', request)
    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', request)
      window.removeEventListener('resize', request)
    }
  }, [ids])

  return active
}
