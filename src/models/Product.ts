import * as Yup from "yup";

export const ProductSchema = Yup.object({
  id: Yup.string(),
  title: Yup.string().required().default(""),
  description: Yup.string().default(""),
  price: Yup.number().positive().required().defined().default(0),
});

export const BookSchema = ProductSchema.shape({
  author: Yup.string().required().default(""),
  publisher: Yup.string().required().default(""),
  publicationDate: Yup.string().required().default(""),
})

export const AvailableProductSchema = BookSchema.shape({
  count: Yup.number().integer().min(0).required().defined().default(0),
});

export type Product = Yup.InferType<typeof BookSchema>;
export type AvailableProduct = Yup.InferType<typeof AvailableProductSchema>;