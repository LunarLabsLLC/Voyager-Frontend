'use client';
import { MouseEventHandler } from "react";
import useTheme from '../hooks/useTheme';

const ThemeToggle = (props: { className?: string }) => {
  const [theme, setTheme] = useTheme('dark');
  const isDark = theme !== 'light';

  return (
    <div className={`flex flex-row max-w-fit max-h-fit gap-x-4 bg-base-100 border-2 px-3 py-2
      ${isDark ? 'rounded-tr-2xl rounded-bl-2xl border-black' : 'rounded-tl-2xl rounded-br-2xl border-white'}
      ${props.className || ''}`}>
        <LightIcon className={isDark ? '' : "text-warning"} onClick={isDark ? () => setTheme('light') : undefined}/>
        <DarkIcon className={isDark ? "text-neutral" : ''} onClick={isDark ? undefined : () => setTheme('dark')}/>
    </div>
  );
}
export default ThemeToggle;

const LightIcon = (props: { onClick?: MouseEventHandler<SVGSVGElement>; className?: string; }) => (
  <svg
    onClick={props.onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ` + (props.className || '')}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
    />
  </svg>
);

const DarkIcon = (props: { onClick?: MouseEventHandler<SVGSVGElement>; className?: string; }) => (
  <svg
    onClick={props.onClick}
    xmlns="http://www.w3.org/2000/svg"
    className={`h-6 w-6 ` + (props.className || '')}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);