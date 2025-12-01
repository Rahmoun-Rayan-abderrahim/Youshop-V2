import { Facebook, Github, Linkedin, Youtube, Instagram } from "lucide-react";
import React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const socialLink = [
  {
    title: "Youtube",
    href: "https://www.youtube.com",
    icon: <Youtube className="w-5 h-5" />,
    hoverColor: "hover:text-[#FF0000] hover:border-[#FF0000]", // Red
  },
  {
    title: "Github",
    href: "https://github.com/Rahmoun-Rayan-abderrahim",
    icon: <Github className="w-5 h-5" />,
    hoverColor: "hover:text-[#181717] hover:border-[#181717]", // Dark gray
  },
  {
    title: "Linkedin",
    href: "https://www.linkedin.com/in/abderrahmane-rayan-rahmoun-860a7b272/D",
    icon: <Linkedin className="w-5 h-5" />,
    hoverColor: "hover:text-[#0A66C2] hover:border-[#0A66C2]", // Blue
  },
  {
    title: "Facebook",
    href: "https://www.facebook.com/Abdourah09",
    icon: <Facebook className="w-5 h-5" />,
    hoverColor: "hover:text-[#1877F2] hover:border-[#1877F2]", // FB blue gradient base
  },
  {
    title: "Instagram",
    href: "https://www.instagram.com/abdou.rah9",
    icon: <Instagram className="w-5 h-5" />,
    hoverColor: "hover:text-[#F56040] hover:border-[#F56040]", // Insta orange/pink blend
  },
];

const SocialMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item) => (
          <Tooltip key={item?.title}>
            <TooltipTrigger asChild>
              <Link
                key={item?.title}
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hoverEffect transition-colors",
                  item?.hoverColor, // only change added
                  iconClassName
                )}
              >
                {item?.icon}
              </Link>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SocialMedia;
