export default {
  logo_url: "m_w.png",
  backend: {
    name: "proxy",
    proxy_url: "http://localhost:8081/api/v1",
  },
  local_backend: true,
  media_folder: "src/assets",
  public_folder: "assets",
  media_library: {
    max_file_size: 512000,
    folder_support: true,
  },
};
