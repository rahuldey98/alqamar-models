import { z } from "zod";
export declare const loginRequestSchema: z.ZodObject<{
    body: z.ZodObject<{
        phone: z.ZodString;
        password: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type LoginRequestDto = z.infer<typeof loginRequestSchema>["body"];
//# sourceMappingURL=request.d.ts.map