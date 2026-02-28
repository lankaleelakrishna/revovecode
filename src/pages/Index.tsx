import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Printer,
  Wifi,
  Monitor,
  Mail,
  Phone,
  Shield,
  Clock,
  Users,
  Globe,
  Star,
  ChevronRight,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5 },
  }),
};

const services = [
  {
    icon: Printer,
    title: "Printer Support",
    desc: "Fix paper jams, connectivity issues, print quality problems, and more.",
    path: "/printer-support",
  },
  {
    icon: Wifi,
    title: "Wi-Fi Support",
    desc: "Resolve slow speeds, dead spots, connection drops, and security concerns.",
    path: "/wifi-support",
  },
  {
    icon: Monitor,
    title: "Computer Support",
    desc: "Handle slow performance, crashes, malware, BSOD, and hardware failures.",
    path: "/computer-support",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Email security, account setup, troubleshooting, and provider support.",
    path: "/email-support",
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "100K+", label: "Satisfied Customers" },
  { value: "50+", label: "Expert Technicians" },
  { value: "24/7", label: "Support Available" },
];

const whyUs = [
  { icon: Clock, title: "24/7 Support", desc: "Round-the-clock availability for all your IT needs." },
  { icon: Shield, title: "Certified Experts", desc: "Our team holds top industry certifications." },
  { icon: Users, title: "10+ Years Experience", desc: "A decade of trusted IT support excellence." },
  { icon: Globe, title: "Global Coverage", desc: "Remote support for clients worldwide." },
];

const testimonials = [
  { name: "Sarah M.", role: "Small Business Owner", text: "RJTEK saved our office when all printers went down before a major deadline. Fast, professional, and affordable!", rating: 5 },
  { name: "James K.", role: "IT Manager", text: "Their Wi-Fi support team resolved our network issues in under 30 minutes. Highly recommended for any business.", rating: 5 },
  { name: "Linda R.", role: "Freelancer", text: "I was locked out of my email for days. Reove's team got me back in quickly and secured my account. Lifesavers!", rating: 5 },
];

const faqs = [
  { q: "What services does   RJTEK offer?", a: "We provide comprehensive IT support including Printer Support, Wi-Fi Support, Computer Support, and Email Support for businesses and individuals." },
  { q: "Is your support available 24/7?", a: "Yes! Our team is available around the clock to assist you with any IT issues, ensuring minimal downtime for your business." },
  { q: "Do you offer remote support?", a: "Absolutely. Most of our support services are delivered remotely, allowing us to resolve issues quickly without on-site visits." },
  { q: "How quickly can I get help?", a: "Our average response time is under 15 minutes. For critical issues, we prioritize immediate assistance." },
  { q: "What are your pricing plans?", a: "We offer flexible pricing including per-incident, monthly, and annual plans. Contact us for a customized quote." },
];

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-24 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(30_95%_55%/0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(220_60%_30%/0.3),transparent_60%)]" />
        <div className="container relative mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-4 inline-block rounded-full bg-secondary/20 px-4 py-1.5 text-sm font-medium text-secondary">
                Trusted by 100,000+ customers
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 font-display text-4xl font-bold leading-tight text-primary-foreground md:text-6xl"
            >
              Your Digital Ally for{" "}
              <span className="text-secondary">IT Support</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 text-lg text-primary-foreground/70 md:text-xl"
            >
              Expert technical support for printers, Wi-Fi, computers, and email.
              Fast, reliable, and available 24/7.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 text-base px-8">
                  Get Help Now <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+12095404065">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white hover:bg-white/20 border-transparent text-base px-8">
                  <Phone className="h-5 w-5" /> Call Us
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">Our Services</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Comprehensive IT support solutions tailored to keep your business running smoothly.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Link to={s.path}>
                  <Card className="group h-full border-border/50 transition-all hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/5">
                    <CardContent className="flex flex-col items-center p-8 text-center">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-secondary/10 text-secondary transition-transform group-hover:scale-110">
                        <s.icon className="h-8 w-8" />
                      </div>
                      <h3 className="mb-2 font-display text-xl font-semibold">{s.title}</h3>
                      <p className="mb-4 text-sm text-muted-foreground">{s.desc}</p>
                      <span className="flex items-center gap-1 text-sm font-medium text-secondary">
                        Learn More <ChevronRight className="h-4 w-4" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="font-display text-4xl font-bold text-secondary md:text-5xl">{s.value}</div>
                <div className="mt-2 text-sm text-primary-foreground/70">{s.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl items-center gap-12 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                About <span className="text-secondary">RJTEK</span>
              </h2>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                 RJTEK LLC is a leading IT support company dedicated to providing reliable, fast, and affordable technical solutions. With over a decade of experience, our certified team handles everything from printer issues to complex network problems.
              </p>
              <p className="mb-6 leading-relaxed text-muted-foreground">
                We believe technology should empower, not frustrate. That's why we've built a support system that puts you first — with 24/7 availability, rapid response times, and solutions that work.
              </p>
              <Link to="/contact">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2">
                  Get Started <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/5 p-8">
                <div className="flex h-full flex-col items-center justify-center gap-6 rounded-xl border border-border/50 bg-card p-8">
                  <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-secondary font-display text-4xl font-bold text-secondary-foreground">
                    R
                  </div>
                  <div className="text-center">
                    <p className="font-display text-2xl font-bold">Your Digital Ally</p>
                    <p className="mt-1 text-sm text-muted-foreground">Since 2014</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">Why Choose Us</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              We stand out from the competition with our commitment to excellence.
            </p>
          </div>
          <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="flex gap-4 p-6">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="mb-1 font-display text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">What Our Clients Say</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Don't just take our word for it — hear from our satisfied customers.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <Card className="h-full border-border/50">
                  <CardContent className="flex flex-col p-6">
                    <div className="mb-3 flex gap-1">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">"{t.text}"</p>
                    <div>
                      <p className="font-semibold">{t.name}</p>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-muted/50 py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="mb-14 text-center">
            <h2 className="mb-3 font-display text-3xl font-bold md:text-4xl">Frequently Asked Questions</h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Got questions? We've got answers.
            </p>
          </div>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible>
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left font-display">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="mb-4 font-display text-3xl font-bold text-primary-foreground md:text-4xl">
              Ready to Solve Your IT Issues?
            </h2>
            <p className="mb-8 text-lg text-primary-foreground/70">
              Get expert support today. We're just a call or click away.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link to="/contact">
                <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 gap-2 px-8 text-base">
                  Contact Us <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+12095404065">
                <Button size="lg" variant="outline" className="gap-2 bg-white/10 text-white hover:bg-white/20 px-8 text-base">
                  <Phone className="h-5 w-5" /> +1 209 540 4065
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
