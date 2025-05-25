import * as React from "react";

export function Card({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{
    border: "1px solid #333",
    borderRadius: "0.5rem",
    background: "#18181b",
    color: "#f5f5f5",
    boxShadow: "0 1px 2px rgba(16,24,40,0.05)",
    marginBottom: "1rem",
    ...props.style
  }}>{children}</div>
}

export function CardHeader({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ padding: "1rem 1rem 0 1rem", ...props.style }}>{children}</div>
}

export function CardContent({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ padding: "0 1rem 1rem 1rem", ...props.style }}>{children}</div>
}

export function CardTitle({ children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 {...props} style={{ fontSize: "1.25rem", fontWeight: 600, margin: 0, color: "#f5f5f5", ...props.style }}>{children}</h3>
}

export function CardDescription({ children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p {...props} style={{ color: "#a3a3a3", fontSize: "0.875rem", margin: 0, ...props.style }}>{children}</p>
}

export function CardFooter({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ padding: "0 1rem 1rem 1rem", borderTop: "1px solid #333", ...props.style }}>{children}</div>
}