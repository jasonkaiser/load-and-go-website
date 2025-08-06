import { useLocation, useNavigate } from "react-router-dom";
import { useCallback } from "react";

import { BookOpenIcon, InfoIcon, LifeBuoyIcon } from "lucide-react";
import logo from "../../assets/logo2.png";
import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const navigationLinks = [
  { href: "home", label: "Home", scrollToSection: true },
  { href: "about", label: "About Us", scrollToSection: true },
  { href: "contact", label: "Contact", scrollToSection: true },
  {
    label: "Services",
    submenu: true,
    type: "description",
    items: [
      {
        href: "/services/small-large-moves",
        label: "Small and large moves",
        description: "",
      },
      {
        href: "/services/express-moves",
        label: "Express moves",
        description: "",
      },
      {
        href: "/services/packing-service",
        label: "Packing service",
        description: "",
      },
      {
        href: "/services/furniture-ad",
        label: "Furniture assembly & disassembly",
        description: "",
      },
      {
        href: "/services/furniture-disposal",
        label: "Disposal of old furniture",
        description: "",
      },
      {
        href: "/services/personal-contact",
        label: "Personal contact",
        description: "",
      },
    ],
  },
];

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollLink = useCallback(
    (e, sectionId) => {
      e.preventDefault();

      if (location.pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        navigate(`/#${sectionId}`);
      }
    },
    [navigate, location]
  );

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-[80%] mx-auto px-4 md:px-6 shadow-xl rounded-2xl backdrop-blur-md bg-white/30 mt-5">
      <div className="flex h-16 items-center justify-between gap-10">
        <div className="flex items-center gap-2">
          <img src={logo} width={76} height={76} alt="Logo" />
          <div className="w-[0.2px] h-10 bg-gray-300 max-md:hidden ml-4"></div>

        
          <Popover>
            <PopoverTrigger asChild>
              <Button className="group size-10 md:hidden !outline-none" variant="ghost" size="icon">
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="start" className="w-64 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0 md:gap-2">
                  {navigationLinks.map((link, index) => (
                    <NavigationMenuItem key={index} className="w-full">
                      {link.submenu ? (
                        <>
                          <div className="text-muted-foreground px-2 py-1.5 text-xs font-medium">{link.label}</div>
                          <ul>
                            {link.items.map((item, itemIndex) => (
                              <li key={itemIndex}>
                                <NavigationMenuLink asChild className="py-1.5 block">
                                  <Link to={item.href}>{item.label}</Link>
                                </NavigationMenuLink>
                              </li>
                            ))}
                          </ul>
                        </>
                      ) : link.scrollToSection ? (
                        <NavigationMenuLink asChild className="py-1.5 block">
                          <a
                            href={`#${link.href}`}
                            onClick={(e) => handleScrollLink(e, link.href)}
                          >
                            {link.label}
                          </a>
                        </NavigationMenuLink>
                      ) : (
                        <NavigationMenuLink asChild className="py-1.5 block">
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      )}
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>

     
          <NavigationMenu viewport={false} className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {navigationLinks.map((link, index) => (
                <NavigationMenuItem key={index}>
                  {link.submenu ? (
                    <>
                      <NavigationMenuTrigger className="!text-primary !bg-transparent px-2 py-1.5 font-medium !outline-none">
                        {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-50 p-1">
                        <ul className={cn(link.type === "description" ? "min-w-64" : "min-w-48")}>
                          {link.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <NavigationMenuLink asChild className="py-1.5 block">
                                <Link to={item.href}>
                                  <div className="space-y-1">
                                    <div className="font-medium">{item.label}</div>
                                    {item.description && (
                                      <p className="text-muted-foreground line-clamp-2 text-xs">{item.description}</p>
                                    )}
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : link.scrollToSection ? (
                    <NavigationMenuLink asChild className="text-muted-foreground hover:text-primary py-1.5 font-medium">
                      <a
                        href={`#${link.href}`}
                        onClick={(e) => handleScrollLink(e, link.href)}
                      >
                        {link.label}
                      </a>
                    </NavigationMenuLink>
                  ) : (
                    <NavigationMenuLink asChild className="text-muted-foreground hover:text-primary py-1.5 font-medium">
                      <Link to={link.href}>{link.label}</Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="text-md hover:bg-white hover:border-2 hover:border-primary transition"
          >
            <a
              href="#services"
              className="text-red-500"
              onClick={(e) => handleScrollLink(e, "services")}
            >
              Start now
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
