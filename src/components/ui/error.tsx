export default function AppError({ error }: { error: unknown }) {
  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }
  return <div>Error: Something went wrong</div>;
}
