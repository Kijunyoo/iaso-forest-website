import { STEPS_COPY } from './copy';

interface GardenStepsProps {
  /** 채널이 열리지 않아 E3 를 빼야 할 때 ['E3'] */
  excludeIds?: string[];
}

export default function GardenSteps({ excludeIds = [] }: GardenStepsProps) {
  const steps = STEPS_COPY.steps.filter((s) => !excludeIds.includes(s.id));
  return (
    <section className="py-16 md:py-20 bg-iaso-beige-50">
      <div className="container-iaso max-w-3xl">
        <h2 className="text-2xl md:text-3xl font-bold text-iaso-green leading-snug mb-8">
          {STEPS_COPY.title.text}
        </h2>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={step.id} className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-iaso-green text-white text-xl font-bold">
                {index + 1}
              </span>
              <span className="pt-2 text-lg md:text-xl text-iaso-text leading-loose">
                {step.text}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
