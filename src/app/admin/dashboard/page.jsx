export default function AdminDashboardLayout({ children }) {
  return (
    <div className="min-h-screen flex bg-slate-50">
      Admin DashBoard
      <main className="flex-1">{children}</main>
    </div>
  );
}
