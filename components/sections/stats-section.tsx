import { Container } from "@/components/layout/container";
import { GridCrossing } from "@/components/layout/grid-crossing";
import { Heading, Text } from "@/components/ui/typography";
import { cn } from "@/lib/utils";

type Stat = {
  value: string;
  /** Rendered in a lighter tone so the figure itself stays dominant. */
  suffix?: string;
  label: string;
  highlight?: boolean;
};

const STATS: Stat[] = [

  {
    value: "3",
    suffix: "+",
    label: "Years of experience",
    // highlight: true,
  },
  {
    value: "100",
    suffix: "%",
    label: "Trust us for their next project",
    // highlight: true,

  },
  {
    value: "11", suffix: "+", label: "Building quality products",

  },

  { value: "4", label: "Outstanding product" },
];

const StatsSection = () => {
  return (
    <section className="relative z-10 border-b border-dashed border-primary/50 bg-brand-light">
      <Container px={false} crossings={["tl", "tr", "bl", "br"]}>
        {STATS.map((stat, index) => {
          // Two per row below lg, all four in a row from lg.
          const opensMobileRow = index % 2 === 0;
          const inFirstMobileRow = index < 2;
          const isLast = index === STATS.length - 1;
          const isHighlight = Boolean(stat.highlight);

          return (
            <div
              key={stat.label}
              className={cn(
                "relative col-span-2 flex flex-col gap-1 border-dashed border-primary/50 px-gutter py-8 lg:col-span-3 lg:px-gutter-lg lg:py-10",
                opensMobileRow && "border-r",
                inFirstMobileRow && "border-b",
                "lg:border-b-0",
                isLast ? "lg:border-r-0" : "lg:border-r",
                isHighlight && "bg-accent-yellow"
              )}
            >
              {/* Where this cell's rules end. Arms with no rule behind them are clipped. */}
              {!isLast && (
                <>
                  <GridCrossing at="tr" clip="top" className="hidden lg:block" />
                  <GridCrossing
                    at="br"
                    clip="bottom"
                    className="hidden lg:block"
                  />
                </>
              )}
              {index === 0 && (
                <>
                  <GridCrossing at="tr" clip="top" className="lg:hidden" />
                  <GridCrossing at="bl" clip="left" className="lg:hidden" />
                  {/* Row rule meets column rule — a true four-way crossing. */}
                  <GridCrossing at="br" className="lg:hidden" />
                </>
              )}
              {index === 1 && (
                <GridCrossing at="br" clip="right" className="lg:hidden" />
              )}
              {index === 2 && (
                <GridCrossing at="br" clip="bottom" className="lg:hidden" />
              )}

              <Heading as="p" role="headline-md">
                {stat.value}
                {stat.suffix && (
                  <span
                    className={
                      isHighlight ? "text-brand-dark/45" : "text-brand-dark/50"
                    }
                  >
                    {stat.suffix}
                  </span>
                )}
              </Heading>
              <Text
                role="body-sm"
                tone={isHighlight ? "default" : "muted"}
                className={isHighlight ? "text-brand-dark/70" : undefined}
              >
                {stat.label}
              </Text>
            </div>
          );
        })}
      </Container>
    </section>
  );
};

export { StatsSection };
