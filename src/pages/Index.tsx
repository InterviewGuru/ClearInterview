import { Navigate } from "react-router-dom";

const Index = () => {
  // Redirect to System Design as the default landing page
  return <Navigate to="/system-design" replace />;
};

export default Index;
