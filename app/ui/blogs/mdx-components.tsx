import { HTMLAttributes } from 'react'

interface Props extends HTMLAttributes<HTMLElement> {
  children?: React.ReactNode
}

const components = {
  h1: ({ children }: Props) => (
    <h1 className="text-3xl font-bold mt-8 mb-4">{children}</h1>
  ),
  h2: ({ children }: Props) => (
    <h2 className="text-2xl font-bold mt-6 mb-4">{children}</h2>
  ),
  h3: ({ children }: Props) => (
    <h3 className="text-xl font-bold mt-4 mb-2">{children}</h3>
  ),
  p: ({ children }: Props) => (
    <p className="my-2 leading-7 text-foreground overflow-x-auto">{children}</p>
  ),
  code: ({ children, className }: Props) => {
    // For inline code
    if (!className) {
      return <code className="bg-[#2e3140] dark:bg-[#292929] rounded px-1 py-0.5">{children}</code>
    }
    // For code blocks
    return (
      <code className={`block bg-[#2e3140] dark:bg-[#292929] rounded p-2 my-2 overflow-x-auto ${className}`}>
        {children}
      </code>
    )
  },
  pre: ({ children }: Props) => (
    <pre className="bg-[#2e3140] dark:bg-[#292929] rounded p-2 my-2 overflow-x-auto">
      {children}
    </pre>
  ),
}

export default components
