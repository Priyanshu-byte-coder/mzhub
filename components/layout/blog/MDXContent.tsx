'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface MDXContentProps {
  content: string
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

const components = {
  h1: ({ children, ...props }: any) => {
    const text = children?.toString() || ''
    const id = slugify(text)
    return (
      <h1
        id={id}
        className="text-4xl font-bold mb-6 mt-8 scroll-mt-28 text-foreground border-b border-border pb-3"
        {...props}
      >
        {children}
      </h1>
    )
  },
  h2: ({ children, ...props }: any) => {
    const text = children?.toString() || ''
    const id = slugify(text)
    return (
      <h2
        id={id}
        className="text-3xl font-bold mb-4 mt-8 scroll-mt-28 text-foreground border-b border-border pb-2"
        {...props}
      >
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }: any) => {
    const text = children?.toString() || ''
    const id = slugify(text)
    return (
      <h3
        id={id}
        className="text-2xl font-bold mb-3 mt-6 scroll-mt-28 text-foreground"
        {...props}
      >
        {children}
      </h3>
    )
  },
  h4: ({ children, ...props }: any) => {
    const text = children?.toString() || ''
    const id = slugify(text)
    return (
      <h4
        id={id}
        className="text-xl font-semibold mb-2 mt-4 scroll-mt-28 text-foreground"
        {...props}
      >
        {children}
      </h4>
    )
  },
  p: (props: any) => (
    <p className="text-muted-foreground leading-relaxed mb-4" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc pl-6 mb-4 space-y-2" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal pl-6 mb-4 space-y-2" {...props} />
  ),
  li: (props: any) => (
    <li className="text-muted-foreground" {...props} />
  ),
  a: (props: any) => (
    <a
      className="text-primary hover:underline font-medium"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
  blockquote: (props: any) => (
    <blockquote
      className="border-l-4 border-primary pl-4 italic text-muted-foreground my-4 bg-muted/50 py-2 rounded-r"
      {...props}
    />
  ),
  code: (props: any) => (
    <code
      className="text-primary bg-primary/10 px-1.5 py-0.5 rounded text-sm font-mono"
      {...props}
    />
  ),
  pre: (props: any) => (
    <pre
      className="bg-muted border border-border rounded-lg p-4 overflow-x-auto mb-4"
      {...props}
    />
  ),
  table: (props: any) => (
    <div className="overflow-x-auto mb-4">
      <table className="min-w-full border-collapse" {...props} />
    </div>
  ),
  th: (props: any) => (
    <th
      className="border border-border bg-muted p-2 text-left font-semibold"
      {...props}
    />
  ),
  td: (props: any) => (
    <td className="border border-border p-2" {...props} />
  ),
  hr: (props: any) => (
    <hr className="border-border my-8" {...props} />
  ),
  sup: (props: any) => null,
  strong: (props: any) => (
    <strong className="font-semibold text-foreground" {...props} />
  ),
  em: (props: any) => (
    <em className="italic" {...props} />
  ),
}

export function MDXContent({ content }: MDXContentProps) {
  return (
    <article className="prose prose-lg dark:prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {content}
      </ReactMarkdown>
    </article>
  )
}
