// import Github from './../icons/github_ic.svg';
// import LinkedIn from './../icons/linkedIn_ic.svg';
// import Twitter from './../icons/twitter.svg';

const Socials = () => {
   return ( 
      <aside className="left">
         <a target="_blank" rel="noreferrer" href="https://github.com/Etan31">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
               <title>GitHub</title>
               <path
                  d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22">
               </path>
            </svg>
         </a>

         <a target="_blank" rel="noreferrer" href="https://twitter.com/">
   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-twitter-x"
      viewBox="0 0 16 16">
      <path
         d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z" />
   </svg>
</a>

         <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/tristan-ehron-tumbaga-b42478175/">
            <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor"
               strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
               <title>LinkedIn</title>
               <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
               <rect x="2" y="9" width="4" height="12"></rect>
               <circle cx="4" cy="4" r="2"></circle>
            </svg>
         </a>
          <div className="vertical"></div>
      </aside>
    );
}
 
export default Socials;