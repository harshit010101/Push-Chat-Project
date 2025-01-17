import { LoginDialog } from "@/components/layout/dialog/loginDialog";

export const metadata = {
  title: "Chat app",
  description: "Chat Messenger",
};

export default function RootLayout({ children }) {
  return (
    <div className="h-screen w-screen flex justify-center">
      {children}
      <LoginDialog />
    </div>
  );
}
