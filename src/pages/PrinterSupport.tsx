import { motion } from "framer-motion";
import { Printer, AlertTriangle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const issues = [
  { problem: "Ink Cartridges Empty/Low", solution: "Replace cartridges or refill ink. Check cartridge compatibility with your printer model. Run printer maintenance tools to optimize ink usage." },
  { problem: "Slow Wi-Fi Printing", solution: "Check network connection, move printer closer to router, update printer firmware, or switch to USB for faster speeds." },
  { problem: "Misaligned Text", solution: "Run the printer's alignment utility from settings. Clean print heads and ensure proper paper loading." },
  { problem: "Streaky/Ugly Prints", solution: "Clean print heads, replace worn cartridges, and run the printer's built-in cleaning cycle." },
  { problem: "Paper Jams", solution: "Gently remove stuck paper, check for debris, use correct paper size and type, and clean rollers." },
  { problem: "Printer Offline", solution: "Check USB/Wi-Fi connection, restart printer and computer, reinstall printer drivers, and set as default printer." },
  { problem: "Loaded Queue", solution: "Clear the print queue from your computer's printer settings, restart the print spooler service." },
  { problem: "Virtual Printer Issues", solution: "Reinstall virtual printer software, check default printer settings, and update drivers." },
];

const PrinterSupport = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/20">
              <Printer className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Printer Support</h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">Expert solutions for all your printer problems — from paper jams to connectivity issues.</p>
          </motion.div>
        </div>
      </section>

      {/* Issues Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold">Common Printer Issues & Solutions</h2>
            <p className="text-muted-foreground">We diagnose and fix these problems quickly and efficiently.</p>
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

export default PrinterSupport;
