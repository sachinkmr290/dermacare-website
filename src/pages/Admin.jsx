import { LogIn, ArrowRight, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Admin() {
  const DPMS_URL = "http://localhost:5174/login"; // URL where DPMS frontend is running

  const handleRedirect = () => {
    window.location.href = DPMS_URL;
  };

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center bg-slate-50 p-6">
      <div className="glass max-w-md w-full p-8 rounded-3xl shadow-luxe text-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-60 pointer-events-none"></div>

        <div className="relative z-10">
          <div className="w-20 h-20 mx-auto bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center shadow-inner mb-6">
            <ShieldCheck size={40} strokeWidth={1.5} />
          </div>
          
          <h1 className="text-3xl font-bold text-slate-900 mb-2">Clinic Admin Portal</h1>
          <p className="text-slate-500 mb-8 leading-relaxed">
            The administration dashboard has been upgraded to the comprehensive 
            <span className="font-semibold text-slate-700"> Digital Patient Management System</span>.
          </p>

          <Button 
            onClick={handleRedirect}
            size="lg" 
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white rounded-full h-14 text-lg font-medium shadow-md transition-transform hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <LogIn size={20} />
            Proceed to Secure Login
            <ArrowRight size={18} className="ml-1" />
          </Button>
          
          <p className="mt-6 text-xs text-slate-400 uppercase tracking-wider font-medium">
            Authorized Personnel Only
          </p>
        </div>
      </div>
    </div>
  );
}
