import { AnimatedTestimonials } from "./animated-testimonials";

function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Le souci du détail et les fonctionnalités innovantes ont complètement transformé notre workflow. C'est exactement ce que nous recherchions.",
      name: "Sarah Chen",
      designation: "Product Manager chez TechFlow",
      src: "/product-placeholder.webp", // Placeholder local
    },
    {
      quote:
        "La mise en place a été fluide et les résultats ont dépassé nos attentes. La flexibilité de la plateforme est remarquable.",
      name: "Michael Rodriguez",
      designation: "CTO chez InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Cette solution a considérablement amélioré la productivité de notre équipe. L'interface intuitive simplifie les tâches complexes.",
      name: "Emily Watson",
      designation: "Directrice des opérations chez CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Support exceptionnel et fonctionnalités robustes. Il est rare de trouver un produit qui tient toutes ses promesses.",
      name: "James Kim",
      designation: "Engineering Lead chez DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "La scalabilité et la performance ont changé la donne pour notre organisation. Je recommande vivement à toute entreprise en croissance.",
      name: "Lisa Thompson",
      designation: "VP Technology chez FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} autoplay />;
}

export { AnimatedTestimonialsDemo }; 