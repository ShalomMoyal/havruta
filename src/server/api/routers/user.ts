import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "~/server/api/trpc";

export const userRouter = createTRPCRouter({
    hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),

    create: publicProcedure
    .input(z.object({firstName: z.string().min(1), lastName: z.string().min(1), city: z.string(), mail: z.string().email(), password: z.string().min(8)}))
    .mutation(async ({ ctx, input }) => {
        return ctx.db.user.create({
          data: {
            firstName: input.firstName,
            lastName: input.lastName,
            city: input.city,
            email: input.mail,
            password: input.password
          },
        });
      }),
})