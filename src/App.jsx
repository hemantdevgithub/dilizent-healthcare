import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Loader from "./components/Loader/Loader";
import Footer from "./components/Footer/Footer";
import Toastcontainer from "./components/Toast/Toastcontainer";
import UploadProfile from "./pages/UploadProfile";
import ProfileMiddleware from "./Hoc/ProfileMiddleware";
import FAQ from "./pages/FAQ";
import Solutions from "./pages/Solutions";
import SolutionDetails from "./pages/SolutionDetails";
import ScrollToTop from "./components/shared/ScrollToTop";

// for components and page loading
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const About = lazy(() => import("./pages/About"));
const Team = lazy(() => import("./pages/Team"));
const Services = lazy(() => import("./pages/Services"));
const ServiceDetails = lazy(() => import("./pages/ServiceDetails"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Projects = lazy(() => import("./pages/Projects"));
const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetails = lazy(() => import("./pages/BlogDetails"));
const Freelancers = lazy(() => import("./pages/Freelancers"));
const Agencies = lazy(() => import("./pages/Agencies"));
const ProfileEdit = lazy(() => import("./pages/ProfileEdit"));
const Signup = lazy(() => import("./components/signup/Signup"));
const Login = lazy(() => import("./components/login/Login"));

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Toastcontainer />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/solutions/:redirect" element={<SolutionDetails />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path={`/blogs/:id`} element={<BlogDetails />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/freelancers" element={<Freelancers />} />
          <Route
            path="/profile/update"
            element={<ProfileMiddleware Component={ProfileEdit} />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile/upload" element={<UploadProfile />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
