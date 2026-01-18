import { Question } from "@/components/QuestionAccordion";

export const reactQuestions: Question[] = [
  {
    id: "1",
    question: "What is the Virtual DOM and how does React use it to optimize rendering?",
    answer: `The Virtual DOM is a lightweight JavaScript representation of the actual DOM. When state changes in a React component:

1. React creates a new Virtual DOM tree
2. It compares this new tree with the previous one (diffing)
3. It calculates the minimum number of changes needed
4. It batches these changes and updates the real DOM efficiently

This process is called "reconciliation" and makes React updates much faster than directly manipulating the DOM for every change.`,
    difficulty: "easy",
    type: "Core Concepts",
  },
  {
    id: "2",
    question: "Explain the difference between useState and useReducer. When would you choose one over the other?",
    answer: `useState is simpler and ideal for independent, simple state values. useReducer is better when:

• State logic is complex with multiple sub-values
• Next state depends on the previous state
• You want to optimize performance for deep updates
• State updates follow a predictable pattern

Example: For a form with a single input, use useState. For a complex form with validation, error states, and multiple interdependent fields, useReducer provides cleaner logic.`,
    difficulty: "medium",
    type: "State Management",
  },
  {
    id: "3",
    question: "What are React Fiber and concurrent rendering? How do they improve performance?",
    answer: `React Fiber is the reimplementation of React's core algorithm (introduced in React 16). Key features:

1. **Incremental Rendering**: Splits work into chunks, pausing and resuming
2. **Priority Scheduling**: Urgent updates (like user input) interrupt less important ones
3. **Concurrent Mode**: Enables features like Suspense and transitions

Benefits:
- Better responsiveness for complex UIs
- Smoother animations and transitions
- Ability to prepare multiple versions of UI simultaneously
- Improved perceived performance through better prioritization`,
    difficulty: "hard",
    type: "Performance",
  },
  {
    id: "4",
    question: "What is the purpose of useCallback and useMemo? When should you use them?",
    answer: `Both are optimization hooks:

**useMemo**: Memoizes computed values
- Use when: expensive calculations that don't need to run on every render
- Returns: the memoized value

**useCallback**: Memoizes function references
- Use when: passing callbacks to optimized child components (React.memo)
- Returns: the memoized function

Avoid premature optimization - only use when you have measurable performance issues or when passing to memoized children.`,
    difficulty: "medium",
    type: "Performance",
  },
  {
    id: "5",
    question: "How does React's Context API work and what are its limitations?",
    answer: `Context provides a way to pass data through the component tree without props drilling.

**How it works:**
1. Create context with createContext()
2. Provide value with Context.Provider
3. Consume with useContext() hook

**Limitations:**
- All consumers re-render when context value changes
- Not suitable for frequently changing data
- Can lead to unnecessary re-renders if not structured carefully
- Consider state management libraries for complex global state`,
    difficulty: "easy",
    type: "State Management",
  },
  {
    id: "6",
    question: "Explain the React component lifecycle and how hooks map to lifecycle methods.",
    answer: `Class component lifecycle methods map to hooks:

**Mounting:**
- constructor → useState initial value
- componentDidMount → useEffect with [] dependency

**Updating:**
- componentDidUpdate → useEffect with dependencies
- shouldComponentUpdate → React.memo

**Unmounting:**
- componentWillUnmount → useEffect cleanup function

**Error Handling:**
- componentDidCatch → Error Boundaries (still class-based)

Example:
\`\`\`jsx
useEffect(() => {
  // componentDidMount + componentDidUpdate
  return () => {
    // componentWillUnmount
  };
}, [dependency]);
\`\`\``,
    difficulty: "medium",
    type: "Core Concepts",
  },
  {
    id: "7",
    question: "What is prop drilling and how can you avoid it in React applications?",
    answer: `Prop drilling is passing props through multiple intermediate components that don't need them, just to reach deeply nested components.

**Solutions:**

1. **Context API**: For truly global state (theme, user, locale)
2. **Composition**: Restructure components to reduce nesting
3. **State Management**: Redux, Zustand, Jotai for complex state
4. **Component Composition**: Pass components as props instead of data

Best practice: Use Context for read-heavy, rarely-updated state; state managers for frequently-updated or complex state.`,
    difficulty: "easy",
    type: "Core Concepts",
  },
  {
    id: "8",
    question: "How do you implement code splitting in React and why is it important?",
    answer: `Code splitting breaks your bundle into smaller chunks loaded on demand.

**Implementation:**
1. React.lazy() for component-level splitting
2. Suspense for loading states
3. Dynamic imports for route-based splitting

Example:
\`\`\`jsx
const LazyComponent = React.lazy(() => import('./HeavyComponent'));

<Suspense fallback={<Loading />}>
  <LazyComponent />
</Suspense>
\`\`\`

**Benefits:**
- Faster initial load time
- Reduced memory usage
- Better user experience
- Pay for what you use`,
    difficulty: "medium",
    type: "Optimization",
  },
  {
    id: "9",
    question: "Explain React Server Components and their benefits over traditional client components.",
    answer: `React Server Components (RSC) run on the server and send only HTML to the client.

**Key differences:**
- Zero bundle size for server components
- Direct database/file system access
- No client-side JavaScript for static parts
- Automatic code splitting

**Benefits:**
1. Smaller JavaScript bundles
2. Faster page loads
3. Better SEO (server-rendered)
4. Simplified data fetching
5. Reduced client-side complexity

**Trade-offs:**
- Can't use hooks or browser APIs
- No interactivity (use client components for that)
- Requires compatible framework (Next.js 13+)`,
    difficulty: "hard",
    type: "Advanced Patterns",
  },
  {
    id: "10",
    question: "What are custom hooks and when should you create them?",
    answer: `Custom hooks are functions that use other hooks to encapsulate reusable logic.

**When to create:**
- Repeated logic across components
- Complex state management
- Side effect handling
- Abstracting external library integration

**Rules:**
- Must start with "use" prefix
- Can call other hooks
- Follow rules of hooks

Example:
\`\`\`jsx
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  
  return debouncedValue;
}
\`\`\``,
    difficulty: "medium",
    type: "Hooks",
  },
  {
    id: "11",
    question: "What are Higher-Order Components (HOCs)?",
    answer: `A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. Concretely, a higher-order component is a function that takes a component and returns a new component.

\`\`\`jsx
const EnhancedComponent = higherOrderComponent(WrappedComponent);
\`\`\`

Common use cases:
- Code reuse, logic and bootstrap abstraction
- Render Highjacking
- State manipulation
- Props manipulation`,
    difficulty: "medium",
    type: "Advanced Patterns",
  },
  {
    id: "12",
    question: "What is the difference between specific and named imports in React?",
    answer: `
**Default Import:**
\`\`\`jsx
import React from 'react';
\`\`\`

**Named Import:**
\`\`\`jsx
import { Component } from 'react';
\`\`\`

Named imports allow you to import specific parts of a module, which can help with tree-shaking (reducing bundle size). Default imports import the entire module export.`,
    difficulty: "easy",
    type: "Core Concepts",
  },
  {
    id: "13",
    question: "What are refs in React and when should they be used?",
    answer: `Refs provide a way to access DOM nodes or React elements created in the render method.

**When to use Refs:**
- Managing focus, text selection, or media playback.
- Triggering imperative animations.
- Integrating with third-party DOM libraries.

**Avoid using refs for anything that can be done declaratively.**`,
    difficulty: "medium",
    type: "Directives and Components",
  },
  {
    id: "14",
    question: "What is the difference between an Element and a Component?",
    answer: `
**React Element:**
- A plain object describing what you want to see on the screen in terms of DOM nodes or other components.
- Immutable.
- Created with \`React.createElement\`.

**React Component:**
- A class or function that accepts inputs (props) and returns a React element.
- Can maintain state.`,
    difficulty: "medium",
    type: "Core Concepts",
  },
  {
    id: "15",
    question: "What are Error Boundaries?",
    answer: `Error boundaries are React components that catch JavaScript errors anywhere in their child component tree, log those errors, and display a fallback UI instead of the component tree that crashed.

They catch errors during:
- Rendering
- Lifecycle methods
- Constructors of the whole tree below them

**Note:** They do not catch errors inside event handlers.`,
    difficulty: "medium",
    type: "Error Handling",
  },
  {
    id: "16",
    question: "What are Portals in React?",
    answer: `Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.

\`\`\`jsx
ReactDOM.createPortal(child, container)
\`\`\`

**Use Cases:**
- Modals
- Tooltips
- Hovercards
- Loaders`,
    difficulty: "medium",
    type: "Advanced Patterns",
  },
  {
    id: "17",
    question: "What are Synthetic Events in React?",
    answer: `SyntheticEvent is a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including \`stopPropagation()\` and \`preventDefault()\`, except the events work identically across all browsers.

React pools these events for performance, meaning the event object is clearer after the event callback is invoked.`,
    difficulty: "medium",
    type: "Core Concepts",
  },
  {
    id: "18",
    question: "Why is the 'key' prop important in lists?",
    answer: `Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity.

The best way to pick a key is to use a string that uniquely identifies a list item among its siblings (e.g., IDs from your data). Avoid using indexes if the order of items may change.`,
    difficulty: "medium",
    type: "Core Concepts",
  },
];
