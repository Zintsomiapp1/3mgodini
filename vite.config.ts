diff --git a/vite.config.ts b/vite.config.ts
index 25c5589eb018f93b59ab282662f2f787330af483..6a4fad6d4134f5fbded9a738ac011bc2ad40e47c 100644
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -1,22 +1,23 @@
 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react-swc";
 import path from "path";
 import { componentTagger } from "lovable-tagger";
 
 // https://vitejs.dev/config/
 export default defineConfig(({ mode }) => ({
+  base: "./",
   server: {
     host: "::",
     port: 8080,
   },
   plugins: [
     react(),
     mode === 'development' &&
     componentTagger(),
   ].filter(Boolean),
   resolve: {
     alias: {
       "@": path.resolve(__dirname, "./src"),
     },
   },
 }));

