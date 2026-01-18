import { Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-semibold text-foreground">Clear Interview</span>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Master your technical interviews with clear, concise, and structured preparation materials.
            </p>
            <div className="flex gap-4 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">About</a>
              <a href="#" className="hover:text-foreground transition-colors">Contact</a>
            </div>
          </div>

          {/* AI Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Artificial Intelligence</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/ai/ml-fundamentals" className="hover:text-primary transition-colors">ML Fundamentals</a></li>
              <li><a href="/ai/deep-learning" className="hover:text-primary transition-colors">Deep Learning</a></li>
              <li><a href="/ai/computer-vision" className="hover:text-primary transition-colors">Computer Vision</a></li>
              <li><a href="/ai/nlp" className="hover:text-primary transition-colors">NLP</a></li>
              <li><a href="/ai/mlops" className="hover:text-primary transition-colors">MLOps</a></li>
              <li><a href="/ai/generative-ai" className="hover:text-primary transition-colors">Generative AI</a></li>
            </ul>
          </div>

          {/* Front End Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Front End</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/front-end/react" className="hover:text-primary transition-colors">React</a></li>
              <li><a href="/front-end/angular" className="hover:text-primary transition-colors">Angular</a></li>
              <li><a href="/front-end/vue" className="hover:text-primary transition-colors">Vue.js</a></li>
              <li><a href="/front-end/css" className="hover:text-primary transition-colors">CSS & Styling</a></li>
              <li><a href="/front-end/micro-frontends" className="hover:text-primary transition-colors">Micro Frontends</a></li>
              <li><a href="/front-end/bundlers" className="hover:text-primary transition-colors">Bundlers</a></li>
            </ul>
          </div>

          {/* Back End Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Back End</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/back-end/nodejs" className="hover:text-primary transition-colors">Node.js</a></li>
              <li><a href="/back-end/java" className="hover:text-primary transition-colors">Java & Spring</a></li>
              <li><a href="/back-end/python" className="hover:text-primary transition-colors">Python</a></li>
              <li><a href="/back-end/golang" className="hover:text-primary transition-colors">Go (Golang)</a></li>
              <li><a href="/back-end/apis" className="hover:text-primary transition-colors">REST & GraphQL</a></li>
              <li><a href="/back-end/security" className="hover:text-primary transition-colors">Security</a></li>
            </ul>
          </div>

          {/* System Design Section */}
          <div>
            <h3 className="font-semibold mb-4 text-foreground">System Design</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/system-design/api-design" className="hover:text-primary transition-colors">API Design</a></li>
              <li><a href="/system-design/data-modeling" className="hover:text-primary transition-colors">Data Modeling</a></li>
              <li><a href="/system-design/databases" className="hover:text-primary transition-colors">Databases</a></li>
              <li><a href="/system-design/caching" className="hover:text-primary transition-colors">Caching</a></li>
              <li><a href="/system-design/scaling" className="hover:text-primary transition-colors">Scaling</a></li>
              <li><a href="/system-design/load-balancing" className="hover:text-primary transition-colors">Load Balancing</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            © 2024 Clear Interview. All rights reserved.
          </p>
          <div className="flex gap-4 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;