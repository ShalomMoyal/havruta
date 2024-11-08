import { z } from "zod";

import {
    createTRPCRouter,
    protectedProcedure,
    publicProcedure,
  } from "~/server/api/trpc";

export const prposalRouter = createTRPCRouter({
    hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
    
    create: protectedProcedure
    .input(z.object({ interested_studies: z.string().min(1), studytype: z.string().min(1), studyTime: z.string().min(1), contact: z.string().min(1) }))
    .mutation(async ({ ctx, input }) => {
      return ctx.db.proposal.create({
        data: {
          interested_studies: input.interested_studies,
          studytype: input.studytype,
          studyTime: input.studyTime,
          contact: input.contact,
          createdBy: { connect: { id: ctx.session.user.id } },
        },
      });
    }),
    getAll: publicProcedure.query(async ({ ctx }) => {
        const proposals = await ctx.db.proposal.findMany({
          where: { createdBy: { id: ctx.session?.user.id }},
          orderBy: { createdAt: 'desc' },   
        });
        return proposals;
    }),

})