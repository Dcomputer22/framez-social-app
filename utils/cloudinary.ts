export interface CloudinaryConfig {
  cloudName: string;
  uploadPreset: string;
}

export const CLOUDINARY_CONFIG: CloudinaryConfig = {
  cloudName: 'dspaulzji',
  uploadPreset: 'framez_posts',
};

export const uploadToCloudinary = async (imageUri: string): Promise<string> => {
  const { cloudName, uploadPreset } = CLOUDINARY_CONFIG;

  const formData = new FormData();

  formData.append('file', {
    uri: imageUri,
    type: 'image/jpeg',
    name: 'photo.jpg',
  } as any);

  formData.append('upload_preset', uploadPreset);

  return fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error('Upload failed');
      }
      return response.json();
    })
    .then((data) => {
      if (data.secure_url) {
        return data.secure_url;
      }
      throw new Error('No URL returned from Cloudinary');
    })
    .catch((error) => {
      console.error('Cloudinary upload error:', error);
      throw new Error('Failed to upload image: ' + error.message);
    });
};
