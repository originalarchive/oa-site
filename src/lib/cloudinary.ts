import { v2 as cloudinary } from 'cloudinary';

// This connects to your account using the variables in your .env file
cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
});

export async function getImagesByTag(tag: string) {
  try {
    const resources = await cloudinary.api.resources_by_tag(tag, {
      max_results: 100,
      context: true, // Crucial for pulling titles/alt text [cite: 2026-02-01]
    });

    return resources.resources.map((resource: any) => {
      // Cloudinary's 'context' object structure can vary depending on how it was saved.
      // This chain checks the most common locations for a title or description.
      const title = 
        resource.context?.custom?.caption || 
        resource.context?.custom?.alt || 
        resource.context?.caption || 
        resource.context?.alt || 
        ""; // Default to empty string so AutoGallery can handle the fallback

      return {
        publicId: resource.public_id,
        alt: title,
        width: resource.width,
        height: resource.height
      };
    });
  } catch (error) {
    console.error(`Error fetching images for tag ${tag}:`, error);
    return [];
  }
}