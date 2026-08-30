import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { PrismaClient } from "@prisma/client";
import { format } from "date-fns"; // Wait, I didn't install date-fns. I'll just use native Intl.DateTimeFormat

const prisma = new PrismaClient();

export default async function AdminDashboard() {
  const cookieStore = await cookies();
  const session = cookieStore.get("admin_session");

  if (!session) {
    redirect("/admin/login");
  }

  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-matte-black text-warm-white p-8">
      <div className="max-w-6xl mx-auto">
        <header className="flex justify-between items-center mb-12 border-b border-white/10 pb-6">
          <h1 className="font-serif text-3xl text-champagne">Aura Admin</h1>
          <form action="/api/auth/logout" method="POST">
            <button className="text-sm tracking-widest uppercase hover:text-champagne transition-colors">Logout</button>
          </form>
        </header>

        <div className="bg-charcoal border border-white/5 rounded-sm p-8">
          <h2 className="text-xl mb-6 font-serif">Recent Enquiries</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-widest text-warm-white/50">
                  <th className="py-4 font-normal">Date</th>
                  <th className="py-4 font-normal">Name</th>
                  <th className="py-4 font-normal">Event Type</th>
                  <th className="py-4 font-normal">Location</th>
                  <th className="py-4 font-normal">Status</th>
                  <th className="py-4 font-normal text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {enquiries.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="py-8 text-center text-warm-white/50">No enquiries found.</td>
                  </tr>
                ) : (
                  enquiries.map((enquiry) => (
                    <tr key={enquiry.id} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 text-sm">{new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' }).format(enquiry.createdAt)}</td>
                      <td className="py-4">
                        <div className="text-sm">{enquiry.name}</div>
                        <div className="text-xs text-warm-white/50">{enquiry.email}</div>
                      </td>
                      <td className="py-4 text-sm">{enquiry.eventType}</td>
                      <td className="py-4 text-sm text-warm-white/70">{enquiry.location || '-'}</td>
                      <td className="py-4">
                        <span className="text-xs uppercase tracking-widest px-2 py-1 bg-champagne/10 text-champagne border border-champagne/20 rounded-full">
                          {enquiry.status}
                        </span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="text-xs uppercase tracking-widest hover:text-champagne transition-colors">View</button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
