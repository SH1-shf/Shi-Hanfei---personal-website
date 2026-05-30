import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, Activity, Thermometer, Droplets, UserCheck, 
  Settings, Zap, ShieldCheck, Heart, FileText, Cpu, CheckSquare 
} from 'lucide-react';
import { PERSONAL_DETAILS } from '../../data';

interface SensorSystemProps {
  onBackToHome: () => void;
  onOpenResume: () => void;
}

export default function SensorSystem({ onBackToHome, onOpenResume }: SensorSystemProps) {
  // Interactive Simulation state
  const [temp, setTemp] = useState<number>(24);
  const [humidity, setHumidity] = useState<number>(65);
  const [presence, setPresence] = useState<boolean>(true);

  // Computed state outputs based on threshold logic
  const isComfortable = temp >= 18 && temp <= 26 && humidity >= 30 && humidity <= 70;
  
  let ventFlapState = "Closed (0%)";
  let valveState = "Idle";
  let activeAlert = "None";
  let systemStatus = "Balanced";

  if (!presence) {
    ventFlapState = "Standby (10%)";
    valveState = "Power Save";
    systemStatus = "Eco Mode Active";
  } else {
    if (temp > 28) {
      ventFlapState = "Vent Open (100%)";
      valveState = "Thermo Cooling Block Active";
      systemStatus = "Active Cooling Triggered";
    } else if (temp < 16) {
      ventFlapState = "Draft Barrier Sealed";
      valveState = "Thermo Heating Block Active";
      systemStatus = "Active Heating Triggered";
    } else if (humidity > 75) {
      ventFlapState = "Dehumidification Vent (75%)";
      valveState = "Exhaust Active";
      systemStatus = "Humidity Stabilization Active";
    } else {
      ventFlapState = "Comfort Aperture (35%)";
      valveState = "Idle (Air flow passive)";
    }
  }

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased selection:bg-coral/20">
      {/* Header Bar */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100 py-3">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          <button
            onClick={onBackToHome}
            className="flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Portfolio</span>
          </button>
          
          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-4 py-2 bg-coral hover:bg-coral-hover text-white text-xs font-semibold rounded-full"
          >
            <FileText className="w-3.5 h-3.5" />
            Resume
          </button>
        </div>
      </nav>

      {/* Hero Banner Grid */}
      <section className="pt-24 pb-12 bg-white">
        <div className="max-w-5xl mx-auto px-6 md:px-12 space-y-8">
          <div className="space-y-4">
            <span className="inline-flex items-center px-3 py-1 bg-indigo-50 text-[#7F83FF] rounded-full text-xs font-mono font-semibold tracking-wide uppercase border border-indigo-100">
              Project 01 Case Study
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight leading-tight">
              Sensor-Driven Responsive Architecture System
            </h1>
          </div>

          {/* Metadata Cards Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-slate-50 p-6 rounded-3xl border border-slate-100">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Timeline</span>
              <span className="text-sm font-bold text-slate-800">2026.1 – 2026.4</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">My Role</span>
              <span className="text-sm font-bold text-slate-800">Personal Project</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Project Type</span>
              <span className="text-sm font-bold text-slate-800 font-display">Responsive Prototyping</span>
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">Core Tech</span>
              <span className="text-sm font-bold text-slate-800">Arduino, Node, C++</span>
            </div>
          </div>

          {/* Large Cover Image */}
          <div className="aspect-[16/9] w-full rounded-3xl overflow-hidden shadow-xl border border-slate-100">
            <img 
              src="/images/sensor_system.jpg" 
              alt="Sensor system cover image"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Full Case Study Access */}
      <section className="py-10 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center justify-center text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F83FF]">
            Full Case Study Access
          </span>
          <a
            href="https://drive.google.com/file/d/1M0wr7M5JZyiIjg655PiuYAgIhlwsM_bZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#7F83FF] to-indigo-600 hover:from-indigo-600 hover:to-indigo-700 text-white rounded-full text-base font-semibold shadow-lg shadow-indigo-550/15 hover:shadow-xl hover:shadow-indigo-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 font-display cursor-pointer"
          >
            <span>View Full Project Documentation</span>
            <ArrowRight className="w-5 h-5 text-white" />
          </a>
          <p className="text-xs text-slate-400 font-mono">
            Opens the comprehensive physical system layout and research documentation in a new tab
          </p>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-12 bg-slate-50/40 border-y border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">01 / The Problem</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Static Shelters & Microclimate Waste</p>
          </div>
          <div className="md:col-span-8 space-y-4">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              Traditional building envelopes are statically configured, locking up localized spaces in fixed insulation indices. When rapid outdoor climatic surges occur — such as humidity spikes or swift thermal swings — standard buildings fail to adapt automatically.
            </p>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              This structural rigidity forces absolute reliance on centralized HVAC systems. These systems consume excessive energy working reactively, turning a minor environmental fluctuation into a massive thermal baseline adjustment. This problem is worth solving because active localized envelope control can prevent thermal waste before it registers at mechanical dampers.
            </p>
          </div>
        </div>
      </section>

      {/* Research & Discovery */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">02 / Research</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Environmental Data Mapping</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <div className="p-5 bg-indigo-50/45 rounded-2xl border border-indigo-100/50 space-y-3">
              <span className="text-xs font-mono font-semibold uppercase text-[#7F83FF] tracking-wider block">Key Research Finding</span>
              <p className="text-slate-700 text-xs md:text-sm leading-relaxed">
                By deploying multi-point temperature & humidity logging modules across an active architectural envelope mock-up over 30 days, I mapped microclimatic behaviors. I discovered that extreme localized humidity surges are highly transient, often lasting less than 45 minutes, yet traditional thermostats overcompensate for hours.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">LITERATURE REVIEW</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Analyzed thermodynamic adaptive models (ASHRAE Standard 55) to understand how continuous kinetic ventilation changes user thermal sensation index.
                </p>
              </div>
              <div className="p-4 border border-slate-100 rounded-xl space-y-1">
                <span className="text-xs text-slate-400 font-mono">BEHAVIORAL INSIGHTS</span>
                <p className="text-slate-700 text-xs leading-normal font-medium">
                  Simulated user workflows in temporary capsules to measure manual vent adjustments, which are rarely performed on time, proving the need for autonomous, responsive automation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Insight */}
      <section className="py-12 bg-[#FFFBF5] border-y border-amber-100/40">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center space-y-4">
          <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-mustard">03 / Key Insight</h2>
          <blockquote className="text-xl md:text-2xl font-display font-bold text-slate-900 max-w-2xl mx-auto tracking-tight leading-normal py-2">
            “The building should act as a responsive biological skin — executing micro-ventilation and thermal changes at the boundary layer before bulk air systems ignite.”
          </blockquote>
          <p className="text-slate-500 text-xs md:text-sm font-mono uppercase tracking-widest font-semibold pt-1">
            Transforming continuous spatial physics into digital algorithmic rules.
          </p>
        </div>
      </section>

      {/* System Design (THE FOCUS FIELD) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-10">
          <div className="text-center space-y-2">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-[#7F83FF]">04 / System Design</h2>
            <p className="text-2xl font-display font-bold text-slate-900">Automation Logic: Data Input → Threshold Logic → State Output</p>
            <p className="text-slate-500 text-xs md:text-sm max-w-md mx-auto leading-relaxed pt-1">
              Adjust the physical environment sliders below to simulate live physical sensor inputs into the microcontroller decision block.
            </p>
          </div>

          {/* Microcontroller Interactive Simulator */}
          <div className="p-6 md:p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Control Panel (Data Inputs) */}
            <div className="lg:col-span-5 space-y-6 bg-white p-5 rounded-2xl border border-slate-200/65 shadow-sm">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block border-b pb-2 mb-2">Sensor Variables (Data Input)</span>

              {/* Temperature Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <Thermometer className="w-4 h-4 text-orange-400" />
                    <span>Temperature Sensor</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-900 bg-orange-50 px-2 py-0.5 rounded">
                    {temp}°C
                  </span>
                </div>
                <input 
                  type="range" 
                  min="12" 
                  max="38" 
                  value={temp} 
                  onChange={(e) => setTemp(Number(e.target.value))}
                  className="w-full accent-orange-400 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Humidity Slider */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                    <Droplets className="w-4 h-4 text-blue-400" />
                    <span>Humidity Sensor</span>
                  </span>
                  <span className="font-mono text-xs font-bold text-slate-900 bg-blue-50 px-2 py-0.5 rounded">
                    {humidity}%
                  </span>
                </div>
                <input 
                  type="range" 
                  min="25" 
                  max="95" 
                  value={humidity} 
                  onChange={(e) => setHumidity(Number(e.target.value))}
                  className="w-full accent-blue-400 h-1.5 bg-slate-100 rounded-lg cursor-pointer"
                />
              </div>

              {/* Presence Checker */}
              <div className="flex items-center justify-between pt-1">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-700">
                  <UserCheck className="w-4 h-4 text-emerald-400" />
                  <span>Human Presence Sensor</span>
                </span>
                <button
                  onClick={() => setPresence(!presence)}
                  className={`text-xs px-3 py-1 font-bold tracking-wider uppercase rounded-full border transition-all ${
                    presence 
                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200' 
                      : 'bg-slate-100 text-slate-400 border-slate-200'
                  }`}
                >
                  {presence ? "Present" : "Absent"}
                </button>
              </div>
            </div>

            {/* Realtime Decisional Flowchart (Threshold Logic & State Output) */}
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block border-b border-slate-200/60 pb-2">Decision Logic Pipeline</span>
              
              <div className="grid grid-cols-1 gap-3 text-xs">
                
                {/* 1. Controller Routing block */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center text-[#7F83FF]">
                      <Activity className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-800 leading-none mb-1">State Evaluation (VPP)</h4>
                      <p className="text-slate-400 font-mono text-[10px]">Processing spatial dynamics...</p>
                    </div>
                  </div>
                  <span className="font-mono font-semibold px-2.5 py-1 bg-emerald-50 text-emerald-600 rounded">
                    SYS_OK
                  </span>
                </div>

                {/* 2. Microchip Decisional Loop block */}
                <div className="bg-white p-3.5 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
                    <span>C++ FIRMWARE SYSTEM</span>
                    <span>THRESHOLD SET: T16-T28 / H75</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-800 font-mono bg-slate-50 p-2.5 rounded border border-slate-100">
                    {`if (!presence) eco_mode();`}
                    <br />
                    {`else if (temp > 28) vent_open(100);`}
                    <br />
                    {`else if (humidity > 75) active_exhaust();`}
                    <br />
                    {`else comfort_loop();`}
                  </div>
                </div>

                {/* 3. Output Actuators Block (State Output) */}
                <div className="bg-[#FFFBF5] p-4 rounded-xl border border-amber-100/50 space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-mustard block">Mechanical State Outputs (Actuators)</span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-[11px]">
                    <div className="bg-white p-2 rounded border border-slate-100">
                      <span className="text-slate-400">Vent Flaps:</span>
                      <p className="text-slate-850 font-bold">{ventFlapState}</p>
                    </div>
                    <div className="bg-white p-2 rounded border border-slate-100">
                      <span className="text-slate-400">Thermo Valve:</span>
                      <p className="text-slate-850 font-bold">{valveState}</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Design Solution */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">05 / Design Solution</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Responsive Spatial Framework</p>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-slate-600 text-sm md:text-base leading-relaxed">
              The finalized physical design constructs a multi-layered architectural boundary shell. Controlled by an on-site microcontroller running reactive thread routines, the kinetic panels adapt in under 50ms to any changes in local parameters.
            </p>

            {/* Information Architecture / Modules bullet list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <Settings className="w-4 h-4 text-coral" />
                  <span>Interactive Dashboard</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Real-time SVG gauges monitoring relative humidity, ambient heat drawdowns and operational telemetry from remote capsules.
                </p>
              </div>

              <div className="p-5 bg-slate-50 border border-slate-100 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-slate-800 font-bold font-display text-sm">
                  <Zap className="w-4 h-4 text-mustard" />
                  <span>Dynamic Shading Module</span>
                </div>
                <p className="text-slate-500 text-xs leading-relaxed">
                  Dual-shaft servo drivers executing precise positional adjustments on micro kinetic solar slats based on photovoltaic feedback vectors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Validation & Outcome */}
      <section className="py-16 bg-slate-50/40 border-y border-slate-100 select-none">
        <div className="max-w-4xl mx-auto px-6 md:px-12 space-y-8">
          <div className="text-center md:text-left space-y-1">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">06 / Validation & Impact</h2>
            <p className="text-xl md:text-2xl font-display font-bold text-slate-900">Quantifiable Energy Stabilizations</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Power Drawdown</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 group-hover:text-coral transition-colors">
                -28%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                HVAC power demand reduction achieved via predictive microkinetic flap ventilation.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">Response Latency</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-[#7F83FF] group-hover:text-coral transition-colors">
                &lt;50ms
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                End-to-end tactile kinetic actuation response latency across critical environmental surges.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-100 space-y-2 group">
              <span className="text-xs font-mono font-semibold uppercase text-slate-400">System Accuracy</span>
              <div className="text-3xl md:text-4xl font-display font-extrabold text-[#EE9E5A] group-hover:text-coral transition-colors">
                99.4%
              </div>
              <p className="text-xs text-slate-500 leading-normal">
                Accuracy in execution of spatial comfort states mapped over 10,000 algorithmic logic ticks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Reflection */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-4">
            <h2 className="text-xs font-mono font-bold uppercase tracking-wider text-coral">07 / Reflection</h2>
            <p className="text-lg font-display font-bold text-slate-800 mt-2">Technical Insights & Growth</p>
          </div>
          <div className="md:col-span-8 space-y-5">
            <div className="space-y-3 text-slate-600 text-sm md:text-base leading-relaxed">
              <p>
                Developing this physical prototype forced me to synchronize spatial design constraints with algorithmic system behaviors. I had to solve analog-to-digital signal interference and build physical micro-ventilation flaps that operate within narrow physical envelopes.
              </p>
              <p>
                I learned the importance of hardware noise-filtering algorithms (e.g. implementing moving-average low-pass software filters) to prevent erratic kinetic actuation triggered by stray electronic resistance readings. This project solidified my understanding of systemic boundaries, reactive states and human-centered ergonomics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* View Full Case Study CTA */}
      <footer className="py-20 bg-slate-50 border-t border-slate-100 flex flex-col items-center justify-center text-center space-y-6 select-none">
        <p className="text-sm text-slate-500 font-mono">Shi Hanfei Frontend Engineer × Product Designer</p>
        <button
          onClick={onBackToHome}
          className="flex items-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-full text-base font-semibold shadow-xl hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
        >
          View Full Portfolio
          <ArrowRight className="w-5 h-5 text-coral" />
        </button>
      </footer>
    </div>
  );
}
