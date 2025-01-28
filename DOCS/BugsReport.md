# Bug Report Document

This document tracks bugs discovered during testing (unit tests, manual tests, or both) of the Movie App (movie-app-fu).

---

## 1. **Bug: Invalid DOM Nesting Warning in Global Error Page**

### **Description:**

When rendering the global error page, a warning is logged to the console:

```
console.error
Warning: validateDOMNesting(...): <html> cannot appear as a child of <div>.
```

This error happens due to invalid DOM nesting where the `<html>` tag appears as a child of a `<div>` element, which is not allowed in HTML.

### **Steps to Reproduce:**

1. Trigger an error in the app that leads to the **GlobalError** component being displayed (e.g., a server error or an unhandled exception).
2. Open the browser’s developer tools and check the console.
3. Observe the warning message: `Warning: validateDOMNesting(...): <html> cannot appear as a child of <div>.`

### **Impact:**

This issue does not break the functionality of the app, but it leads to a DOM validation warning that can clutter the console and cause potential issues with accessibility or page rendering.

### **Solution/Recommendation:**

1. **Remove the `<html>` and `<body>` tags** from the `GlobalError` component.
2. Return just the `NextError` component in the `GlobalError` instead of wrapping it with an extra `<html>` tag.
3. Ensure that the **statusCode** should be set to **500** (instead of 0) when rendering the error page.

```tsx
// Fix: Remove <html> and <body> tags from GlobalError component
import { NextError } from "next/error";

const GlobalError = ({ statusCode }) => {
  return (
    <>
      <NextError statusCode={statusCode || 500} />
    </>
  );
};
```
