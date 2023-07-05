import React, { ReactNode } from 'react';

type ScriptureQuoteProps = {
  children: ReactNode;
  reference: string;
  version: string;
};

export default function ScriptureQuote({ children, reference, version }: ScriptureQuoteProps) {
  return (
    <blockquote className="overflow-hidden bg-white divide-y divide-gray-100 rounded-lg ">
      <div className="py-1 pb-4 pl-2 pr-2 m-1 border-l-4 border-gray-400 sm:p-6">
        {children}
      </div>
      <div className="flex w-full gap-2 px-2 py-2 mt-2 font-semibold sm:px-6">
        <div className="w-11/12 text-right">{reference}</div>
        <div className="w-1/12 px-1 text-xs text-end">{version}</div>
      </div>
    </blockquote>
  );
}
