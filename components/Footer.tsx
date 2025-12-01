"use client";
import Containner from "./Container";
import Image from "next/image";
import {
  categoriesData,
  headerData,
  productType,
  quickLinksData,
} from "@/constants/data";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import Link from "next/link";
import {
  ArrowBigRightDashIcon,
  LocateFixedIcon,
  MailIcon,
  PhoneCall,
} from "lucide-react";
import SocialMedia from "./SocialMedia";
import Logo from "./Logo";
import FooterTop from "./FooterTop";
import { SubText, SubTitle } from "./ui/text";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <Containner>
        <FooterTop />
        <div className="flex flex-col md:flex-row justify-between py-8">
          <div className="w-full text-center md:w-[20%] md:text-left  ">
            <Logo />
            <p className="mt-4 mb-6 text-sm">
              Making eco-friendly choices accessible to everyone with
              sustainable products for everyday life.
            </p>
            <SocialMedia />
          </div>

          {/* Quick Links Desktop*/}
          <div className="hidden md:w-[20%] md:block mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul>
              {quickLinksData?.map((item) => (
                <li key={item.title}>
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                  >
                    <ArrowBigRightDashIcon size={16} /> {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links Mobile*/}
          <Accordion
            type="single"
            collapsible
            className="w-full md:hidden"
            defaultValue="item-1"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>Quick Links</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {quickLinksData?.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-200 hover:text-green-400 flex gap-2 items-center"
                  >
                    <ArrowBigRightDashIcon size={16} /> {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          {/* Categories Desktop*/}
          <div className="hidden md:w-[20%] md:block mt-8 md:mt-0">
            <h3 className="text-lg font-semibold mb-2">Categories</h3>
            <ul>
              {categoriesData?.map((item) => (
                <li key={item.title}>
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-300 hover:text-green-400 flex gap-2 items-center"
                  >
                    <ArrowBigRightDashIcon size={16} /> {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Categories Desktop*/}
          <Accordion
            type="single"
            collapsible
            className="w-full md:hidden"
            defaultValue="item-1"
          >
            <AccordionItem value="item-2">
              <AccordionTrigger>Categories</AccordionTrigger>
              <AccordionContent className="flex flex-col gap-4 text-balance">
                {categoriesData?.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="text-gray-200 hover:text-green-400 flex gap-2 items-center"
                  >
                    <ArrowBigRightDashIcon size={16} /> {item.title}
                  </Link>
                ))}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <div className="space-y-4">
            <SubTitle className="text-white">Newsletter</SubTitle>
            <SubText className="text-white">
              Subscribe to our newsletter to receive updates and exclusive
              offers
            </SubText>
            <form className="space-y-3">
              <Input
                placeholder="Enter your email"
                type="email"
                required
                className="w-7/8"
              />
              <Button className="w-38 bg-shop_light_green hover:bg-green-500">
                Subscribe
              </Button>
            </form>
          </div>
          {/* Contact Us */}
        </div>
        <div>
          <hr className="my-2 border-gray-700" />
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} <Logo className="text-sm" /> . All
            rights reserved.
          </p>
        </div>
      </Containner>
    </footer>
  );
};

export default Footer;
