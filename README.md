# BestBarber

# Table of contents    

1. [Overview](#overview)
2. [UX](#ux)
3. [Features](#features)
4. [Technologies used](#technologies-used)
5. [Testing](#testing)
6. [Deployment](#deployment)
7. [Credits](#credits)
8. [Acknowledgements](#acknowledgements)
9. [Disclaimer](#disclaimer)

# Overview

# UX

# Features

# Technologies used

# Testing

Used W3C validator for both html and css validation.

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
* During validation 3 errors were present
    * Form on page didn't have an action.
    * Two div element was present with the same id, "name-input"
    * Script tags was marked as stray, as it was outside both the header and body element.

Steps taken:
1. Filled action value of form with the method "Post"
2. Renamed the id of the email input container.
3. Simply replaced script tags to be inside the body element.

After these errors were corrected there were no more errors or warnings.

### CSS validation 

Style (style.css) testing:
* During validation there were no errors present

A couple warning were given for "-webkit-animation-name" and "-webkit-animation-duration". As this is a code not written by me, I choose to ignore these warnings.

# Deployment

# Credits

Code snippet taken and modified from https://www.w3schools.com/howto/howto_css_modals.asp for modal animation fade in

Name generator: https://www.behindthename.com

Lorem ipsum generator: https://www.lipsum.com

Heavily relied on https://chatgpt.com for content.

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