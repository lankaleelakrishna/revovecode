import { motion } from "framer-motion";
import { Mail, Shield, ArrowRight, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.5 } }),
};

const processSteps = [
  { step: "1", title: "Receive", desc: "We receive your email support request and log the issue." },
  { step: "2", title: "Analyze", desc: "Our experts analyze the problem and identify the root cause." },
  { step: "3", title: "Resolve", desc: "We implement the fix and resolve the issue promptly." },
  { step: "4", title: "Escalate", desc: "Complex issues are escalated to senior specialists." },
  { step: "5", title: "Follow-up", desc: "We follow up to ensure everything is working perfectly." },
];

const providers = ["AOL", "Gmail", "Yahoo", "Outlook", "Cox.net"];

const EmailSupport = () => {
  return (
    <div>
      <section className="bg-primary py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary/20">
              <Mail className="h-10 w-10 text-secondary" />
            </div>
            <h1 className="mb-4 font-display text-4xl font-bold text-primary-foreground md:text-5xl">Email Support</h1>
            <p className="mx-auto max-w-2xl text-lg text-primary-foreground/70">Professional email support services — setup, security, and troubleshooting for all providers.</p>
          </motion.div>
        </div>
      </section>

      {/* Security Alert */}
      <section className="bg-destructive/5 py-16">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
            <Shield className="mx-auto mb-4 h-12 w-12 text-secondary" />
            <h2 className="mb-3 font-display text-3xl font-bold">Email Security Matters</h2>
            <p className="text-lg text-muted-foreground">
              <span className="font-semibold text-foreground">91% of cyberattacks</span> start with a phishing email. Our team helps protect your inbox with advanced security measures, spam filtering, and employee training.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process Flow */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold">Our Support Process</h2>
            <p className="text-muted-foreground">A streamlined process to get your email issues resolved fast.</p>
          </div>
          <div className="mx-auto flex max-w-4xl flex-col gap-4 md:flex-row md:items-start md:gap-2">
            {processSteps.map((s, i) => (
              <motion.div key={s.step} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="flex flex-1 flex-col items-center text-center">
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary font-display text-xl font-bold text-secondary-foreground">
                  {s.step}
                </div>
                <h3 className="mb-1 font-display font-semibold">{s.title}</h3>
                <p className="text-xs text-muted-foreground">{s.desc}</p>
                {i < processSteps.length - 1 && (
                  <ArrowRight className="mt-3 hidden h-5 w-5 rotate-90 text-muted-foreground md:block md:rotate-0" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Providers */}
      <section className="bg-muted/50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-8 font-display text-3xl font-bold">Supported Email Providers</h2>
          <div className="mx-auto flex max-w-2xl flex-wrap justify-center gap-4">
            {providers.map((p, i) => (
              <motion.div key={p} custom={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
                <Card className="border-border/50">
                  <CardContent className="flex items-center gap-2 px-6 py-4">
                    <CheckCircle className="h-5 w-5 text-secondary" />
                    <span className="font-display font-semibold">{p}</span>
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

export default EmailSupport;
