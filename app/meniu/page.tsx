import type { Metadata } from "next";
import { og } from "@/lib";
import { CtaBand, PageHero } from "@/components/Sections";
import { MenuFilter } from "@/components/MenuFilter";

export const metadata: Metadata = {
  title: "Meniu",
  description: "Meniul restaurantului Conacul Brumărel (firmă fictivă, site demonstrativ): ciorbe, feluri principale, grătar, deserturi și băuturi.",
  alternates: { canonical: "meniu/" },
  openGraph: og("Meniu | Conacul Brumărel", "meniu/"),
};

export default function MeniuPage() {
  return (
    <>
      <PageHero photo="ciorba" eyebrow="Bucătărie românească" title="Meniu" text="Ciorbe, preparate gătite în casă, grătar și deserturi. Pentru meniul zilei și comenzi, sunați-ne." />
      <div className="mx-auto max-w-6xl px-5 pt-6 pb-14">
        <MenuFilter />
      </div>
      <CtaBand />
    </>
  );
}
