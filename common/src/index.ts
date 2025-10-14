import z from "zod";

export const signupInput = z.object({
    email: z.email(),
    password: z.string(),
    name : z.string().optional(),
});

export type SignupType = z.infer<typeof signupInput>;

export const signinInput = z.object({
    email : z.email(),
    password: z.string()
});

export type signinType = z.infer<typeof signinInput >;

export const createPostInput = z.object({
    title : z.string(),
    content : z.string(),
})

export type createPostType = z.infer<typeof createPostInput>;


export const updatePostInput = z.object({
    title: z.string().optional(),
    content :  z.string().optional()
})

export type updatePostType = z.infer<typeof updatePostInput>;

