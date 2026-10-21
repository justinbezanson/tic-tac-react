import { useTypewriter } from "../hooks/useTypewriter";

export default function Messages({ message }: { message: string }) {
  const displayed = useTypewriter(message);
  return <div className="min-h-6 text-center text-gray-500 italic">{displayed}</div>;
}
