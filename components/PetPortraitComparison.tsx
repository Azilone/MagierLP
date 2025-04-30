import React from "react";
import { Check, X, Crown, Palette, Camera, Clock, Award, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";

interface ComparisonFeature {
  name: string;
  description: string;
  ourService: boolean;
  petCanva: boolean;
  crownAndPaw: boolean;
  happyPetPrints: boolean;
}

interface ComparisonProps {
  className?: string;
}

const features: ComparisonFeature[] = [
  {
    name: "AI-Enhanced Quality",
    description: "Advanced AI technology for stunning, consistent results",
    ourService: true,
    petCanva: false,
    crownAndPaw: false,
    happyPetPrints: true,
  },
  {
    name: "Premium Materials",
    description: "High-quality canvas and archival inks that won't fade",
    ourService: true,
    petCanva: true,
    crownAndPaw: true,
    happyPetPrints: false,
  },
  {
    name: "Unlimited Styles",
    description: "Choose from hundreds of artistic styles and themes",
    ourService: true,
    petCanva: false,
    crownAndPaw: true,
    happyPetPrints: false,
  },
  {
    name: "Same-Day Delivery",
    description: "Get your digital portraits within hours, not days",
    ourService: true,
    petCanva: false,
    crownAndPaw: false,
    happyPetPrints: false,
  },
  {
    name: "Affordable Pricing",
    description: "Premium quality at competitive prices",
    ourService: true,
    petCanva: false,
    crownAndPaw: false,
    happyPetPrints: true,
  },
  {
    name: "Money-back guarantee",
    description: "Not satisfied? We offer a 100% money-back guarantee",
    ourService: true,
    petCanva: false,
    crownAndPaw: true,
    happyPetPrints: false,
  },
];

const competitors = [
  {
    name: "Our Service",
    icon: <Award className="h-6 w-6 text-primary" />,
    highlight: true,
  },
  {
    name: "PetCanva",
    icon: <Palette className="h-6 w-6" />,
    highlight: false,
  },
  {
    name: "Crown & Paw",
    icon: <Crown className="h-6 w-6" />,
    highlight: false,
  },
  {
    name: "HappyPetPrints",
    icon: <Camera className="h-6 w-6" />,
    highlight: false,
  },
];

export function PetPortraitComparison({ className }: ComparisonProps) {
  return (
    <div className={cn("w-full py-12 lg:py-24", className)}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center gap-4 mb-12 text-center">
          <Badge variant="secondary" className="mb-2">Comparison</Badge>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Why Choose Our Pet Portrait Service?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            See how our AI-powered pet portrait service delivers faster, better results at a more affordable price.
          </p>
        </div>

        <div className="overflow-auto rounded-lg border border-border">
          <Table className="bg-background min-w-[800px]">
            <TableHeader>
              <TableRow className="border-y-0 *:border-border hover:bg-transparent [&>:not(:first-child)]:border-l">
                <TableHead className="w-1/3 py-6">Features</TableHead>
                {competitors.map((competitor) => (
                  <TableHead 
                    key={competitor.name} 
                    className={cn(
                      "text-center py-6",
                      competitor.highlight && "bg-primary/5"
                    )}
                  >
                    <div className="flex flex-col items-center gap-2">
                      {competitor.icon}
                      <span className={cn(
                        "font-semibold",
                        competitor.highlight && "text-primary"
                      )}>
                        {competitor.name}
                      </span>
                    </div>
                  </TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              {features.map((feature) => (
                <TableRow key={feature.name} className="*:border-border [&>:not(:first-child)]:border-l">
                  <TableCell className="font-medium">
                    <div>
                      <p>{feature.name}</p>
                      <p className="text-sm text-muted-foreground mt-1">{feature.description}</p>
                    </div>
                  </TableCell>
                  <TableCell className={cn("text-center", competitors[0].highlight && "bg-primary/5")}>
                    {feature.ourService ? (
                      <Check className="inline-flex stroke-emerald-600" size={24} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <X className="inline-flex stroke-red-600" size={24} strokeWidth={2} aria-hidden="true" />
                    )}
                    <span className="sr-only">{feature.ourService ? "Yes" : "No"}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.petCanva ? (
                      <Check className="inline-flex stroke-emerald-600" size={24} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <X className="inline-flex stroke-red-600" size={24} strokeWidth={2} aria-hidden="true" />
                    )}
                    <span className="sr-only">{feature.petCanva ? "Yes" : "No"}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.crownAndPaw ? (
                      <Check className="inline-flex stroke-emerald-600" size={24} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <X className="inline-flex stroke-red-600" size={24} strokeWidth={2} aria-hidden="true" />
                    )}
                    <span className="sr-only">{feature.crownAndPaw ? "Yes" : "No"}</span>
                  </TableCell>
                  <TableCell className="text-center">
                    {feature.happyPetPrints ? (
                      <Check className="inline-flex stroke-emerald-600" size={24} strokeWidth={2} aria-hidden="true" />
                    ) : (
                      <X className="inline-flex stroke-red-600" size={24} strokeWidth={2} aria-hidden="true" />
                    )}
                    <span className="sr-only">{feature.happyPetPrints ? "Yes" : "No"}</span>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3">
              <Clock className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Lightning Fast</h3>
            </div>
            <p className="text-muted-foreground">
              Get your stunning pet portraits in hours, not days or weeks. Our AI technology works at incredible speed.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Superior Quality</h3>
            </div>
            <p className="text-muted-foreground">
              Our AI technology ensures consistently high-quality results that capture your pet's unique personality.
            </p>
          </div>
          
          <div className="flex flex-col gap-4 p-6 rounded-xl border border-border bg-card">
            <div className="flex items-center gap-3">
              <Award className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Best Value</h3>
            </div>
            <p className="text-muted-foreground">
              Premium quality at a fraction of the cost of traditional pet portrait services.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
} 