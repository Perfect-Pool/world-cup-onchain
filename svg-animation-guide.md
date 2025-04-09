# SVG Animation Techniques

This guide explains how to create animations in SVG files for our World Cup Onchain NFTs.

## Basic SVG Animation Concepts

SVGs (Scalable Vector Graphics) can be animated in several ways:

1. Using CSS animations
2. Using SMIL (SVG's native animation language)
3. Using JavaScript
4. Using gradient transitions

## Gradient Animation Technique

In our NFT design, we use a technique involving gradient positioning to create subtle animations. Here's how it works:

### The Basic Principle

By changing the coordinates of gradient definitions (like `x1`, `y1`, `x2`, `y2`), we can make colors flow and shift across elements.

```xml
<linearGradient id="paint0_linear" x1="0" y1="68" x2="627" y2="68" gradientUnits="userSpaceOnUse">
    <stop stop-color="#00BCFF" />
    <stop offset="1" stop-color="#05DF72" />
</linearGradient>
```

### Creating Animations

1. **Define your gradients** with IDs in the `<defs>` section of your SVG
2. **Apply gradients** to shapes using the `fill="url(#gradientID)"` attribute
3. **Animate the gradient coordinates** using one of these methods:

#### CSS Animation Method

```css
@keyframes moveGradient {
  0% {
    y1: 50;
    y2: 50;
  }
  50% {
    y1: 70;
    y2: 70;
  }
  100% {
    y1: 50;
    y2: 50;
  }
}

#paint0_linear {
  animation: moveGradient 5s infinite;
}
```

#### SMIL Animation Method (Works in SVG directly)

```xml
<linearGradient id="paint0_linear" x1="0" y1="50" x2="627" y2="50" gradientUnits="userSpaceOnUse">
    <animate attributeName="y1" values="50; 70; 50" dur="5s" repeatCount="indefinite" />
    <animate attributeName="y2" values="50; 70; 50" dur="5s" repeatCount="indefinite" />
    <stop stop-color="#00BCFF" />
    <stop offset="1" stop-color="#05DF72" />
</linearGradient>
```

## Group Animation

To animate an entire group of elements:

1. Wrap related elements in a `<g>` tag
2. Apply animations to the group:

```xml
<g id="animatedGroup">
    <!-- Your SVG elements here -->
    <animate attributeName="opacity" values="0.8; 1; 0.8" dur="3s" repeatCount="indefinite" />
    <animateTransform attributeName="transform" type="translate" values="0,0; 0,5; 0,0" dur="2s" repeatCount="indefinite" />
</g>
```

## Tips for Designers

- Keep animations subtle for NFTs to maintain a professional look
- Test your animations in multiple browsers
- Consider performance, especially with complex SVGs
- Use groups (`<g>` tags) to organize and animate related elements
- For onchain SVGs, keep file size in mind as it affects gas costs

## Examples from Our Project

In our NFT design, we use gradient position shifts to create subtle flowing effects. The positions are adjusted in the `linearGradient` definitions, which causes the colors to shift and flow across the design.

This creates a dynamic but subtle effect that works well for blockchain-based assets where animation capabilities might be limited.
