import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";

export default function Page() {
  return (
    <div className="min-h-[66vh] relative overflow-hidden">
      {/* main content */}
      <div className="mt-30 mb-30 md:mt-50 relative z-40">
        <ScrollReveal>
          <Newsletter />
        </ScrollReveal>
      </div>
      <div className="md:absolute md:bottom-0 md:left-0 md:right-0 relative"></div>
    </div>
  );
}
