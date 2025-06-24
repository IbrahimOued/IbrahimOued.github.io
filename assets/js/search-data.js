// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "A showcase of my projects, highlighting my work and interests. This page includes categorized projects with options for horizontal or vertical display.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "A showcase of my GitHub repositories and contributions. This page includes a list of GitHub users and their repositories, along with any trophies earned.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "A comprehensive overview of my professional experience, education, and skills. This page includes a downloadable PDF version of my CV for easy access.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-bookshelf",
              title: "bookshelf",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/books/";
              },
            },{id: "dropdown-blog",
              title: "blog",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/blog/";
              },
            },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-an-unforgettable-journey-to-china-with-huawei",
        
          title: "An Unforgettable Journey to China with Huawei",
        
        description: "Exploring Chinese culture and technology with Huawei",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2019/huawei-seeds-for-the-future/";
          
        },
      },{id: "books-the-chief-ai-officer-39-s-handbook-master-ai-leadership-with-strategies-to-innovate-overcome-challenges-and-drive-business-growth",
          title: 'The Chief AI Officer&amp;#39;s Handbook Master AI leadership with strategies to innovate, overcome...',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_chief_AI_officer_handbook/";
            },},{id: "news-i-am-thrilled-to-announce-that-our-team-has-won-the-3rd-prize-in-the-prestigious-ict-competition-in-burkina-faso-genietic-2016-edition-this-achievement-is-a-testament-to-our-hard-work-and-dedication-i-would-like-to-thank-everyone-who-supported-us-throughout-this-journey-stay-tuned-for-more-exciting-updates",
          title: 'I am thrilled to announce that our team has won the 3rd prize...',
          description: "",
          section: "News",},{id: "news-i-am-are-excited-to-share-that-i-have-been-selected-for-the-huawei-seeds-for-the-future-program-2019-this-incredible-opportunity-will-take-us-to-beijing-and-shenzhen-where-we-will-visit-huawei-university-we-look-forward-to-gaining-invaluable-insights-and-experiences-during-this-journey-thank-you-for-your-support-and-we-can-t-wait-to-share-our-experiences-with-you",
          title: 'I am are excited to share that I have been selected for the...',
          description: "",
          section: "News",},{id: "news-completion-of-master-s-degree-thesis-in-data-mining-and-artificial-intelligence",
          title: 'Completion of Master’s Degree Thesis in Data Mining and Artificial Intelligence',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_4/";
            },},{id: "news-starting-a-phd-program-at-university-of-montreal",
          title: 'Starting a PhD Program at University of Montreal',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_3/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%69%62%72%61.%6F%75%65%64@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/IbrahimOued", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/ibrahimouedraogo", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
