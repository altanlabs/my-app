import { LoginForm } from "@/components/blocks/login-form";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
      <LoginForm className="max-w-md w-full" />
    </div>
  );
}
