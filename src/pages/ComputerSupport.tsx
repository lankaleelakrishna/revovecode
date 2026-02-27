import { motion } from "framer-motion";
import { Monitor, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const issues = [
  { problem: "Slow Performance", solution: "Clear temporary files, disable startup programs, upgrade RAM, run disk cleanup, and check for malware." },
  { problem: "Software Crashes", solution: "Update software and OS, check system requirements, reinstall problematic applications, and repair corrupted files." },
  { problem: "Virus & Malware", solution: "Run full antivirus scan, remove suspicious programs, update security software, and enable real-time protection." },
  { problem: "Internet Connectivity", solution: "Reset network adapter, flush DNS cache, update network drivers, and check firewall settings." },
  { problem: "Hardware Failures", solution: "Diagnose with built-in tools, check connections, replace faulty components, and ensure proper cooling." },
  { problem: "Blue Screen of Death (BSOD)", solution: "Note error codes, update drivers, check RAM with memory diagnostic tool, and scan for corrupted system files." },
  { problem: "Data Loss / Corruption", solution: "Use data recovery software, restore from backups, check hard drive health, and implement regular backup schedules." },
  { problem: "Overheating", solution: "Clean dust from vents and fans, replace thermal paste, ensure proper airflow, and use a cooling pad for laptops." },
];

const ComputerSupport = () => {
  return (
    <div>
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/20">
              <Monitor className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Computer Support</h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">Comprehensive PC & Mac support for performance, security, and hardware issues.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold">Common Computer Issues & Solutions</h2>
            <p className="text-muted-foreground">From slow PCs to blue screens, we fix it all.</p>
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

export default ComputerSupport;
