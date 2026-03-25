export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="public-theme min-h-screen bg-background text-foreground">
      <main>{children}</main>
    </div>
  );
}
