export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="mt-8">
        {children}
      </div>
  );
}
