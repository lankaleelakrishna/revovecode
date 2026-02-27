import { motion } from "framer-motion";
import { Wifi, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const issues = [
  { problem: "Slow Wi-Fi Speed", solution: "Run a speed test, restart router, reduce connected devices, upgrade your internet plan, or switch to 5GHz band." },
  { problem: "Intermittent Connection Drops", solution: "Update router firmware, check for interference, reposition router, and consider a mesh network system." },
  { problem: "Weak Signal / Dead Spots", solution: "Use Wi-Fi extenders or mesh systems, reposition router centrally, and remove physical obstructions." },
  { problem: "Network Not Showing Up", solution: "Restart router and device, check if SSID broadcast is enabled, and ensure wireless adapter is working." },
  { problem: "Incorrect Password", solution: "Reset router password via admin panel, check for caps lock, or perform factory reset if needed." },
  { problem: "Security Concerns / Unauthorized Access", solution: "Change default credentials, enable WPA3 encryption, create a guest network, and monitor connected devices." },
  { problem: "Router Overheating", solution: "Ensure proper ventilation, place on a hard surface, clean dust, and consider a cooling pad." },
  { problem: "Incompatible Router Settings", solution: "Update firmware, reset to factory defaults, configure proper channel width, and ensure device compatibility." },
];

const WifiSupport = () => {
  return (
    <div>
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/20">
              <Wifi className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Wi-Fi Support</h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">Stay connected with expert Wi-Fi troubleshooting and network optimization.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold">Common Wi-Fi Issues & Solutions</h2>
            <p className="text-muted-foreground">Our experts resolve network problems quickly to keep you connected.</p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2">
            {issues.map((item, i) => (
              <motion.div key={item.problem} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="h-full border-border/50 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="mb-3 flex items-center gap-2">
                      <AlertTriangle className="h-5 w-5 text-secondary" />
                      <h3 className="font-display text-lg font-semibold">{item.problem}</h3>
                    </div>
                    <div className="flex items-start gap-2">
                      <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-secondary" />
                      <p className="text-sm text-muted-foreground">{item.solution}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WifiSupport;
