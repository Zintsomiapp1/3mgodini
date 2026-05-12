diff --git a/src/App.tsx b/src/App.tsx
index ee664cf28e3d9a220d9c60fc4dca3dceaa49348b..1a9bb22df2e3659510a787dee3b513f198aa8787 100644
--- a/src/App.tsx
+++ b/src/App.tsx
@@ -1,31 +1,31 @@
 
 import { Toaster } from "@/components/ui/toaster";
 import { Toaster as Sonner } from "@/components/ui/sonner";
 import { TooltipProvider } from "@/components/ui/tooltip";
 import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
-import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
+import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
 import { ThemeProvider } from "@/contexts/ThemeContext";
 import { useAuth } from "@/hooks/useAuth";
 import MobileBottomNav from "@/components/MobileBottomNav";
 import MobileHeader from "@/components/MobileHeader";
 import Index from "./pages/Index";
 import Welcome from "./pages/Welcome";
 import Auth from "./pages/Auth";
 import Mjolo from "./pages/Mjolo";
 import Games from "./pages/Games";
 import BrainTraining from "./pages/BrainTraining";
 import Gamification from "./pages/Gamification";
 import Messaging from "./pages/Messaging";
 import AdminDashboard from "./pages/AdminDashboard";
 import AdminPanel from "./pages/AdminPanel";
 import ProfileSettings from "./pages/ProfileSettings";
 import NotFound from "./pages/NotFound";
 import ErrorBoundary from "./components/ErrorBoundary";
 
 const queryClient = new QueryClient();
 
 const AppContent = () => {
   const { user } = useAuth();
   const location = useLocation();
   
   // Don't show navigation on auth/welcome pages
@@ -55,36 +55,36 @@ const AppContent = () => {
           <Route path="/welcome" element={<Welcome onLogin={() => {}} onSignUp={() => {}} />} />
           <Route path="/auth" element={<Auth onLogin={() => {}} onBack={() => {}} />} />
           <Route path="/mjolo" element={<Mjolo />} />
           <Route path="/games" element={<Games />} />
           <Route path="/brain-training" element={<BrainTraining />} />
           <Route path="/gamification" element={<Gamification />} />
           <Route path="/messaging" element={<Messaging />} />
           <Route path="/admin-dashboard" element={<AdminDashboard />} />
           <Route path="/admin" element={<AdminPanel />} />
           <Route path="/settings" element={<ProfileSettings />} />
           <Route path="*" element={<NotFound />} />
         </Routes>
       </main>
       
       {!hideNavigation && <MobileBottomNav />}
     </div>
   );
 };
 
 const App = () => (
   <QueryClientProvider client={queryClient}>
     <ThemeProvider>
       <TooltipProvider>
         <Toaster />
         <Sonner />
-        <BrowserRouter>
+        <HashRouter>
           <ErrorBoundary>
             <AppContent />
           </ErrorBoundary>
-        </BrowserRouter>
+        </HashRouter>
       </TooltipProvider>
     </ThemeProvider>
   </QueryClientProvider>
 );
 
 export default App;

