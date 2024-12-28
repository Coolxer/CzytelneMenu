import { defineCollection } from "astro:content";
import { postSchema } from "./schemas";


const postCollection = defineCollection({type:"content", schema: postSchema});

export const collections = {posts: postCollection};