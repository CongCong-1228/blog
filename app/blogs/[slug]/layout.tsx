export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="md:pt-16">
        {children}
      </div>
  );
}
