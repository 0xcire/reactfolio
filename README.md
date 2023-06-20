[![Netlify Status](https://api.netlify.com/api/v1/badges/f7e71410-11cc-42d2-92a7-0a796c109e02/deploy-status)](https://app.netlify.com/sites/ecfolio/deploys)

# [My Portfolio Website](https://ecfolio.netlify.app/)

## Built with:

- Tailwind CSS
- Framer Motion
- TypeScript / Zod
- React / React Router / React Hook Form
- Vitest / React Testing Library
- Github Actions -> Netlify

## Getting Started

- I have an SPA template in my repos, but, if you'd like to use this for whatever reason, feel free to: \
   `git clone https://github.com/0xcire/reactfolio.git reactfolio` \
   `cd reactfolio` \
   `npm install` \
   `npm run dev`
- keep in mind this site is an spa and your SEO will suffer if that is a necessity. Consider using Astro or Next.js for a more comprehensive solution.

## Learning Points

- Benefits of using TypeScript
- React, implementing base functionality of something like Headless UI from scratch
  - using useState, useEffect, useRef, useCallback hooks
- Componentized vs MVC architecture
- React Router
  - layout components
  - creating SPA
- Creating custom animations / page transitions with Framer Motion
- Setting up forms with Netlify, validating data with Zod, utilizing toasts to notify users of success/error states
- Creating basic implementation tests using vitest and react testing library
- Creating a minimal CI/CD pipeline

## Successes

- Picking up Tailwind, TypeScript, React was not very difficult due to the time spent getting comfortable with CSS and JS. Just building things and learning via docs and googling has been the most effective learning method for me so far.

## Issues

- Definitely would have benefitted from a more robust CI CD pipeline for testing. Certain features like quirky mobile viewport values, testing connection to Netlify Forms would have gone much smoother.

- Had some trouble implementing tests at first

- Dealt with some vague bugs in setting up forms for Netlify

## Future Plans

- [] Refactor in Astro or Next
  - Allow better SEO for some blog posts
