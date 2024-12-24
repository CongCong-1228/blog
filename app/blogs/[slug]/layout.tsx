export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="flex flex-col gap-4 my-0 items-center md:pt-16">
        {children}
      </div>
    </>
  );
}
