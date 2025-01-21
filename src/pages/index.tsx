import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Chatbot } from "@/components/blocks/chatbot";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function IndexPage() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 py-16 space-y-32">
      {/* Hero Section */}
      <motion.section
        className="text-center space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Badge variant="secondary" className="mb-4">
          Gestión de CMR
        </Badge>
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Simplifica la Gestión de tus Documentos de Transporte
        </h1>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Nuestra plataforma te permite gestionar fácilmente las cartas de porte (CMR) para cada viaje, generando documentos PDF accesibles y firmables por todas las partes involucradas.
        </p>
        <Button size="lg" className="mt-4" onClick={() => navigate('/login')}>
          Accede a tu cuenta <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </motion.section>

      {/* Features Section */}
      <motion.section
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="grid gap-8 md:grid-cols-3"
      >
        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Generación de PDF</h3>
              <p className="text-muted-foreground">
                Genera documentos PDF del CMR con todos los datos necesarios para cada viaje.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Acceso Seguro</h3>
              <p className="text-muted-foreground">
                Accede a tus documentos de manera segura y permite la firma digital por las partes involucradas.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={fadeInUp}>
          <Card>
            <CardContent className="pt-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <ArrowRight className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Gestión Eficiente</h3>
              <p className="text-muted-foreground">
                Optimiza la gestión de tus documentos de transporte con nuestra plataforma intuitiva.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </motion.section>

      {/* Chatbot Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="mt-16"
      >
        <h2 className="text-3xl font-bold text-center mb-8">Asistente Virtual</h2>
        <Chatbot />
      </motion.section>
    </div>
  );
}
