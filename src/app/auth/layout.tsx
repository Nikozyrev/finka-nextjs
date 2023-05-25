export default async function AuthLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="mx-auto">Please login</div>
      {children}
    </>
  );
}
