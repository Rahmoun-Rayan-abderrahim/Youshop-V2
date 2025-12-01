import { Clock, Mail, MapPin, Phone } from "lucide-react";
import React from "react";

interface ContactItemData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

const data: ContactItemData[] = [
  {
    title: "Visit Us",
    subtitle: "Boumerdes, ALG",
    icon: (
      <MapPin className="h-6 w-6 text-green-500 group-hover:text-green transition-colors group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_#22ff55]" />
    ),
  },
  {
    title: "Call Us",
    subtitle: "+213 553910194",
    icon: (
      <Phone className="h-6 w-6 text-green-500 group-hover:text-green transition-colors group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_#22ff55]" />
    ),
  },
  {
    title: "Working Hours",
    subtitle: "Mon - Sat: 10:00 AM - 7:00 PM",
    icon: (
      <Clock className="h-6 w-6 text-green-500 group-hover:text-green transition-colors group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_#22ff55]" />
    ),
  },
  {
    title: "Email Us",
    subtitle: "info@YouShop.com",
    icon: (
      <Mail className="h-6 w-6 text-green-500 group-hover:text-green transition-colors group-hover:brightness-125 group-hover:drop-shadow-[0_0_8px_#22ff55]" />
    ),
  },
];

const FooterTop = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 border-b">
      {data?.map((item, index) => (
        <div
          key={index}
          className="flex items-center gap-3 group hover:bg-white-50 p-4 transition-colors hoverEffect"
        >
          {item?.icon}
          <div>
            <h3 className="font-semibold text-white-900 group-hover:text-white hoverEffect group-hover:brightness-125 group-hover:drop-shadow-[0_0_6px_white]">
              {item?.title}
            </h3>
            <p className="text-white-600 text-sm mt-1 group-hover:text-white-900 hoverEffect group-hover:brightness-125 group-hover:drop-shadow-[0_0_4px_white]">
              {item?.subtitle}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FooterTop;
