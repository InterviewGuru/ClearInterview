import { useState } from "react";
import { Check, Copy } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language?: string;
}

const CodeBlock = ({ code, language = "jsx" }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Simple syntax highlighting for JSX/JavaScript
  const highlightCode = (code: string) => {
    return code
      // Keywords
      .replace(
        /\b(const|let|var|function|return|if|else|for|while|import|export|from|default|async|await|new|this|class|extends|try|catch|throw)\b/g,
        '<span class="text-purple-400">$1</span>'
      )
      // Strings (double quotes)
      .replace(
        /"([^"\\]*(\\.[^"\\]*)*)"/g,
        '<span class="text-green-400">"$1"</span>'
      )
      // Strings (single quotes)
      .replace(
        /'([^'\\]*(\\.[^'\\]*)*)'/g,
        "<span class=\"text-green-400\">'$1'</span>"
      )
      // Template literals (backticks)
      .replace(
        /`([^`]*)`/g,
        '<span class="text-green-400">`$1`</span>'
      )
      // JSX tags
      .replace(
        /(&lt;\/?)(\w+)/g,
        '$1<span class="text-blue-400">$2</span>'
      )
      .replace(
        /(<\/?)(\w+)(?=[\s>\/])/g,
        '$1<span class="text-blue-400">$2</span>'
      )
      // Numbers
      .replace(
        /\b(\d+)\b/g,
        '<span class="text-orange-400">$1</span>'
      )
      // Comments (single line)
      .replace(
        /(\/\/.*$)/gm,
        '<span class="text-gray-500 italic">$1</span>'
      )
      // Arrow functions
      .replace(
        /=&gt;/g,
        '<span class="text-purple-400">=&gt;</span>'
      )
      .replace(
        /=>/g,
        '<span class="text-purple-400">=></span>'
      )
      // Hooks and React methods
      .replace(
        /\b(useState|useEffect|useCallback|useMemo|useContext|useReducer|useRef|React)\b/g,
        '<span class="text-cyan-400">$1</span>'
      );
  };

  return (
    <div className="relative group my-3 rounded-lg overflow-hidden bg-[#1e1e2e] border border-border/50">
      <div className="flex items-center justify-between px-4 py-2 bg-[#181825] border-b border-border/30">
        <span className="text-xs text-muted-foreground font-mono">{language}</span>
        <button
          onClick={handleCopy}
          className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" />
              <span>Copy</span>
            </>
          )}
        </button>
      </div>
      <pre className="p-4 overflow-x-auto text-sm font-mono leading-relaxed">
        <code
          className="text-gray-300"
          dangerouslySetInnerHTML={{ __html: highlightCode(code) }}
        />
      </pre>
    </div>
  );
};

export default CodeBlock;
