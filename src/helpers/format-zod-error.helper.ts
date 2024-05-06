import { ZodError } from "zod";


export const formatZodError = (zodError: ZodError) => {
    const { issues } = zodError;

    return issues.map((issue) => (
        {
            field: issue.path[0],
            message: issue.message,
        }
    ))
}