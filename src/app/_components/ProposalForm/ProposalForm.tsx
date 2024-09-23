"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

export function ProposalForm() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const utils = api.useUtils();
  const createProposal = api.proposal.create.useMutation({
    onSuccess: async () => {
      await utils.proposal.invalidate();
      setTitle("");
      setBody("");
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    createProposal.mutate({
      title,
      body,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="rounded-md border p-2 text-black"
      />
      <textarea
        placeholder="Body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
        className="rounded-md border p-2 text-black"
        rows={4}
      />
      <button
        type="submit"
        className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
          {createProposal.isPending ? "Submitting..." : "Submit"}
          </button>
    </form>
  );
}
