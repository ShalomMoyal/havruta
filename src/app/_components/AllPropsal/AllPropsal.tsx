"use client";

import { api } from "~/trpc/react";

function AllProposals() {
  const [allProposals] = api.proposal.getAll.useSuspenseQuery();

  return (
    <>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          {allProposals.map((proposal) => (
            <article key={proposal.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={proposal.createdAt.toISOString()} className="text-gray-500">
                  {`${proposal.createdAt.getDate()} ${proposal.createdAt.getMonth()+1} ,${proposal.createdAt.getFullYear()}`}
                </time>
                <a
                  href={proposal.body}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {proposal.title}
                </a>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a>
                      <span className="absolute inset-0" />
                      {proposal.body}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
    </>
  );
}


export default AllProposals;
