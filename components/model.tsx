export default function Model() {
  return (
    <section className="flex flex-col items-center bg-custombg2 bg-[url('/cylinders-bg.png')] bg-cover bg-center bg-no-repeat pb-[48rem]">
      <h2 className="py-20 text-center">The Clueless Model</h2>

      <div className="w-4/5 text-center lg:w-3/5">
        <p>
          The Clueless model categorizes Ashley's life into three key areas:
          time, resources, and energy.
        </p>
        <br />
        <p>
          <b>These are the foundational aspects that define her journey.</b>
        </p>
        <br />
        <p>
          By actively exploring and dedicating time and effort to these areas,
          Ashley can regain a sense of control and purpose.
        </p>
      </div>

      <article className="flex w-4/5 flex-col gap-4 pt-16 lg:flex-row">
        <div className="flex-1">
          <h3 className="rounded-t-lg bg-[#B6C4C7] p-2 text-center font-bold text-white">
            Time
          </h3>
          <div className="rounded-b-lg bg-white px-8 py-12 drop-shadow-md">
            <p>
              In the Time category, we explore how we allocate our most valuable
              resource. This section offers insights into daily schedules,
              including work, relaxation, personal growth, social interactions,
              hobbies, exercise, chores, etc.
            </p>
            <br />
            <p>
              Understanding how time is distributed across these aspects allows
              us to take charge of our daily routines and prioritize activities
              that genuinely matter.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="rounded-t-lg bg-[#C7736B] p-2 text-center font-bold text-white">
            Resources
          </h3>
          <div className="rounded-b-lg bg-white px-8 py-12 drop-shadow-md">
            <p>
              The Resources category encompasses financial investments,
              relationships, and skills. By examining our financial management,
              connections with others, and our skill set, we can make informed
              decisions about where to invest our resources for personal growth
              and fulfillment.
            </p>
            <br />
            <p>
              This section helps us create a roadmap for building meaningful
              relationships, financial stability, and skill development.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="rounded-t-lg bg-[#96AB9F] p-2 text-center font-bold text-white">
            Energy
          </h3>
          <div className="rounded-b-lg bg-white px-8 py-12 drop-shadow-md">
            <p>
              The Energy category focuses on our attention, efforts, and
              creative energy, as well as the energies in our relationships.
            </p>
            <p>
              By assessing where we direct our mental and emotional energies, we
              gain awareness of how our actions and words manifest energy into
              the world.
            </p>
            <p>
              This awareness allows us to elevate their vibrations and manifest
              positive outcomes in our lives.
            </p>
          </div>
        </div>
      </article>
    </section>
  );
}
