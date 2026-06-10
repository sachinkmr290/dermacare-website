import { useEffect, useState } from "react";
import axios from "axios";
import { format } from "date-fns";
import { toast } from "sonner";
import { LogOut, Trash2, Edit2, Loader2, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const BACKEND_URL = "http://localhost:8000"; // fallback
const API = `${BACKEND_URL}/api`;

export default function Admin() {
  const [token, setToken] = useState(localStorage.getItem("admin_token") || "");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);

  const verifyToken = async (t) => {
    try {
      await axios.post(`${API}/admin/verify`, {}, { headers: { "x-admin-token": t } });
      setIsAuthenticated(true);
      fetchAppointments(t);
    } catch {
      setIsAuthenticated(false);
      if (token) toast.error("Invalid Admin Token");
    }
  };

  useEffect(() => {
    if (token) verifyToken(token);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const t = e.target.token.value;
    localStorage.setItem("admin_token", t);
    setToken(t);
    verifyToken(t);
  };

  const handleLogout = () => {
    localStorage.removeItem("admin_token");
    setToken("");
    setIsAuthenticated(false);
  };

  const fetchAppointments = async (t) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/admin/appointments`, { headers: { "x-admin-token": t } });
      setAppointments(data);
    } catch (err) {
      toast.error("Failed to fetch appointments");
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    try {
      await axios.patch(`${API}/admin/appointments/${id}`, { status }, { headers: { "x-admin-token": token } });
      toast.success("Status updated");
      fetchAppointments(token);
    } catch {
      toast.error("Failed to update status");
    }
  };

  const deleteAppointment = async (id) => {
    if (!window.confirm("Are you sure you want to delete this appointment?")) return;
    try {
      await axios.delete(`${API}/admin/appointments/${id}`, { headers: { "x-admin-token": token } });
      toast.success("Appointment deleted");
      fetchAppointments(token);
    } catch {
      toast.error("Failed to delete");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-50">
        <form onSubmit={handleLogin} className="glass p-8 rounded-2xl w-full max-w-sm shadow-luxe space-y-4">
          <h2 className="text-2xl font-bold text-slate-900 text-center mb-6">Clinic Admin</h2>
          <Input type="password" name="token" placeholder="Admin Token" required className="h-12" />
          <Button type="submit" className="w-full btn-gradient text-white h-12">Login</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Appointments Dashboard</h1>
            <p className="text-slate-500 mt-1">Manage patient bookings and statuses</p>
          </div>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut size={16} /> Logout
          </Button>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          {loading ? (
            <div className="p-12 flex justify-center text-emerald-600"><Loader2 className="animate-spin" size={32} /></div>
          ) : appointments.length === 0 ? (
            <div className="p-12 text-center text-slate-500">No appointments found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200 text-sm font-semibold text-slate-600">
                    <th className="p-4">Patient</th>
                    <th className="p-4">Contact</th>
                    <th className="p-4">Treatment</th>
                    <th className="p-4">Date & Msg</th>
                    <th className="p-4">Status</th>
                    <th className="p-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {appointments.map((a) => (
                    <tr key={a.id} className="hover:bg-slate-50/50 transition">
                      <td className="p-4 font-medium text-slate-900">{a.full_name}</td>
                      <td className="p-4 text-slate-600">
                        <div className="flex items-center gap-1"><Phone size={14} className="text-slate-400"/> {a.phone}</div>
                        {a.email && <div className="text-xs text-slate-400 mt-1">{a.email}</div>}
                      </td>
                      <td className="p-4">
                        <Badge variant="secondary" className="bg-emerald-50 text-emerald-700">{a.treatment}</Badge>
                      </td>
                      <td className="p-4 text-slate-600">
                        {a.preferred_date ? <div className="flex items-center gap-1"><Calendar size={14} className="text-slate-400"/> {a.preferred_date}</div> : <span className="text-slate-400">No Date</span>}
                        {a.message && <div className="text-xs text-slate-500 mt-1 italic">"{a.message}"</div>}
                      </td>
                      <td className="p-4">
                        <Select value={a.status} onValueChange={(val) => updateStatus(a.id, val)}>
                          <SelectTrigger className="h-8 text-xs w-32">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="new">New</SelectItem>
                            <SelectItem value="contacted">Contacted</SelectItem>
                            <SelectItem value="confirmed">Confirmed</SelectItem>
                            <SelectItem value="done">Done</SelectItem>
                            <SelectItem value="cancelled">Cancelled</SelectItem>
                          </SelectContent>
                        </Select>
                      </td>
                      <td className="p-4 text-right">
                        <Button variant="ghost" size="sm" onClick={() => deleteAppointment(a.id)} className="text-red-500 hover:text-red-600 hover:bg-red-50">
                          <Trash2 size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
