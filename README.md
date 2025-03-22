# BestBarber

Best Barber is a made up company who provides barber services to its customers. Customers who visit their website will get a glimpse of the company's aim and employees. As someone
might be interested in trying one of the services provided, users have a chance to request an appointment, or simply ask a question. A gallery is present on the site to showcase
some of the services as well.

[Deployed site](https://bics.github.io/BestBarber/)

# Table of contents    

1. [UX](#ux)
2. [Features](#features)
    1. [Existing Features](#existing-features)
    2. [Future Features Consideration](#future-features-consideration)
3. [Technologies used](#technologies-used)
4. [Testing](#testing)
    1. [Manual Testing](#manual-testing)
    2. [Automated Testing](#automated-testing)
5. [Deployment](#deployment)
6. [Credits](#credits)
7. [Acknowledgements](#acknowledgements)
8. [Disclaimer](#disclaimer)

# UX

# Features

## Existing features

### Navigation bar
The navigation bar is positioned and fixed at the top of the pages.\
Styling is consistent across all pages. However on smaller devices the nevigation bar takes up the full width of the screen, as we go to larger screens above tablet size it's size only takes a fraction (30 percent) of the screen and receives a shadow around to highlight it's position.\
It helps navigate through all main pages, namely Home, Gallery and Contact Us.

### Footer
The footer element is positioned and fixed at the bottom of the pages.\
Styling is consistent across all pages. However on smaller devices the footer takes up the full width of the screen, as we go to larger screens above tablet size it's size only takes a fraction (30 percent) of the screen and receives a shadow around to highlight it's position.\
The element provides links to social media platforms, namely in order Facebook, X, Google and Github.

### Landing page 

* #### Description

This element provides an overview of the company itself, and also includes the services provided by the establishment to it's users.

* #### Employee introduction

This section provides an overview of the staff.\
All staff member currently employed is presented with a background and a little bit of personal touch.

### Gallery page

* #### Gallery section

This section purpose is to showcase the services, and provide pointers to future customers.\
Images all have the same sizes, and styled to properly fit on all devices. On smaller devices these are achived by simply showing one column of pictures. As we increase the screen size
on tablet sizes, we will see the two columns. On the largest screen sizes four columns are shown.\
Spacing between images on smaller (phones and tablets) screens will be minimal to save space. On larger screens a more spacious grid appears to separate each image.

### Contact Us page

* #### Contact section
This is the section were the users can interact with the site.\
As mentioned before users might be tempted to make an appointment. This section shows the currently employed barbers, and both their picture and name will bring up a form to request an 
appointment. \
The form appears on the screen as a modal in the center of the screen.\
Below the employees is a link to open the form but instead of an appointment the users can submit a question.\
\
The form itself as previously stated is a modal to ensure a dynamic flow of interaction. The form itself in all cases have a required "Name" and "Email" input.\
Depending on the action chosen (appointment or general question), a date picker and employee selector is present for appointments and a text area is present for the other case. All fields are required to submit the form on their respective action.\
\
Once the form is submitted a confirmation is shown to inform the user.

## Future features consideration

### Landing page 

* A map can be added to help customers locate the shop.
* Further images can be added showing the inside of the shop.

### Gallery page

* Sections can be categorized for each services.

### Contact Us page

* A chatbot can be included in the page to help the users immediatly with any questions.
* Address and telephone number can be added to encoruage customers to get in touch either in person or via phone.

# Technologies used

* The core project is written in HTML5, CSS3 and Javascript.
* Used [Balsamiq](https://balsamiq.com) to create wriframes.
* Used [Visual Studio Code](https://code.visualstudio.com) as IDE.
* Used [Github](https://github.com) to store and deploy the repository.
* Used [Sourcetree](https://www.sourcetreeapp.com) for version control.
* Used [Opera](https://www.opera.com), [Mozilla](https://www.mozilla.org/en-GB/) and [Chrome](https://www.google.com/intl/en_uk/chrome/) browsers and their respective developer tools for testing.
* Used [ChatGPT](https://chatgpt.com) to help with the content, and a bit of debugging.
* Used [W3Schools](https://www.w3schools.com) to help to understand and write codes.
* Frequently visited [Stack Overflow](https://stackoverflow.com/questions) to understand some behaviours.
* Used [W3C](https://www.w3.org) to validate both html and css files.
* Used [Jshint](https://jshint.com) to validate js file.
* Used [Behind the Name](https://www.behindthename.com) name generator to generate names.
* Used [Lorem Ipsum](https://www.lipsum.com) to generate initial content.
* Used [Font Awesome](https://fontawesome.com) to display footer elements.
* Used [Freepik](https://www.freepik.com) to acquire free images.

# Testing

## Manual testing

### Contact (contact-us.html) page

Form testing:

devtools - "An invalid form control with name='' is not focusable."
add type="button"
mentioned https://stackoverflow.com/questions/22148080/an-invalid-form-control-with-name-is-not-focusable

## Automated testing

Used [W3C](https://www.w3.org) validator for both [html](https://validator.w3.org) and [css](https://jigsaw.w3.org/css-validator/) validation.
Used [Jshint](https://jshint.com) for javascript validation

### HTML validation

Main (index.html) page testing:
* During validation only 1 warning was flagged
    * Introduction section was lacking a heading element
    
Steps taken:
1. Added a heading element with a class attribute "hidden-heading".

Gallery (gallery.html) page testing:
* During validation only 1 warning was flagged
    * Gallery section was lacking a heading element

Steps taken:
1. Added a heading element with a class attribute "hidden-heading". These classes meant to be hidden, updated the display property in css to the value "none".


Contact (contact-us.html) page testing:
* During validation 7 errors were present
    * Form on page didn't have an action.
    * Two div element was present with the same id, "name-input"
    * Script tags was marked as stray, as it was outside both the header and body element.
    * Bad value Cesarina Polyphonte for attribute id on element a: An ID must not contain whitespace.
    * Bad value Patrícia Odelia for attribute id on element a: An ID must not contain whitespace.
    * Bad value Heimdallr Hermokrates for attribute id on element a: An ID must not contain whitespace.
    * A select element with a required attribute, and without a multiple attribute, and without a size attribute whose value is greater than 1, must have a child option element.

Steps taken:
1. Filled action value of form with the method "Post"
2. Renamed the id of the email input container.
3. Simply replaced script tags to be inside the body element.
4. Ids were corrected, and updated scripts to reformat names.
5. Removed "required" attribute from select element, and readding attribute inside script.

After these errors were corrected there were no more errors or warnings.

### CSS validation 

Style (style.css) testing:
* During validation there were no errors present

A couple warning were given for "-webkit-animation-name" and "-webkit-animation-duration". As this is a code not written by me, I choose to ignore these warnings.

### JS validation

Contact (contact-us.js) testing:
* During validation the following warnings were present:
    * Line 6, Column 73: Missing semicolon.
    * Line 8, Column 70: Missing semicolon.
    * Line 14, Column 71: Missing semicolon.
    * Line 17, Column 72: Missing semicolon.
    * Multiple instances of the following warnings
        * 35	'let' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
        * 109	'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz).
    * Line 83, Column 9: Confusing use of '!'.

Steps taken:
1. Semicolons added to line ends.
2. Decided to ignore the "'let'/'const' is available in ES6 (use 'esversion: 6') or Mozilla JS extensions (use moz)" warnings as the scripts working as intended on all tested browsers including Mozilla.
3. Removed negative if statement, should have been consistent as the other validation methods return true by default.


# Deployment

### Github pages

The project is deployed to Github Pages. In order to achieve this the following steps were taken:\
\
1. Sign into [Github](https://github.com/).
2. Locate the [Best Barber](https://github.com/bics/BestBarber) repository.
3. Locate the settings for the repository on the top navigation bar.
4. On the left hand side menu select the "Pages" option.
5. Under the "Branch" option select the main branch to deploy and press save.
6. Go to the "Code" window.
7. On the right hand side a new element should appear with the name "Deployments" which should reveal the deployed site url.

### Forking a repository

1. Sign into [Github](https://github.com/) (can be done later).
2. On [Github](https://github.com/) locate the [Best Barber](https://github.com/bics/BestBarber) repository.
3. On the top right hand side click on the "Fork" option.
4. Sign into [Github](https://github.com/) (not needed if step 1. was taken).
5. The repository should be present under your account's repositories.

### Clone online repository

1. Navigate to the [Best Barber](https://github.com/bics/BestBarber) repository.
2. On the right side select the "Code" dropdown menu.
3. Download the repository as a .zip file.
4. Extract the downloaded file.
5. Open up your preferred IDE and add the extracted folder as a project.

### Clone a repository with Sourcetree

1. Import SSH key. If SSH key already imported skip these steps
    1. Acquire the SSH key, and password for this repository.
    2. Locate the "Tools" menu, and select the "Create or import SSH keys" option.
    3. In the dialog select "Load" and locate the acquired SSH key.
    4. If prompted sign in to [Github](https://github.com/) account and enter the password.
2. Click on the "+" icon to add a local repository.
3. Select the "Remote" option on the top navigation bar.
4. Search for the [Best Barber](https://github.com/bics/BestBarber) repository and hit clone.

# Credits

Code snippet taken and modified from https://www.w3schools.com/howto/howto_css_modals.asp for modal animation fade in

Awesomefonts link copied from previous LoveRunning project.

Image sources:

barber-shop-landing-image: https://www.freepik.com/free-vector/realistic-barbershop-horizontal-banner_31590549.htm#fromView=search&page=8&position=32&uuid=27045d49-26c3-4cd5-8895-d4bb624f4cb8&query=barbershop+vintage

barber-icon: https://www.freepik.com/premium-vector/vintage-barber-shop-badge-emblem-isolated-white_10828038.htm#fromView=keyword&page=1&position=22&uuid=4f4f69f1-e4f8-4e17-ae8d-70090e3a3fe6&query=Barber+Logo

barber-icon-free: https://www.freepik.com/free-vector/vintage-monochrome-straight-razor-concept_8136754.htm#fromView=search&page=1&position=15&uuid=0f64edc2-b4f9-4478-ba39-b4171cd70b4b&query=Barber+icon+single

barber-gallery-1: https://www.freepik.com/free-photo/handsome-man-cutting-beard-barber-shop-salon_7377648.htm#fromView=search&page=1&position=38&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-2: https://www.freepik.com/free-photo/stylish-man-sitting-barbershop_4587639.htm#fromView=search&page=1&position=45&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-3: https://www.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_7376806.htm#fromView=search&page=2&position=27&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-4: https://www.freepik.com/free-photo/handsome-man-cutting-beard-barber-salon_7435505.htm#fromView=search&page=3&position=3&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-5: https://www.freepik.com/free-photo/client-doing-hair-cut-barber-shop-salon_7377260.htm#fromView=search&page=3&position=6&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-6: https://www.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_7377927.htm#fromView=search&page=3&position=24&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-7: https://www.freepik.com/free-photo/man-getting-his-hair-trimmed-with-scissor_10521187.htm#fromView=search&page=3&position=28&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-8: https://www.freepik.com/free-photo/hairdresser-barber-shop-styling-hair-client_7435512.htm#fromView=search&page=3&position=37&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-9: https://www.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_7435492.htm#fromView=search&page=4&position=1&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-gallery-10: https://www.freepik.com/free-photo/man-barbershop-salon-doing-haircut-beard-trim_7435495.htm#from_element=detail_alsolike

barber-gallery-11: https://www.freepik.com/free-photo/man-getting-his-beard-shaved-with-razor_10518183.htm#fromView=search&page=5&position=34&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-employee-1: https://www.freepik.com/free-photo/young-caucasian-hipster-like-man-white-t-shirt-trying-decide-whether-shave-his-long-red-hair-beard-stylish-guy-holding-straight-razor-with-serious-facial-expression-look_9660376.htm#fromView=search&page=5&position=30&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-employee-2:https://www.freepik.com/free-photo/professional-bearded-barber-man-apron-holding-hair-cutting-machine-smiling-friendly-showing-thumbs-up-standing-purple-wall_12177432.htm#fromView=search&page=6&position=27&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

barber-employee-3: https://www.freepik.com/free-photo/portrait-tattooed-hipster-with-full-beard-stylish-haircut-dressed-gray-t-shirt-stands-with-thinking-look-studio-dark-background_27481079.htm#fromView=search&page=8&position=45&uuid=cbe20e90-7f49-4842-9e84-dbf3fe5e021e&query=Barber

wooden-background: https://www.freepik.com/free-photo/black-wooden-plank-textured-background_17848450.htm#fromView=search&page=1&position=40&uuid=167896f4-5ebc-43a4-bf99-76b2740a1faf&query=darkwood

forward-arrow/backward-arrow : https://www.freepik.com/free-vector/dotted-arrow-icon-sticker-direction-symbol-vector-black-white_18711331.htm#fromView=keyword&page=1&position=4&uuid=138a14e8-442b-4311-9900-af97402623dc&query=Next

# Acknowledgements

# Disclaimer