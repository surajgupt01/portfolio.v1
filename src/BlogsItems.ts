interface BlogsProps {
  id : number,
  title: string;
  Intro: string;
  description: string;
}

export const blogs: BlogsProps[] = [
  {
    id : 1,
    title: "Why I Love Building Full-Stack Applications",
    Intro: `Ever since I started coding, I’ve been fascinated by how different layers of a system work .

`,

    description: `Why I Love Building Full-Stack Applications

Ever since I started coding, I’ve been fascinated by how different layers of a system work together to create something meaningful. Building full-stack applications lets me experience that magic firsthand — from designing the UI to structuring the backend and optimizing the database.

When I started working on projects, I often wondered how large-scale systems like YouTube or Amazon manage millions of users so smoothly. That curiosity pushed me to dive deeper into both frontend and backend development. I love the feeling of building something complete — something that a user can interact with while I know exactly what’s happening behind the scenes.

However, as I got more into development, I realized that writing scalable and efficient code requires more than just knowing frameworks — it needs a strong foundation in Data Structures and Algorithms (DSA).
For a while, I kept switching between development and DSA, not realizing how connected they are. Now, I understand that mastering DSA helps me think logically, write optimized backend logic, and design systems that scale.

Right now, I’m focused on improving my DSA skills while still building projects that challenge me technically. For me, full-stack development isn’t just about writing code — it’s about understanding how systems grow, communicate, and perform under pressure. That’s what keeps me excited every day.`,
  },

  {
    id: 2,
    title: `My Experience with Auth-js`,
    Intro: `These days, I’m diving deep into Auth.js — a framework for handling authentication and user management in web applications. While `,
    description: `These days, I’m diving deep into Auth.js — a framework for handling authentication and user management in web applications. While it might seem like a small part of a system, authentication is actually the backbone of secure apps, and understanding it is key to building professional projects.

As I explore Auth.js, I’m learning:

How to manage user sessions safely and efficiently

Different login methods, including email/password, OAuth, and social logins

How to integrate authentication into a full-stack app without breaking user experience

Best practices for storing sensitive data and handling security concerns

Working with Auth.js has given me a new perspective on development 

— it’s not just about building features that work, but also about making them secure, scalable, and reliable.

This journey is also helping me connect the dots between frontend and backend 

— understanding how authentication flows through APIs, cookies, and client-side state. Every new feature I implement strengthens my ability to design robust, real-world applications.

I’m excited to keep experimenting and mastering Auth.js, because learning authentication isn’t just a skill — it’s a necessary building block for every serious web developer.`,
  },




];
