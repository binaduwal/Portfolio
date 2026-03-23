import { motion } from "framer-motion";
import InputField from "./ui/InputField";
import { GlassCard } from "./cards/GlassCard";
import { SectionHeading } from "./ui/SectionHeading";
import { Mail, MapPin, MessageSquare, Phone, Send } from "lucide-react";
import { data } from "../data";
import { useState } from "react";
import { sendContactForm } from "../services/ContactService";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");

    const result = await sendContactForm(formData);
    setSuccess(result.message);
    if (result.success)
      setFormData({ name: "", email: "", subject: "", message: "" });

    setLoading(false);
  };
  return (
    <section id="contact" className="py-20 px-8 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="mx-auto max-w-7xl relative">
        <SectionHeading subtitle="Get In Touch">Contact</SectionHeading>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-4xl font-black text-white leading-tight">
                Let's create something{" "}
                <span className="text-emerald-500">extraordinary</span>{" "}
                together.
              </h3>
              <p className="text-white/40 text-lg max-w-md">
                I'm currently available for freelance work and full-time
                positions. If you have a project in mind, feel free to reach
                out.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: data.basics.email,
                  href: `mailto:${data.basics.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: data.basics.phone,
                  href: `tel:${data.basics.phone}`,
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: data.basics.location,
                  href: "#",
                },
                {
                  icon: MessageSquare,
                  label: "Status",
                  value: "Available for Work",
                  href: "#",
                },
              ].map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  whileHover={{ y: -5 }}
                  className="p-6 bg-white/3 border border-white/5 rounded-2xl group transition-all hover:bg-white/5 hover:border-emerald-500/30"
                >
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 mb-4 group-hover:scale-110 transition-transform">
                    <item.icon size={20} />
                  </div>
                  <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-1">
                    {item.label}
                  </p>
                  <p className="text-sm font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {item.value}
                  </p>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8 md:p-12">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <InputField
                      label="Your Name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <InputField
                      label="Email Address"
                      name="email"
                      type="email"
                      onChange={handleChange}
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <InputField
                    label="Subject"
                    type="text"
                    name="subject"
                    onChange={handleChange}
                    placeholder="Project Inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <InputField
                    label="Message"
                    textarea
                    name="message"
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell me about your project..."
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-emerald-500 hover:bg-emerald-400 text-black font-black uppercase tracking-[0.2em] text-xs py-5 rounded-xl transition-all shadow-[0_10px_30px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 group"
                >
                  {loading ? "Sending..." : "Send Message"}

                  <Send
                    size={16}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </motion.button>
                {success && <p className="text-white mt-2">{success}</p>}
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
