import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen gap-6">
      <h1 className="text-4xl font-bold">404 - Página no encontrada</h1>
      <Button>
        <Link href="/">Volver al inicio</Link>
      </Button>
    </main>
  );
}
