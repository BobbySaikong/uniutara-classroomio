describe('template spec', () => {
  it('visit uniutara.classroomio homepage', () => {

    //visit mainpage
    //
    cy.visit('https://uniutara.classroomio.com');
    //checking UI elements
    //logo
    cy.get('#logo span.hidden').should('have.text', 'UniUtara');
    cy.get('#logo span.hidden').should('be.visible');
    //buttons
    cy.get('#header button.flex').should('have.text', ' Start learning Today');
    cy.get('#header button.flex').should('be.visible');
    //paragraph
    cy.get('#header p.capitalize').should('be.visible');
    cy.get('#header h1.my-4').should('be.visible');
    cy.get('#header p.text-center').should('be.visible');
    //mini video player
    cy.get('#player div.plyr__poster').should('be.visible');
    cy.get('span.border').should('be.visible');
    //drawer widget
    cy.get('svg.h-6').should('be.visible');
    cy.get('svg.h-6').click();
    //inside drawer
    //menu header
    cy.get('h3.text-lg').should('have.text', 'Menu');
    cy.get('h3.text-lg').should('be.visible');
    //'X', exit drawer button
    cy.get('button.text-gray-500 svg.h-6').should('be.visible');
    //section widgets
    // about us
    cy.get('li:nth-child(1) a.block').should('have.text', 'About Us');
    //courses
    cy.get('li:nth-child(1) a.block').should('be.visible');
    cy.get('li:nth-child(2) a.block').should('have.text', 'Courses');
    //FAQ
    cy.get('li:nth-child(2) a.block').should('be.visible');
    cy.get('li:nth-child(3) a.block').should('have.text', 'FAQ');
    //Contact us
    cy.get('li:nth-child(3) a.block').should('be.visible');
    cy.get('li:nth-child(4) a.block').should('have.text', 'Contact Us');

    //Our story
    cy.get('#aboutus h2.text-4xl').should('have.text', 'Our Story');
    cy.get('#aboutus p.mb-2').should('be.visible');
    //Explore our courses
    cy.get('#courses h1.my-4').should('have.text', 'Explore our Courses');
    cy.get('#courses p.text-center').should('have.text', 'Find courses you will love from best teachers all over the world🌎.');
    //Software testing preview
    cy.get('#courses h3.title').should('have.text', 'Software Testing');
    cy.get('#courses p.description').should('have.text', 'To test software using tools');
    cy.get('#courses p.pl-2').should('have.text', '1 lessons');
    cy.get('#courses span.px-2').should('have.text', 'Free');
    //Frequently asked questions
    cy.get('#faq h1.my-4').should('have.text', 'Frequently Asked Questions.');
    cy.get('#faq li:nth-child(1) div.bx--accordion__title').should('have.text', 'Lorem ipsum dolor sit, amet con');
    cy.get('#faq li:nth-child(2) div.bx--accordion__title').should('have.text', 'Lorem ipsum dolor sit, amet con');
    cy.get('#faq li:nth-child(3) div.bx--accordion__title').should('have.text', 'Lorem ipsum dolor sit, amet con');
    //Have you got any questons?
    cy.get('#contact p.text-center').should('have.text', 'Reach out to us with any question you might have.');
    //location,phone,email
    cy.get('#contact span.text-primary-600').should('have.text', 'Question?');
    cy.get('#contact div.bx--row div:nth-child(1)').should('have.text', ' Ashwoodfield House Farm, Kidderminster Rd, Stourbridge, Kingswinford DY6 0AA');
    cy.get('#contact div.bx--row div:nth-child(2)').should('have.text', ' +4407339904995');
    cy.get('#contact div:nth-child(3) p.mt-3').should('have.text', 'help@lms.com');
    //Question Submission form

    cy.get('#contact p.font-bold').should('have.text', 'Your Name ');
    cy.get('#contact input[placeholder="Elon Musk"]').should('be.visible');
    cy.get('#contact p.flex span').should('have.text', 'Your Message ');
    cy.get('#contact textarea.block').should('be.visible');
    cy.get('#contact label:nth-child(2) p.text-left').should('have.text', 'Your Email ');
    cy.get('#contact input[placeholder="musk@x.com"]').should('be.visible');
    cy.get('#contact label:nth-child(3) p.text-left').should('have.text', 'Your Phone ');
    cy.get('#contact input[placeholder="+1194802480"]').should('be.visible');
    cy.get('#contact button.flex').should('have.text', ' Submit ');
    //Newsletter subsription
    cy.get('#waitlist h1.mb-5').should('have.text', 'Join our mailing list');
    cy.get('#waitlist p.text-white').should('have.text', 'We are constantly releasing new courses and sharing them with our email list. Subscribe to get notified once we release a new course');
    cy.get('#waitlist input.false').should('be.visible');
    cy.get('#waitlist button.flex').should('have.text', ' Subscribe');

    // //Login Section redirect
    cy.get('div.space-y-3 button.flex').should('have.text', ' Login');
    cy.get('div.space-y-3 button.flex').should('be.visible');
    cy.get('div.space-y-3 button.flex').click();
    cy.get('a.text-md').should('have.text', 'Forgot password?');
  })

  it('enter login page', () => {
    //Login Section
    //
    cy.visit('https://uniutara.classroomio.com/login');
    //Login into dashboard(empty field)
    cy.get('button.font-bold').should('be.visible');
    cy.get('button.font-bold').should('have.text', ' Log In');
    cy.get('button.font-bold').click();
    //email validation text
    cy.get('label:nth-child(2) p.text-red-500').should('have.text', 'Invalid email address');
    cy.get('label:nth-child(2) p.text-red-500').should('be.visible');
    //password validation text
    cy.get('label:nth-child(3) p.text-red-500').should('have.text', 'Must be 6 or more characters long');
    cy.get('label:nth-child(3) p.text-red-500').should('be.visible');
    //classroomio logo
    cy.get('img.mr-2').should('be.visible');
    //UniUtara header
    cy.get('h4.mt-0').should('be.visible');
    cy.get('h4.mt-0').should('have.text', 'UniUtara');
    //welcome back subheader
    cy.get('p.font-semibold').should('have.text', 'Welcome back');
    cy.get('p.font-semibold').should('be.visible');
    //your email label
    cy.get('label:nth-child(2) p.text-left').should('have.text', 'Your email ');
    cy.get('label:nth-child(2) p.text-left').should('be.visible');
    //your password label
    cy.get('label:nth-child(3) p.text-left').should('have.text', 'Your password ');
    cy.get('label:nth-child(3) p.text-left').should('be.visible');
    //hide passsword icon suffix
    cy.get('svg.dark').should('be.visible');
    //forgot password hyperlink
    cy.get('a.text-md').should('have.text', 'Forgot password?');
    cy.get('a.text-md').should('be.visible');
    //or sign up with Google
    cy.get('p.mb-5').should('have.text', 'or sign up with:');
    cy.get('p.mb-5').should('be.visible');
    //login with google button
    cy.get('button.border').should('have.text', '  Login with Google');
    cy.get('span.ml-2').should('be.visible');
    //have not registered yet, with sign up hyperlink
    cy.get('div.border-grey').should('have.text', 'Not registered yet? Sign up');
    cy.get('div.border-grey').should('be.visible');
    cy.get('a.hover\\:underline').should('be.visible');
    //input email and password
    cy.get('input[placeholder="you@domain.com"]').should('be.visible').type('warisan6660@gmail.com');
    cy.get('input[placeholder="************"]').should('be.visible').type('warisan6660');
    //Login into dashboard
    cy.get('button.font-bold').should('be.visible');
    cy.get('button.font-bold').should('have.text', ' Log In');
    cy.get('button.font-bold').click();
  })




  it('enter dashboard section', () => {
    //Dashboard Section
    //
    // UniUtara header
    cy.visit('https://uniutara.classroomio.com/lms')
    //login with email and password
    cy.get('input[placeholder="you@domain.com"]').should('be.visible').type('warisan6660@gmail.com');
    cy.get('input[placeholder="************"]').should('be.visible').type('warisan6660');
    cy.get('button.font-bold').click();

    //enter uniutara dashboard
    cy.get('#logo span.line-clamp-1').should('have.text', 'UniUtara');
    cy.get('#logo p.font-bold').should('be.visible');
    //bell and moon(dark mode )icon
    cy.get('svg.mr-2').should('be.visible');
    cy.get('button.small svg.text-white').should('be.visible');
    //Profile pic
    cy.get('img.w-20').should('be.visible');
    //username
    cy.get('p.whitespace-nowrap').should('be.visible');
    cy.get('p.whitespace-nowrap').should('have.text', 'warisan6660');
    //greetings
    cy.get('h1.text-2xl').should('have.text', 'Good Afternoon warisan6660!');
    cy.get('h1.text-2xl').should('be.visible');
    //visit website
    cy.get('button.bg-black').should('have.text', ' Visit Website ');
    cy.get('button.bg-black').should('be.visible');
    //home section and icon suffix
    cy.get('li.text-black p.dark\\:text-white').should('have.text', 'Home');
    cy.get('li.text-black p.dark\\:text-white').should('be.visible');
    cy.get('li.text-black svg.dark').should('be.visible');
    //My learning
    cy.get('a[href="/lms/mylearning"] p.dark\\:text-white').should('have.text', 'My Learning');
    cy.get('a[href="/lms/mylearning"] p.dark\\:text-white').should('be.visible');
    cy.get('a[href="/lms/mylearning"] svg.dark').should('be.visible');
    //Exercise
    cy.get('a[href="/lms/exercises"] p.dark\\:text-white').should('have.text', 'Exercise');
    cy.get('a[href="/lms/exercises"] svg.carbon-icon').should('be.visible');
    cy.get('a[href="/lms/exercises"] p.dark\\:text-white').should('be.visible');
    //Explore
    cy.get('a[href="/lms/explore"] p.dark\\:text-white').should('have.text', 'Explore');
    cy.get('a[href="/lms/explore"] p.dark\\:text-white').should('be.visible');
    cy.get('a[href="/lms/explore"] svg.carbon-icon').should('be.visible');
    //Community
    cy.get('a[href="/lms/community"] p.dark\\:text-white').should('have.text', 'Community');
    cy.get('a[href="/lms/community"] p.dark\\:text-white').should('be.visible');
    cy.get('svg[viewBox="0 0 22 22"]').should('be.visible');
    //help
    cy.get('ul.pb-5 li.flex p.dark\\:text-white').should('have.text', 'Help');
    cy.get('ul.pb-5 li.flex p.dark\\:text-white').should('be.visible');
    cy.get('svg.dark\\:text-white').should('be.visible');
    //account free tools
    cy.get('p.font-medium').should('have.text', 'warisan6660');
    cy.get('p.font-medium').should('be.visible');
    cy.get('img.w-\\[1\\.2rem\\]').should('be.visible');
    //Motivation quotes and 'Dont give up' button
    cy.get('button.bg-white').should('have.text', ' Don\'t give up');
    cy.get('button.bg-white').should('be.visible');
    cy.get('p.text-white').should('have.text', 'Today is another day to bring you closer to your learning goals. Don’t give up, the more you learn the better you get.');
    cy.get('p.text-white').should('be.visible');
    cy.get('img.mb-3').should('be.visible');
    cy.get('div.flex-col-reverse').should('be.visible');
    //Currently learning (enrolled course)
    cy.get('section.h-full p.text-base.pb-3').should('have.text', 'Currently Learning');
    cy.get('section.h-full p.text-base.pb-3').should('be.visible');
    //Software Testing item, description, 'continue' button
    cy.get('span.flex-col p.text-base').should('have.text', 'Software Testing');
    cy.get('p.line-clamp-2').should('have.text', 'To test software using tools');
    cy.get('span.flex-col p.text-base').should('be.visible');
    cy.get('p.line-clamp-2').should('be.visible');
    cy.get('button.border').should('have.text', ' Continue');
    cy.get('button.border').should('be.visible');
    cy.get('div.absolute').should('be.visible');
    //enrolled course progress, logo, percentage


    cy.get('a[href="/lms/mylearning"] p.dark\\:text-white').click();

    cy.get('#ccs-0\\.e2vfwnxk1va').should('be.visible');
    cy.get('#ccs-0\\.e2vfwnxk1va').should('be.enabled');

    cy.get('h1.text-3xl').click();
    cy.get('h1.text-3xl').should('have.text', 'My Learning');
    cy.get('h1.text-3xl').should('be.visible');

    cy.get('button.text-primary-700 div.flex').should('have.text', 'In progress (0)');
    cy.get('button.text-primary-700').should('be.visible');

    cy.get('button.dark\\:bg-gray-500 div.flex').should('have.text', 'Complete (1)');
    cy.get('button.dark\\:bg-gray-500 div.flex').should('be.visible');

    cy.get('rect[x="21.8751"]').click();

    cy.get('h3.my-5').should('have.text', 'No Course In progress');
    cy.get('h3.my-5').should('be.visible');

    cy.get('p.w-1\\/3').click();
    cy.get('p.w-1\\/3').should('have.text', 'Any course that you start will be displayed here');
    cy.get('p.w-1\\/3').should('be.visible');

    cy.get('button.dark\\:bg-gray-500 div.flex').click();

    cy.get('img.w-full').should('be.visible');

    cy.get('span.font-mono').should('have.text', ' Self paced');
    cy.get('span.font-mono').should('be.visible');

    cy.get('h3.title').should('have.text', 'Software Testing');
    cy.get('h3.title').should('be.visible');

    cy.get('p.description').click();
    cy.get('div.center').click();
    cy.get('li:nth-child(3) button.root').click();
    cy.get('button.dark\\:bg-gray-500').click();

    cy.get('p.description').should('have.text', 'To test software using tools');
    cy.get('p.description').should('be.visible');

    cy.get('button.flex').should('have.text', ' Continue Course');
    cy.get('button.flex').should('be.visible');

    cy.get('p.false').should('have.text', '1 lessons');
    cy.get('p.false').should('be.visible');

    cy.get('p.py-2.text-xs').should('have.text', ' 100%');
    cy.get('p.py-2.text-xs').should('be.visible');


    cy.get('div.gap-2').should('be.visible');
    cy.get('button.flex').click();

  })



});

it('Demo', function () {
  cy.visit('https://uniutara.classroomio.com')
});
