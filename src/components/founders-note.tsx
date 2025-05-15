"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { PawPrint } from "lucide-react";

interface FoundersNoteProps extends React.HTMLAttributes<HTMLDivElement> {
  founderName: string;
  founderRole: string;
  petName: string;
  message: string;
  founderImage?: string;
}

const FoundersNote = React.forwardRef<HTMLDivElement, FoundersNoteProps>(
  ({ className, founderName, founderRole, petName, message, founderImage, ...props }, ref) => {
    return (
      <Card
        ref={ref}
        className={cn(
          "relative overflow-hidden bg-white rounded-[32px] ring ring-gray-200 transition-all hover:shadow-lg",
          className
        )}
        {...props}
      >
        <CardContent className="p-6 md:p-8">
          <div className="absolute right-6 top-6 text-6xl font-serif text-muted-foreground/20">
            "
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="relative shrink-0">
              <div className="relative size-24 overflow-hidden rounded-full border-2 border-primary/10 md:size-32">
                {founderImage ? (
                  <Avatar className="size-full">
                    <AvatarImage src={founderImage} alt={`${founderName} and ${petName}`} />
                    <AvatarFallback className="text-lg">{founderName[0]}{petName[0]}</AvatarFallback>
                  </Avatar>
                ) : (
                  <div className="flex size-full items-center justify-center bg-muted">
                    <PawPrint className="size-10 text-primary/60" />
                  </div>
                )}
              </div>
              <div className="absolute -bottom-1 -right-1 flex size-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                <PawPrint className="size-5" />
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <p className="text-pretty text-base text-muted-foreground leading-relaxed">
                {message}
              </p>

              <div className="flex flex-col">
                <div className="flex items-center gap-1">
                  <h3 className="font-semibold text-foreground">— {founderName}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {founderRole} & {petName}'s dad
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }
);

FoundersNote.displayName = "FoundersNote";

function FoundersNoteDemo() {
  return (
    <div className="container py-10">
      <FoundersNote
        founderName="Julie"
        founderRole="Founder"
        petName="Pixel"
        founderImage="https://i.pravatar.cc/300?img=32"
        message="When I adopted Pixel I wanted a keepsake that didn't cost a fortune or take weeks. GetPawtrait is my promise: premium, affordable memories for every animal lover. We're a small, pet-obsessed team that designs, prints, and packs every order as if it were our own."
        className="max-w-3xl mx-auto"
      />
    </div>
  );
}

export default FoundersNoteDemo;
export { FoundersNote }; 