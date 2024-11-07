import { Fragment } from "react";
import { CheckIcon, MinusIcon, PlusIcon } from "@heroicons/react/16/solid";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type TierName = "Starter" | "Growth" | "Scale";
type FeatureTiers = { [key in TierName]: boolean | string };

interface Tier {
  name: TierName;
  description: string;
  priceMonthly: string;
  href: string;
  highlights: { description: string; disabled?: boolean }[];
}

interface Feature {
  name: string;
  tiers: FeatureTiers;
}

interface Section {
  name: string;
  features: Feature[];
}

const tiers: Tier[] = [
  {
    name: "Starter",
    description: "Everything you need to get started.",
    priceMonthly: "$00",
    href: "#",
    highlights: [
      { description: "Custom domains" },
      { description: "Edge content delivery" },
      { description: "Advanced analytics" },
      { description: "Quarterly workshops", disabled: true },
      { description: "Single sign-on (SSO)", disabled: true },
      { description: "Priority phone support", disabled: true },
    ],
  },
  {
    name: "Growth",
    description: "All the extras for your growing team.",
    priceMonthly: "$49",
    href: "#",
    highlights: [
      { description: "Custom domains" },
      { description: "Edge content delivery" },
      { description: "Advanced analytics" },
      { description: "Quarterly workshops" },
      { description: "Single sign-on (SSO)", disabled: true },
      { description: "Priority phone support", disabled: true },
    ],
  },
  {
    name: "Scale",
    description: "Added flexibility at scale.",
    priceMonthly: "$99",
    href: "#",
    highlights: [
      { description: "Custom domains" },
      { description: "Edge content delivery" },
      { description: "Advanced analytics" },
      { description: "Quarterly workshops" },
      { description: "Single sign-on (SSO)" },
      { description: "Priority phone support" },
    ],
  },
];

const sections: Section[] = [
  {
    name: "Features",
    features: [
      {
        name: "Edge content delivery",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Custom domains",
        tiers: { Starter: "1", Growth: "3", Scale: "Unlimited" },
      },
      {
        name: "Team members",
        tiers: { Starter: "3", Growth: "20", Scale: "Unlimited" },
      },
      {
        name: "Single sign-on (SSO)",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
  {
    name: "Reporting",
    features: [
      {
        name: "Advanced analytics",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Basic reports",
        tiers: { Starter: false, Growth: true, Scale: true },
      },
      {
        name: "Professional reports",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
      {
        name: "Custom report builder",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
  {
    name: "Support",
    features: [
      {
        name: "24/7 online support",
        tiers: { Starter: true, Growth: true, Scale: true },
      },
      {
        name: "Quarterly workshops",
        tiers: { Starter: false, Growth: true, Scale: true },
      },
      {
        name: "Priority phone support",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
      {
        name: "1:1 onboarding tour",
        tiers: { Starter: false, Growth: false, Scale: true },
      },
    ],
  },
];

export default function Example() {
  return (
    <div className="bg-white py-20 mt-20 sm:py-16">
      <div className="mx-auto max-w-4xl px-6 max-lg:text-center lg:max-w-7xl lg:px-8">
        <h1 className="text-balance text-5xl font-semibold tracking-tight text-gray-950 sm:text-3xl lg:text-pretty text-center">
          Pricing that grows with your team size
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg font-normal text-muted-foreground max-lg:mx-auto sm:text-xl/8 text-center mx-auto">
          Choose an affordable plan that’s packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
      </div>
      <div className="relative pt-16 sm:pt-24">
        <div className="absolute inset-x-0 bottom-0 top-48 " />
        <div className="relative mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {tiers.map((tier) => (
              <div
                key={tier.name}
                className="-m-2 grid grid-cols-1 rounded-[2rem] shadow-[inset_0_0_2px_1px_#ffffff4d] ring-1 ring-black/5 max-lg:mx-auto max-lg:w-full max-lg:max-w-md"
              >
                <div className="grid grid-cols-1 rounded-[2rem] p-2 shadow-md shadow-black/5">
                  <div className="rounded-3xl bg-white p-10 pb-9 shadow-2xl ring-1 ring-black/5">
                    <h2 className="text-sm font-semibold text-gray-950">
                      {tier.name} <span className="sr-only">plan</span>
                    </h2>
                    <p className="mt-2 text-pretty text-sm/6 text-muted-foreground">
                      {tier.description}
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                      <div className="text-5xl font-semibold text-gray-950">
                        {tier.priceMonthly}
                      </div>
                      <div className="text-sm text-gray-600">
                        <p>USD</p>
                        <p>per month</p>
                      </div>
                    </div>
                    <div className="mt-8">
                      <Button asChild className="w-full  rounded-xl">
                        <Link
                          href={tier.href}
                          aria-label={`Start a free trial on the ${tier.name} plan`}
                        >
                          Start a free trial
                        </Link>
                      </Button>
                    </div>
                    <div className="mt-8">
                      <h3 className="text-sm/6 font-medium text-gray-950">
                        Start selling with:
                      </h3>
                      <ul className="mt-3 space-y-3">
                        {tier.highlights.map((highlight) => (
                          <li
                            key={highlight.description}
                            data-disabled={highlight.disabled}
                            className="group flex items-start gap-4 text-sm/6 text-gray-600 data-[disabled]:text-gray-400"
                          >
                            <span className="inline-flex h-6 items-center">
                              <PlusIcon
                                aria-hidden="true"
                                className="size-4 fill-gray-400 group-data-[disabled]:fill-gray-300"
                              />
                            </span>
                            {highlight.disabled ? (
                              <span className="sr-only">Not included:</span>
                            ) : null}
                            {highlight.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <table className="w-full text-left max-sm:hidden mt-40">
            <thead>
              <tr>
                <td className="p-0" />
                {tiers.map((tier) => (
                  <th key={tier.name} scope="col" className="p-0">
                    <div className="text-sm font-semibold text-gray-950">
                      {tier.name} <span className="sr-only">plan</span>
                    </div>
                    <Button
                      variant={"primary"}
                      size={"sm"}
                      className="shadow-none px-1.5 py-0.5 rounded-xl mt-4"
                    >
                      Get Start
                    </Button>
                  </th>
                ))}
              </tr>
            </thead>
            {sections.map((section) => (
              <tbody key={section.name}>
                <tr>
                  <th scope="colgroup" colSpan={4} className="px-0 pb-0 pt-10">
                    <div className="-mx-4 rounded-lg bg-gray-50 px-4 py-3 text-sm/6 font-semibold text-gray-950">
                      {section.name}
                    </div>
                  </th>
                </tr>
                {section.features.map((feature) => (
                  <tr key={feature.name} className="border-b border-gray-100">
                    <th
                      scope="row"
                      className="px-0 py-4 text-sm/6 font-normal text-gray-600"
                    >
                      {feature.name}
                    </th>
                    {tiers.map((tier) => (
                      <td key={tier.name} className="p-4 max-sm:text-center">
                        {typeof feature.tiers[tier.name] === "string" ? (
                          <>
                            <span className="sr-only">
                              {tier.name} includes:
                            </span>
                            <span className="text-sm/6 text-gray-950">
                              {feature.tiers[tier.name]}
                            </span>
                          </>
                        ) : (
                          feature.tiers[tier.name] && (
                            <CheckIcon className="w-6 h-6 text-green-500" />
                          )
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}