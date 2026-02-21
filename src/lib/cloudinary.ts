import { v2 as cloudinary } from 'cloudinary';

// This connects to your account using the variables in your .env file
cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function getImagesByTag(tag: string) {
  try {
    const results = await cloudinary.search
      .expression(`tags:${tag}`)
      .with_field('context')
      .sort_by('created_at', 'desc') 
      .max_results(100)
      .execute();

    return results.resources.map((resource: any) => ({
      publicId: resource.public_id,
      alt: resource.context?.caption || resource.context?.alt || "",
      width: resource.width,
      height: resource.height
    }));
  } catch (error) {
    console.error(`Error fetching images for tag ${tag}:`, error);
    return [];
  }
}