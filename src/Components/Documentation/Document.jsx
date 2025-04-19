// SOME KEY DOCUMENTATION ABOUT THIS PROJECT

// .......FORM SUBMISSION........
// 1) Used web3 form for form submission
// . visit web3form.com, click on get access key to generate ur access key
// .

// .....SCROLLING.....
// . at the terminal: npm i react-scrol copied from react scrol.com
// . scrow down to a this function below:
// Function to handle the activation of a link.
//  const handleSetActive = (to) => {
//     console.log(to);
//   };
//   return (
//   <div>
//     {/* Link component to scroll to "test1" element with specified properties */}
//     <Link
//       activeClass="active"
//       to="test1"
//       spy={true}
//       smooth={true} to be a smooth scroll
//       offset={50}  offset means space from the top
//       duration={500}  during of the scroll
//       onSetActive={handleSetActive}
//     >
//       Test 1
//     </Link>

// . open the navigation.jsx file where we have the nav, enclose easch with
// . a link tag as below
{
  /* <Link to="program" smooth={true} offset={0} duration={500}>
Program
</Link> */
}
// where program is the component.jsx file we want to scroll to
// ensure you have an id with exact name in the to={}

// media query screns
// /* Base styles (for desktops first) */
// .navbar {
//   background: white;
//   padding: 40px;
//   font-size: 20px;
// }

// /* For laptops (smaller than 1200px) */
// @media (max-width: 1200px) {
//   .navbar {
//     padding: 30px;
//     font-size: 18px;
//   }
// }

// /* For tablets (smaller than 1024px) */
// @media (max-width: 1024px) {
//   .navbar {
//     padding: 20px;
//     font-size: 16px;
//   }
// }

// /* For phones (smaller than 768px) */
// @media (max-width: 768px) {
//   .navbar {
//     padding: 10px;
//     font-size: 14px;
//   }
// }

// /* For small phones (smaller than 480px) */
// @media (max-width: 480px) {
//   .navbar {
//     padding: 8px;
//     font-size: 13px;
//   }
// }
// use 768px for nav menu bar
