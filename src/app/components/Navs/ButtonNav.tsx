"use client";

import { Button } from "@nextui-org/react";

export default function ButtonNav({
  className,
  variant,
  text,
}: {
  className?: string;
  variant: any;
  text: string;
}) {
  return (
    <Button variant={variant} className={className} radius="sm">
      {text}
    </Button>
  );
}

//
