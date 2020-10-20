import http from "./httpService";

const apiEndpoint = "/upload";

export function getImages() {
  return http.get(apiEndpoint);
}

export function saveImage(image) {
  const formData = new FormData();

  formData.append("image", image, image.name);

  return http.post(apiEndpoint, formData);
}
